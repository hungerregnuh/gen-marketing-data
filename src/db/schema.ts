import {
  AnyPgColumn,
  boolean,
  date,
  decimal,
  integer,
  pgTable,
  text,
  uuid,
} from 'drizzle-orm/pg-core';

// Marketing tables
export const marketingCampaign = pgTable('marketing_campaign', {
  id: uuid().primaryKey(),
  parentCampaignId: uuid().references((): AnyPgColumn => marketingCampaign.id),
  name: text().notNull(),
  budget: integer().default(-1).notNull(),
  revenue: integer(),
  netRevenue: integer(),
  clicks: integer(),
  conversions: integer(),
  conversionRate: decimal(),
  productCategoryId: uuid()
    .notNull()
    .references(() => productCategory.id),
  productCategoryName: text(),
  productTypeId: uuid()
    .notNull()
    .references(() => productType.id),
  productTypeName: text(),
});

export const impressionTable = pgTable('impression', {
  id: uuid().primaryKey(),
  campaignId: uuid().notNull(),
  clicked: boolean().default(false).notNull(),
  dateSeen: date(),
});

// Product tables
export const productCategory = pgTable('product_category', {
  id: uuid().primaryKey(),
  name: text().notNull(),
  productCount: integer(),
  revenue: integer(),
  unitsSold: integer(),
});

export const productType = pgTable('product_type', {
  id: uuid().primaryKey(),
  categoryId: uuid().references(() => productCategory.id),
  categoryName: text(),
  name: text().notNull(),
  productCount: integer(),
  revenue: integer(),
  unitsSold: integer(),
});

export const product = pgTable('product', {
  id: uuid().primaryKey(),
  categoryId: uuid().references(() => productCategory.id),
  categoryName: text(),
  productTypeId: uuid().references(() => productType.id),
  productTypeName: text(),
  name: text().notNull(),
  description: text().notNull(),
  price: integer(),
  rating: integer(),
});

export const productEngagement = pgTable('product_engagement', {
  id: uuid().primaryKey(),
  engagementDate: date().notNull(),
  productRating: integer(),
  productReview: text(),
  price: integer(),
  addedToCart: boolean().default(false).notNull(),
  impressionId: uuid().references(() => impressionTable.id),
});
