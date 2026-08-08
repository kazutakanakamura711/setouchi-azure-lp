export const navigation = [
  { label: "STAY", href: "#stay" },
  { label: "DINING", href: "#dining" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "SPA", href: "#spa" },
  { label: "ACCESS", href: "#access" },
] as const;

export const rooms = [
  {
    number: "01",
    name: "AZURE SUITE",
    image: "/images/azure-suite.avif",
    alt: "海を望む窓辺に立つ着物姿の女性",
    details: ["100㎡", "Private Terrace", "Ocean View"],
    featured: true,
  },
  {
    number: "02",
    name: "TERRACE SUITE",
    image: "/images/terrace-suite.avif",
    alt: "ホテルの回廊から望む瀬戸内の海辺",
    details: ["75㎡", "Private Bath", "Ocean View"],
    featured: false,
  },
  {
    number: "03",
    name: "DELUXE OCEAN",
    image: "/images/deluxe-ocean.avif",
    alt: "客室の窓辺から夕暮れの海を眺める人",
    details: ["55㎡", "Ocean View"],
    featured: false,
  },
] as const;

export const experiences = [
  {
    number: "01",
    name: "PRIVATE CRUISE",
    image: "/images/private-cruise.avif",
    alt: "夕暮れの穏やかな海を進む白いボート",
    description: [
      "夕暮れの瀬戸内海を巡る",
      "宿泊者限定のプライベートクルーズ。",
    ],
  },
  {
    number: "02",
    name: "ISLAND JOURNEY",
    image: "/images/island-journey.avif",
    alt: "山々に囲まれた静かな瀬戸内海",
    description: ["瀬戸内の島々を巡り、", "文化・建築・自然を楽しむ旅。"],
  },
  {
    number: "03",
    name: "MORNING YOGA",
    image: "/images/morning-yoga.avif",
    alt: "朝日の海辺でヨガをする人",
    description: ["朝日と海を眺めながら行う", "テラスでのモーニングヨガ。"],
  },
] as const;
