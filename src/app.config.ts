export const APP_CONFIG = {
  maxConcurrentThreads: 4,

  // Product
  minProductTypePerCategory: 6,
  maxProductTypePerCategory: 8,
  minSalesPerDayPerProductType: 2,
  maxSalesPerDayPerProductType: 5,

  // Campaign
  // Will go back 1 year from the current year and month.  So if today is 2026.04.15, then first campaign will start 2025.04.01
  numberOfYears: 1,
  minCampaignDuration: 1, // Duration in months
  maxCampaignDuration: 9, // Duration in months
};

export const PRODUCT_CATEGORIES = [
  {
    name: 'Electronics',
    type: [
      { name: 'Cellphone', maxPrice: 1800, minPrice: 150 },
      { name: 'TV', maxPrice: 5000, minPrice: 250 },
      // { name: 'Computers', maxPrice: 4000, minPrice: 400 },
      // { name: 'Laptops', maxPrice: 3500, minPrice: 300 },
      // { name: 'Tablets', maxPrice: 1200, minPrice: 100 },
      // { name: 'Smartwatches', maxPrice: 900, minPrice: 50 },
      // { name: 'Headphones', maxPrice: 600, minPrice: 20 },
      // { name: 'Cameras', maxPrice: 6000, minPrice: 400 },
      // { name: 'Speakers', maxPrice: 1500, minPrice: 30 },
      // { name: 'Gaming Consoles', maxPrice: 700, minPrice: 250 },
    ],
  },
  {
    name: 'Clothing',
    type: [
      { name: 'Sweaters', maxPrice: 450, minPrice: 30 },
      // { name: 'Pants', maxPrice: 300, minPrice: 25 },
      // { name: 'Shoes', maxPrice: 1200, minPrice: 40 },
      // { name: 'Jackets', maxPrice: 1500, minPrice: 60 },
      // { name: 'T-Shirts', maxPrice: 150, minPrice: 15 },
      // { name: 'Dresses', maxPrice: 2000, minPrice: 40 },
      // { name: 'Shorts', maxPrice: 120, minPrice: 20 },
      // { name: 'Socks', maxPrice: 40, minPrice: 5 },
      // { name: 'Underwear', maxPrice: 80, minPrice: 10 },
    ],
  },
  // {
  //   name: 'Kitchenware',
  //   type: [
  //     { name: 'Silverware', maxPrice: 600, minPrice: 40 },
  //     { name: 'Appliances', maxPrice: 2500, minPrice: 80 },
  //     { name: 'Storage containers', maxPrice: 150, minPrice: 20 },
  //     { name: 'Cookware Sets', maxPrice: 1200, minPrice: 100 },
  //     { name: 'Bakeware', maxPrice: 300, minPrice: 15 },
  //     { name: 'Knives', maxPrice: 800, minPrice: 30 },
  //     { name: 'Coffee Makers', maxPrice: 1500, minPrice: 40 },
  //     { name: 'Blenders', maxPrice: 600, minPrice: 30 },
  //     { name: 'Toasters', maxPrice: 200, minPrice: 25 },
  //   ],
  // },
  // {
  //   name: 'Furniture',
  //   type: [
  //     { name: 'Sofas', maxPrice: 8000, minPrice: 500 },
  //     { name: 'Dining Tables', maxPrice: 4500, minPrice: 200 },
  //     { name: 'Office Chairs', maxPrice: 1800, minPrice: 100 },
  //     { name: 'Beds', maxPrice: 6000, minPrice: 300 },
  //     { name: 'Bookshelves', maxPrice: 1200, minPrice: 80 },
  //     { name: 'Coffee Tables', maxPrice: 900, minPrice: 70 },
  //     { name: 'Nightstands', maxPrice: 500, minPrice: 40 },
  //     { name: 'Wardrobes', maxPrice: 3000, minPrice: 200 },
  //   ],
  // },
  // {
  //   name: 'Automotive',
  //   type: [
  //     { name: 'Tires', maxPrice: 500, minPrice: 80 },
  //     { name: 'Dash Cams', maxPrice: 600, minPrice: 50 },
  //     { name: 'Car Audio', maxPrice: 2000, minPrice: 150 },
  //     { name: 'GPS Units', maxPrice: 400, minPrice: 80 },
  //     { name: 'Floor Mats', maxPrice: 250, minPrice: 30 },
  //     { name: 'Car Covers', maxPrice: 300, minPrice: 50 },
  //     { name: 'Seat Covers', maxPrice: 400, minPrice: 40 },
  //     { name: 'Wiper Blades', maxPrice: 60, minPrice: 15 },
  //   ],
  // },
  // {
  //   name: 'Beauty',
  //   type: [
  //     { name: 'Skincare', maxPrice: 400, minPrice: 10 },
  //     { name: 'Makeup', maxPrice: 250, minPrice: 5 },
  //     { name: 'Fragrance', maxPrice: 600, minPrice: 40 },
  //     { name: 'Hair Care', maxPrice: 300, minPrice: 8 },
  //     { name: 'Nail Care', maxPrice: 150, minPrice: 5 },
  //     { name: "Men's Grooming", maxPrice: 200, minPrice: 15 },
  //     { name: 'Tools and Brushes', maxPrice: 400, minPrice: 10 },
  //     { name: 'Bath and Body', maxPrice: 100, minPrice: 5 },
  //   ],
  // },
  // {
  //   name: 'Sports and Outdoors',
  //   type: [
  //     { name: 'Bicycles', maxPrice: 1800, minPrice: 200 },
  //     { name: 'Tents', maxPrice: 1200, minPrice: 50 },
  //     { name: 'Fitness Trackers', maxPrice: 600, minPrice: 30 },
  //     { name: 'Dumbbells', maxPrice: 500, minPrice: 20 },
  //     { name: 'Yoga Mats', maxPrice: 150, minPrice: 15 },
  //     { name: 'Sleeping Bags', maxPrice: 400, minPrice: 30 },
  //     { name: 'Fishing Rods', maxPrice: 800, minPrice: 40 },
  //     { name: 'Backpacks', maxPrice: 450, minPrice: 30 },
  //   ],
  // },
  // {
  //   name: 'Toys and Games',
  //   type: [
  //     { name: 'Action Figures', maxPrice: 200, minPrice: 10 },
  //     { name: 'Board Games', maxPrice: 150, minPrice: 15 },
  //     { name: 'Puzzles', maxPrice: 80, minPrice: 10 },
  //     { name: 'Dolls', maxPrice: 300, minPrice: 15 },
  //     { name: 'LEGO Sets', maxPrice: 900, minPrice: 20 },
  //     { name: 'Remote Control Cars', maxPrice: 500, minPrice: 30 },
  //     { name: 'Educational Toys', maxPrice: 250, minPrice: 20 },
  //     { name: 'Card Games', maxPrice: 100, minPrice: 10 },
  //   ],
  // },
  // {
  //   name: 'Home Improvement',
  //   type: [
  //     { name: 'Power Drills', maxPrice: 400, minPrice: 40 },
  //     { name: 'Smart Lighting', maxPrice: 300, minPrice: 20 },
  //     { name: 'Generators', maxPrice: 3000, minPrice: 400 },
  //     { name: 'Hand Tools', maxPrice: 500, minPrice: 10 },
  //     { name: 'Lawn Mowers', maxPrice: 2500, minPrice: 200 },
  //     { name: 'Paint', maxPrice: 100, minPrice: 30 },
  //     { name: 'Thermostats', maxPrice: 350, minPrice: 50 },
  //     { name: 'Security Cameras', maxPrice: 1200, minPrice: 40 },
  //   ],
  // },
  // {
  //   name: 'Musical Instruments',
  //   type: [
  //     { name: 'Guitars', maxPrice: 5000, minPrice: 150 },
  //     { name: 'Digital Pianos', maxPrice: 4000, minPrice: 300 },
  //     { name: 'Drums', maxPrice: 3500, minPrice: 400 },
  //     { name: 'Microphones', maxPrice: 1200, minPrice: 50 },
  //     { name: 'Keyboards', maxPrice: 2500, minPrice: 100 },
  //     { name: 'Violins', maxPrice: 6000, minPrice: 200 },
  //     { name: 'Saxophones', maxPrice: 5000, minPrice: 400 },
  //     { name: 'Amps', maxPrice: 2000, minPrice: 100 },
  //   ],
  // },
  // {
  //   name: 'Pet Supplies',
  //   type: [
  //     { name: 'Pet Food', maxPrice: 120, minPrice: 20 },
  //     { name: 'Aquariums', maxPrice: 2000, minPrice: 50 },
  //     { name: 'Grooming Tools', maxPrice: 150, minPrice: 15 },
  //     { name: 'Dog Crates', maxPrice: 300, minPrice: 40 },
  //     { name: 'Cat Trees', maxPrice: 400, minPrice: 50 },
  //     { name: 'Leashes and Collars', maxPrice: 100, minPrice: 10 },
  //     { name: 'Pet Beds', maxPrice: 250, minPrice: 20 },
  //     { name: 'Bird Cages', maxPrice: 600, minPrice: 40 },
  //   ],
  // },
  // {
  //   name: 'Books and Media',
  //   type: [
  //     { name: 'Hardcover Books', maxPrice: 100, minPrice: 15 },
  //     { name: 'Vinyl Records', maxPrice: 250, minPrice: 20 },
  //     { name: 'E-readers', maxPrice: 400, minPrice: 90 },
  //     { name: 'Paperback Books', maxPrice: 40, minPrice: 8 },
  //     { name: 'Textbooks', maxPrice: 350, minPrice: 50 },
  //     { name: 'Magazines', maxPrice: 20, minPrice: 5 },
  //     { name: 'Movies', maxPrice: 50, minPrice: 10 },
  //     { name: 'Comics', maxPrice: 150, minPrice: 5 },
  //   ],
  // },
];
