export interface CollectionSeed {
  id: string;
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  cta: string;
  image: string;
  category:
    | "beaches"
    | "mountains"
    | "sunsets"
    | "city"
    | "restaurants"
    | "markets"
    | "cafes"
    | "places";
  link?: string;
}

export const collectionsSeed: CollectionSeed[] = [
  {
    id: "collection-hidden-beaches",
    slug: "hidden-beaches",
    name: "Hidden Beaches",
    eyebrow: "Colección",
    description: "Calas escondidas de agua cristalina.",
    cta: "Descubrir calas",
    image: "https://res.cloudinary.com/dxhef6dju/image/upload/w_640,h_800,c_fill,q_auto,f_auto/v1774300401/36_slsjr4.png",
    category: "beaches",
  },
  {
    id: "collection-mountain-spots",
    slug: "mountain-spots",
    name: "Mountain Spots",
    eyebrow: "Guía curada",
    description: "Miradores y carreteras escénicas en la Serra de Tramuntana.",
    cta: "Explorar miradores",
    image: "https://res.cloudinary.com/dxhef6dju/image/upload/v1774429946/IMG_5993_pn7jsu.heic",
    category: "mountains",
  },
  {
    id: "collection-sunset-spots",
    slug: "sunset-spots",
    name: "Sunset Spots",
    eyebrow: "Selección",
    description: "Los mejores atardeceres de la isla, más allá de lo típico.",
    cta: "Ver atardeceres",
    image: "https://res.cloudinary.com/dxhef6dju/image/upload/v1774430385/IMG_7149_byspyc.heic",
    category: "sunsets",
  },
  {
    id: "collection-palma-city",
    slug: "palma-city",
    name: "Palma City",
    eyebrow: "Guía urbana",
    description: "Cultura, compras, brunch y rincones visuales en Palma.",
    cta: "Explorar Palma",
    image: "https://res.cloudinary.com/dxhef6dju/image/upload/v1774430375/IMG_4569_gul4bv.heic",
    category: "city",
  },
  {
    id: "collection-restaurants",
    slug: "restaurants",
    name: "Restaurants",
    eyebrow: "Recomendaciones",
    description: "Selección curada de restaurantes con más criterio que hype.",
    cta: "Ver restaurantes",
    image: "https://res.cloudinary.com/dxhef6dju/image/upload/w_640,h_800,c_fill,q_auto,f_auto/v1774300331/__-_2026-02-28T111918.026_syiynn.jpg",
    category: "restaurants",
  },
  {
    id: "collection-markets",
    slug: "markets",
    name: "Markets",
    eyebrow: "Plan local",
    description: "Mercados semanales y pueblos para vivir Mallorca con ritmo local.",
    cta: "Ver mercados",
    image: "https://res.cloudinary.com/dxhef6dju/image/upload/v1774430362/IMG_3082_n0r4pw.heic",
    category: "markets",
  },
  {
    id: "collection-cafes-brunch",
    slug: "cafes-brunch",
    name: "Cafés & Brunch",
    eyebrow: "Coffee Guide",
    description: "Cafeterías, brunch spots y paradas aesthetic por toda la isla.",
    cta: "Ver cafés",
    image: "https://res.cloudinary.com/dxhef6dju/image/upload/v1774429933/IMG_3815_mbkcml.heic",
    category: "cafes",
  },
  {
    id: "collection-points-of-interest",
    slug: "points-of-interest",
    name: "Points of Interest",
    eyebrow: "Descubre la isla",
    description: "Monumentos, miradores y lugares con peso visual y cultural.",
    cta: "Ver lugares",
    image: "https://res.cloudinary.com/dxhef6dju/image/upload/v1774429930/IMG_1612_ixnh6n.jpg",
    category: "places",
  },
];
