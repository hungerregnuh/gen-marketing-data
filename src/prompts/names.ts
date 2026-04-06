// {
//   "model": "mistral-small-3.2-24b-instruct-2506",
//   "store": false,
//   "input": "You're a product manufacturer creating Electronics.  Generate me a 6 names for Speakers.  Just give me names, there's no need to understand the target demographic or specifications.  Return the names as a comman separated list, do not include new lines, do not include any other text."
// }
//

import { MarketingCampaign } from '../generators/campaign/campaign';
import { ProductType } from '../generators/product/product-type';

const BASE_CAMPAIGN_INSTRUCTIONS = `There's no need to understand the target demographic.
just give me a name as a string, do not format the string and do not quote the string.`;

const BASE_PRODUCT_INSTRUCTIONS = `Just give me names, there's no need to understand the target demographic or specifications.
Return the name(s) as a comma separated list, do not include new lines, do not include any other text.
`;

export function productNamePrompt(
  nameCount: number,
  productCategory: string,
  productType: string
): string {
  return `You're a product manufacturer creating ${productCategory}.
Generate me ${nameCount} names for ${productType}.

${BASE_PRODUCT_INSTRUCTIONS}
`;
}

export function marketingCampaignNamePrompt(
  type: ProductType,
  previousNames: string[]
): string {
  return `You're a marketing firm focused on brand awareness, launching new products and boosting sales.
Create a name for a marketing campaign for ${type.name} (${type.categoryName}).
The name should be catchy, recognizable and appeal to a wide demographic.

Do not reuse names.
Previously used names are: ${previousNames.join(', ')}

${BASE_CAMPAIGN_INSTRUCTIONS}
`;
}
