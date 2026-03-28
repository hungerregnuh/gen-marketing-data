// {
//   "model": "mistral-small-3.2-24b-instruct-2506",
//   "store": false,
//   "input": "You're a product manufacturer creating Electronics.  Generate me a 6 names for Speakers.  Just give me names, there's no need to understand the target demographic or specifications.  Return the names as a comman separated list, do not include new lines, do not include any other text."
// }
//

const BASE_INSTRUCTIONS = `
    Just give me names, there's no need to understand the target demographic or specifications.

    Return the name(s) as a comma separated list, do not include new lines, do not include any other text.
`;

export function productNamePrompt(
  productCategory: string,
  nameCount: number,
  productType: string
): string {
  return `
        You're a product manufacturer creating ${productCategory}.

        Generate me ${nameCount} names for ${productType}.

        ${BASE_INSTRUCTIONS}
    `;
}
