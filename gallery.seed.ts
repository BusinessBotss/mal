export interface GalleryItem {
  id: string;
  slug: string;
  title: string;
  image: string;
  ratio: "4:5";
  category:
    | "hidden"
    | "sunrise"
    | "sunset"
    | "mountain"
    | "beach"
    | "city"
    | "lifestyle"
    | "viewpoint";
  link?: string;
}

export const gallerySeed: GalleryItem[] = [
  {
    id: "gallery-cala-el-mago-hidden",
    slug: "cala-el-mago-hidden",
    title: "Cala El Mago Hidden",
    image: "https://res.cloudinary.com/dxhef6dju/image/upload/v1774429950/IMG_7600_o4r35n.heic",
    ratio: "4:5",
    category: "hidden",
  },
  {
    id: "gallery-magaluf-sunrise",
    slug: "magaluf-sunrise",
    title: "Magaluf Sunrise",
    image: "https://res.cloudinary.com/dxhef6dju/image/upload/v1774429958/IMG_9853_odsi9y.heic",
    ratio: "4:5",
    category: "sunrise",
  },
  {
    id: "gallery-boat-sunset",
    slug: "boat-sunset",
    title: "Boat Sunset",
    image: "https://res.cloudinary.com/dxhef6dju/image/upload/v1774429954/IMG_8871_kd3tad.heic",
    ratio: "4:5",
    category: "sunset",
  },
  {
    id: "gallery-goat-picture",
    slug: "goat-picture",
    title: "Goat Picture",
    image: "https://res.cloudinary.com/dxhef6dju/image/upload/v1774429964/IMG_9922_v9htwd.heic",
    ratio: "4:5",
    category: "mountain",
  },
  {
    id: "gallery-mountain-road",
    slug: "mountain-road",
    title: "Mountain Road",
    image: "https://res.cloudinary.com/dxhef6dju/image/upload/v1774429946/IMG_5993_pn7jsu.heic",
    ratio: "4:5",
    category: "mountain",
  },
  {
    id: "gallery-mountain-road-2",
    slug: "mountain-road-2",
    title: "Mountain Road 2",
    image: "https://res.cloudinary.com/dxhef6dju/image/upload/v1774429942/IMG_5980_sbem74.heic",
    ratio: "4:5",
    category: "mountain",
  },
  {
    id: "gallery-half-magaluf-beach",
    slug: "half-magaluf-beach",
    title: "0.5 Magaluf Beach",
    image: "https://res.cloudinary.com/dxhef6dju/image/upload/v1774429938/IMG_5791_aevzz6.heic",
    ratio: "4:5",
    category: "beach",
  },
  {
    id: "gallery-portixol-beach",
    slug: "portixol-beach",
    title: "Portixol Beach",
    image: "https://res.cloudinary.com/dxhef6dju/image/upload/v1774429933/IMG_3815_mbkcml.heic",
    ratio: "4:5",
    category: "beach",
  },
  {
    id: "gallery-el-toro-sunset",
    slug: "el-toro-sunset",
    title: "El Toro Sunset",
    image: "https://res.cloudinary.com/dxhef6dju/image/upload/v1774429930/IMG_1612_ixnh6n.jpg",
    ratio: "4:5",
    category: "sunset",
  },
  {
    id: "gallery-port-andratx",
    slug: "port-andratx",
    title: "Port Andratx",
    image: "https://res.cloudinary.com/dxhef6dju/image/upload/v1774430362/IMG_3082_n0r4pw.heic",
    ratio: "4:5",
    category: "viewpoint",
  },
  {
    id: "gallery-sunset-cave",
    slug: "sunset-cave",
    title: "Sunset Cave",
    image: "https://res.cloudinary.com/dxhef6dju/image/upload/v1774430366/IMG_3991_nfun7t.heic",
    ratio: "4:5",
    category: "sunset",
  },
  {
    id: "gallery-iroko",
    slug: "iroko",
    title: "Iroko",
    image: "https://res.cloudinary.com/dxhef6dju/image/upload/v1774430371/IMG_4550_uvg1r7.heic",
    ratio: "4:5",
    category: "lifestyle",
  },
  {
    id: "gallery-palma-downtown",
    slug: "palma-downtown",
    title: "Palma Downtown",
    image: "https://res.cloudinary.com/dxhef6dju/image/upload/v1774430375/IMG_4569_gul4bv.heic",
    ratio: "4:5",
    category: "city",
  },
  {
    id: "gallery-don-perignon-container",
    slug: "don-perignon-container",
    title: "Don Perignon Bottles in a Container",
    image: "https://res.cloudinary.com/dxhef6dju/image/upload/v1774430380/IMG_4812_huwf7a.heic",
    ratio: "4:5",
    category: "lifestyle",
  },
  {
    id: "gallery-sa-foradada-viewpoint",
    slug: "sa-foradada-viewpoint",
    title: "Sa Foradada Viewpoint",
    image: "https://res.cloudinary.com/dxhef6dju/image/upload/v1774430385/IMG_7149_byspyc.heic",
    ratio: "4:5",
    category: "viewpoint",
  },
];
