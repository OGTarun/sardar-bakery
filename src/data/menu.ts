// ---------------------------------------------------------------------------
// SARDAR BAKERY — menu data, transcribed from the supplied bakery menu.
//
// Prices and names are taken exactly from the client's printed menu. Do not
// round, "correct" wording, or invent sizes/taxes. One source of truth for the
// Menu, Cakes, Pastries and Bakery Specials sections.
// ---------------------------------------------------------------------------

export type MenuItem = { name: string; price: number };
export type CakeItem = { name: string; half: number; full: number };

// ---- Savoury / fast-food menu ---------------------------------------------
export const snackCategories: { title: string; items: MenuItem[] }[] = [
  {
    title: "Patty & Kulcha's",
    items: [
      { name: 'Aloo Patty', price: 30 },
      { name: 'Paneer Patty', price: 40 },
      { name: 'Spring Roll (1 Pc)', price: 40 },
      { name: 'Veg Hot Dog', price: 40 },
      { name: 'Cheese Cantas', price: 100 },
      { name: 'Cheese Pie', price: 70 },
      { name: 'Stuff Kulcha', price: 40 },
      { name: 'Indian Paneer Kulcha', price: 60 },
      { name: 'Soya Hot Dog', price: 40 },
      { name: 'Cheese Corn Patty', price: 60 },
      { name: 'Pasta Patty', price: 50 },
      { name: 'Noodle Patty', price: 50 },
    ],
  },
  {
    title: 'Rolls',
    items: [
      { name: 'Pasta Roll', price: 60 },
      { name: 'Garlic Corn Roll', price: 70 },
      { name: 'Garlic Paneer Roll', price: 80 },
      { name: 'Paneer Tikka Roll', price: 70 },
      { name: 'Chinese Cheese Roll', price: 60 },
      { name: 'Mushroom Roll', price: 60 },
      { name: 'Veg Roll', price: 60 },
      { name: 'Spicy Veg Roll', price: 60 },
      { name: 'Veg Corn Roll', price: 60 },
    ],
  },
  {
    title: 'Burgers',
    items: [
      { name: 'Veg Cream Burger', price: 40 },
      { name: 'Tandoori Filled Burger', price: 50 },
    ],
  },
  {
    title: 'Sandwiches',
    items: [
      { name: 'Subway Sandwich', price: 120 },
      { name: 'Pasta Pizza Sandwich', price: 70 },
      { name: 'Veg Grill Sandwich', price: 120 },
      { name: 'Club Sandwich', price: 35 },
      { name: 'Russian Corn Sandwich', price: 35 },
      { name: 'Peri Peri Sandwich', price: 60 },
      { name: 'Paneer Grill Sandwich', price: 180 },
    ],
  },
  {
    title: 'Pizza',
    items: [
      { name: 'Pan Pizza', price: 70 },
      { name: 'Paneer Pizza', price: 250 },
      { name: 'Veg Pizza', price: 180 },
      { name: 'Corn Pizza', price: 200 },
    ],
  },
  {
    title: 'Pasta',
    items: [
      { name: 'White Pasta', price: 150 },
      { name: 'Red Pasta', price: 150 },
    ],
  },
  {
    title: 'Vada Pav',
    items: [{ name: 'Vada Pav', price: 30 }],
  },
];

// ---- Cakes ----------------------------------------------------------------
export const cakeGroups: { title: string; items: CakeItem[] }[] = [
  {
    title: 'Classic Cakes',
    items: [
      { name: 'Pineapple Cake', half: 350, full: 700 },
      { name: 'Vanilla Cake', half: 350, full: 700 },
      { name: 'Butterscotch Cake', half: 400, full: 800 },
      { name: 'Black Forest Cake', half: 450, full: 800 },
      { name: 'Strawberry Cake', half: 450, full: 800 },
      { name: 'Mixed Fruit Cake', half: 450, full: 800 },
    ],
  },
  {
    title: 'Chocolate Collection',
    items: [
      { name: 'Chocolate Cream Cake', half: 450, full: 850 },
      { name: 'Choco Chip Cake', half: 450, full: 850 },
      { name: 'Chocolate Caramel Cake', half: 550, full: 1000 },
      { name: 'Chocolate Truffle Cake', half: 600, full: 1200 },
      { name: 'Choco Crunch Cake', half: 550, full: 1000 },
      { name: 'Mud Truffle Cake', half: 800, full: 1500 },
      { name: 'Belgium Chocolate Cake', half: 800, full: 1600 },
      { name: 'KitKat Chocolate Cake', half: 800, full: 1600 },
    ],
  },
  {
    title: 'Premium Signature Cakes',
    items: [
      { name: 'Red Velvet Cake', half: 600, full: 1200 },
      { name: 'Blueberry Cake', half: 550, full: 1000 },
      { name: 'Blackcurrant Cake', half: 550, full: 1000 },
      { name: 'Cappuccino Cake', half: 499, full: 1000 },
      { name: 'Lotus Biscoff Cake', half: 650, full: 1300 },
      { name: 'Rasmalai Badam Cake', half: 600, full: 1200 },
    ],
  },
];

// ---- Custom cakes ----------------------------------------------------------
export const customCakeThemes = [
  'Birthday Cakes',
  'Anniversary Cakes',
  'Baby Shower Cakes',
  'Graduation Cakes',
  'Princess Theme Cakes',
  'Car & Superhero Cakes',
  'Photo Cakes',
  'Bento Cakes',
  'Engagement Cakes',
  'Cricket Theme Cakes',
];

// ---- Pastries & desserts ---------------------------------------------------
export const pastries: MenuItem[] = [
  { name: 'Black Forest Pastry', price: 30 },
  { name: 'Chocolate Pastry', price: 40 },
  { name: 'Pineapple Pastry', price: 30 },
  { name: 'Strawberry Pastry', price: 30 },
  { name: 'Butterscotch Pastry', price: 80 },
  { name: 'Red Velvet Pastry', price: 90 },
  { name: 'Truffle Pastry', price: 100 },
  { name: 'Biscoff Pastry', price: 130 },
  { name: 'Choco Lava Cupcake', price: 50 },
  { name: 'Chocolate Pudding', price: 80 },
  { name: 'Fruit Pudding', price: 75 },
  { name: 'Donuts', price: 60 },
];

// ---- Bakery specials -------------------------------------------------------
export const bakerySpecials: { name: string; weight?: string; price: number }[] = [
  { name: 'Dry Chocolate Cake', weight: '600 gram', price: 400 },
  { name: 'Dry Almond Cake', weight: '600 gram', price: 300 },
  { name: 'Gur Atta Cake', price: 400 },
  { name: 'Crispy Cream Roll', price: 35 },
  { name: 'Jam Roll', price: 40 },
];

// ---- Special services (from the supplied menu) -----------------------------
export const services = [
  {
    title: 'Same Day Cake Delivery',
    text: 'Order your cake and get it delivered the very same day across Khanna.',
  },
  {
    title: 'Party Bulk Orders',
    text: 'Cakes and bakery spreads for parties and large gatherings.',
  },
  {
    title: 'Custom Name & Photo Printing',
    text: 'Name, message and photo printed fresh onto your celebration cake.',
  },
  {
    title: 'Fresh Cream Cakes on Demand',
    text: 'Fresh cream cakes prepared on demand for your special day.',
  },
];