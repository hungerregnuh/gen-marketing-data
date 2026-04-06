import { random } from 'lodash';
import type { ProductType } from '../product/product-type';
import { APP_CONFIG } from '../../app.config';
import { randomUUID } from 'node:crypto';
import { isAfter, startOfMonth } from 'date-fns/fp';
import { addMonths, endOfMonth, isBefore, subMonths } from 'date-fns';
import { db } from '../../../seed';

export interface MarketingCampaign {
  id: string;
  parentCampaignId?: string;
  name: string;
  budget: number;
  revenue?: number;
  netRevenue?: number;
  clicks?: number;
  conversions?: number;
  conversionRate?: string;
  productCategoryId: string;
  productCategoryName: string;
  productTypeId: string;
  productTypeName: string;
  startDate: Date;
  endDate: Date;
  childCampaigns?: MarketingCampaign[];
}

// Sort of randomly pick whether or not a campaign should have children
function shouldCampaignHaveChildren(): boolean {
  return random(0, 10, false) >= 3;
}

function genCampaign(
  type: ProductType,
  startDate: Date,
  endDate: Date,
  parentCampaignId?: string
): MarketingCampaign {
  return {
    id: randomUUID(),
    parentCampaignId: parentCampaignId,
    name: 'test', // gen name
    budget: random(100000, 1000000, false),
    productCategoryId: type.categoryId,
    productCategoryName: type.categoryName,
    productTypeId: type.id,
    productTypeName: type.name,
    startDate,
    endDate,
  };
}

async function commitCampaign(campaign: MarketingCampaign): Promise<void> {
  try {
    await db.execute(`INSERT INTO marketing_campaign
    (id, parent_campaign_id, name, budget, product_category_id, product_category_name, product_type_id, product_type_name, start_date, end_date)
    VALUES ('${campaign.id}', ${campaign.parentCampaignId ? "'" + campaign.parentCampaignId + "'" : null}, '${campaign.name}', ${campaign.budget}, '${campaign.productCategoryId}', '${campaign.productCategoryName}', '${campaign.productTypeId}', '${campaign.productTypeName}', '${campaign.startDate.toISOString()}', '${campaign.endDate.toISOString()}')
;`);
  } catch (err) {
    console.error('Unable to commit campaign', campaign);
    console.error(err);
    process.exit();
  }
}

async function createMarketingCampaign(
  type: ProductType,
  startDate: Date,
  endDate: Date
): Promise<MarketingCampaign> {
  const campaign: MarketingCampaign = genCampaign(type, startDate, endDate);
  let childCampaignA: MarketingCampaign | null = null;
  let childCampaignB: MarketingCampaign | null = null;

  if (shouldCampaignHaveChildren()) {
    childCampaignA = genCampaign(type, startDate, endDate, campaign.id);
    childCampaignB = genCampaign(type, startDate, endDate, campaign.id);

    campaign.childCampaigns?.push(childCampaignA, childCampaignB);
    campaign.budget = childCampaignA.budget + childCampaignB.budget;
  }

  await commitCampaign(campaign);

  if (childCampaignA) {
    await commitCampaign(childCampaignA);
  }

  if (childCampaignB) {
    await commitCampaign(childCampaignB);
  }

  return campaign;
}

export async function seedMarketingData(
  productTypes: ProductType[],
  startDate: Date
): Promise<MarketingCampaign[]> {
  const campaigns: MarketingCampaign[] = [];
  const currentMonth = startOfMonth(subMonths(new Date(), 1));

  for (let i = 0; i < productTypes.length; i++) {
    console.log(
      'Creating campaign for',
      productTypes[i].categoryName,
      productTypes[i].name
    );
    let currentCampaignDate = startDate;
    const duration = random(
      APP_CONFIG.minCampaignDuration,
      APP_CONFIG.maxCampaignDuration,
      false
    );

    while (isBefore(currentCampaignDate, currentMonth)) {
      const campaignDateAdded = addMonths(currentCampaignDate, duration);
      const endDate = isAfter(campaignDateAdded, startOfMonth(currentMonth))
        ? currentMonth
        : campaignDateAdded;
      const campaign = await createMarketingCampaign(
        productTypes[i],
        currentCampaignDate,
        endOfMonth(endDate)
      );
      currentCampaignDate = campaign.endDate;
    }
  }

  return campaigns;
}
