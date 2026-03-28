export interface ProductEngagement {
  id: string;
  engagementDate: string;
  addedToCart: boolean;
  productRating?: number;
  productReview?: string;
  price?: number;
  impressionId?: string;
}
