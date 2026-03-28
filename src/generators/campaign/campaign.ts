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
  productCategoryName?: string;
  productTypeId: string;
  productTypeName?: string;
}
