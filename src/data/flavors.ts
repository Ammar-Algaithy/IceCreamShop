const BASE = import.meta.env.BASE_URL; // "/IceCreamShop/"

export const flavors = [
  {
    name: 'Brooklyn Blackout',
    description: 'Dense dark chocolate with brownie chunks and fudge ripple.',
    badge: 'Best-Seller',
    image: `${BASE}BrooklynBlackout.jpg`,
  },
  {
    name: 'Queens Pistachio',
    description: 'Real pistachio paste, lightly salted, ultra-creamy.',
    badge: 'Best-Seller',
    image: `${BASE}QueensPistachio.jpg`,
  },
  {
    name: 'Harlem Honeycomb',
    description: 'Vanilla bean base with house honeycomb toffee.',
    image: `${BASE}HarlemHoneycomb.png`,
  },
  {
    name: 'SoHo Strawberry',
    description: 'Roasted strawberries, balsamic glaze swirl.',
    badge: 'Seasonal',
    image: `${BASE}SoHoStrawberry.jpg`,
  },
  {
    name: 'Lower East Side Lemon',
    description: 'Bright lemon custard with zest confit.',
    image: `${BASE}LowerEastSideLemon.jpg`,
  },
  {
    name: 'Noho NY Cheesecake',
    description: 'Cheesecake base, graham crumble, berry ribbon.',
    image: `${BASE}NohoNYCheesecake.jpg`,
  },
];
