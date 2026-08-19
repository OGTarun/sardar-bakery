// ---------------------------------------------------------------------------
// SARDAR BAKERY — central business configuration.
//
// Single source of truth for every business value rendered on the website.
// Edit this file to change the phone number, hours, brand copy, social links,
// location or maps wiring without touching any component.
// ---------------------------------------------------------------------------

export const site = {
  name: 'Sardar Bakery',
  brand: 'SARDAR BAKERY',
  established: 1950,
  tagline: 'Where Tradition Bakes Trust',
  descriptor: 'Cakes · Bakery · Fast Food',

  // Printed on the supplied Sardar Bakery menu.
  phonePrimary: {
    display: '+91 97805 88066',
    tel: '+919780588066',
  },
  phoneSecondary: null, // add an alternate number here once confirmed

  // WhatsApp is NOT yet confirmed for this number, so no WhatsApp CTA renders.
  // Set to { display, tel } to switch the WhatsApp CTA on in one place.
  whatsapp: null,

  addressShort: 'Khanna, Punjab',
  // No precise street address has been confirmed — requesting one from the
  // client before this is expanded. The website shows only "Khanna, Punjab".
  addressFull: 'Khanna, Punjab, India',

  // Opening hours printed on the supplied menu.
  hours: {
    daily: '8:30 AM – 9:00 PM',
    open: '08:30',
    close: '21:00',
  },

  facebook: {
    label: 'Sardar Bakery',
    url: 'https://www.facebook.com/sardarbakery/',
  },

  // Instagram appears from the menu/site only when a verified account is
  // confirmed by the client.
  instagram: null,

  // Google Maps wiring.
  // `directionsUrl` opens Google Maps search for the business — no fabricated
  // coordinates are used. `placeUrl` can hold a real place page once live.
  maps: {
    placeUrl: '',
    directionsUrl:
      'https://www.google.com/maps/search/?api=1&query=' +
      encodeURIComponent('Sardar Bakery, Khanna, Punjab'),
    embedUrl:
      'https://maps.google.com/maps?q=' +
      encodeURIComponent('Sardar Bakery, Khanna, Punjab') +
      '&t=&z=14&ie=UTF8&iwloc=&output=embed',
  },
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Our Menu', href: '#menu' },
  { label: 'Cakes', href: '#cakes' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Visit Us', href: '#contact' },
];

// Unsplash is used only as premium food-photography placeholders where the
// client has not yet supplied a real photo. Swap `src` with real shots as they
// arrive — the layouts hold their shape. Client-supplied assets are referenced
// directly (heritage, cakeClassic, etc.) and live in public/.
const u = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  // Client-supplied brand assets (in public/).
  logo: '/logo.png',
  cakeClassic: '/cake-classic.png',
  cakeNew: '/cake-new.png',
  cupcakes: '/cupcakes.png',

  // Hero showcase — premium chocolate celebration cake (Unsplash, royalty-free).
  heroCake: u('photo-1549931319-a545dcf3bc73', 1200),

  heroPizza: u('photo-1513104890138-7c749659a591', 700),
  heroBread: u('photo-1509440159596-0249088772ff', 700),

  gallery: [
    { src: u('photo-1578985545062-69928b1d9587'), alt: 'Chocolate celebration cake finished with cream' },
    { src: '/cupcakes.png', alt: 'Cupcakes from the Sardar Bakery sweet counter' },
    { src: u('photo-1551024506-0bccd828d307'), alt: 'Dessert pastry finished with fresh berries' },
    { src: u('photo-1513104890138-7c749659a591'), alt: 'Freshly baked pizza topped with cheese' },
    { src: '/cake-classic.png', alt: 'Classic celebration cake at Sardar Bakery' },
    { src: u('photo-1568901346375-23c9450c58cd'), alt: 'Stacked burger with crisp vegetables' },
    { src: '/cake-new.png', alt: 'Designer cake created at Sardar Bakery' },
    { src: u('photo-1585937421612-70a008356fbe'), alt: 'Crispy patties fresh from the counter' },
    { src: u('photo-1509440159596-0249088772ff'), alt: 'Freshly baked bread loaves' },
  ],
};

// Wordmark strings used by the rotating badge and section ornaments.
export const badgeRingText = 'Where Tradition Bakes Trust · Est. 1950 · Khanna · ';