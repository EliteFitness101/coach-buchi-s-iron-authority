import dumbbell from "@/assets/product-dumbbell.jpg";
import barbell from "@/assets/product-barbell.jpg";
import bench from "@/assets/product-bench.jpg";
import bands from "@/assets/product-bands.jpg";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  stockCity: { city: string; left: number }[];
  rating: number;
  reviews: number;
  description: string;
  specs: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    id: "p1", slug: "iron-authority-hex-dumbbell-30kg",
    name: "Iron Authority Hex Dumbbell — 30kg",
    category: "Dumbbells", price: 145000, oldPrice: 180000,
    image: dumbbell,
    stockCity: [{ city: "Lagos", left: 12 }, { city: "Abuja", left: 6 }, { city: "Port Harcourt", left: 4 }],
    rating: 4.9, reviews: 312,
    description: "Forged cast iron, rubberized hex heads, ergonomic chrome handle. Built for serious lifters who refuse compromise.",
    specs: [["Weight","30kg"],["Material","Cast iron + chrome"],["Warranty","5 years"],["Origin","Nigeria"]].map(([label,value]) => ({label, value})),
  },
  {
    id: "p2", slug: "olympic-gold-barbell-20kg",
    name: "Olympic Gold-Bushing Barbell — 20kg",
    category: "Barbells", price: 285000,
    image: barbell,
    stockCity: [{ city: "Lagos", left: 8 }, { city: "Abuja", left: 3 }],
    rating: 4.8, reviews: 187,
    description: "IWF-spec 20kg bar with gold bushings, 1500 lb tensile strength, knurled for elite grip.",
    specs: [["Length","2.2m"],["Capacity","680kg"],["Sleeve","Gold-coated bushings"]].map(([label,value]) => ({label, value})),
  },
  {
    id: "p3", slug: "authority-adjustable-bench",
    name: "Authority Adjustable Bench",
    category: "Benches", price: 220000, oldPrice: 260000,
    image: bench,
    stockCity: [{ city: "Lagos", left: 15 }, { city: "Abuja", left: 7 }, { city: "Port Harcourt", left: 5 }],
    rating: 4.9, reviews: 256,
    description: "7 incline positions, commercial-grade steel frame, premium leather pad. Foundational to any elite home gym.",
    specs: [["Capacity","450kg"],["Positions","7"],["Pad","Italian leather"]].map(([label,value]) => ({label, value})),
  },
  {
    id: "p4", slug: "elite-resistance-kit",
    name: "Elite Resistance Kit (5-band)",
    category: "Resistance", price: 38000,
    image: bands,
    stockCity: [{ city: "Lagos", left: 42 }, { city: "Abuja", left: 28 }, { city: "Port Harcourt", left: 19 }],
    rating: 4.7, reviews: 421,
    description: "5-tier resistance bands with brass-finish handles, door anchor, ankle straps. Travel-ready discipline.",
    specs: [["Bands","5 (10-50 lb)"],["Handles","Brass-finish"],["Includes","Door anchor + bag"]].map(([label,value]) => ({label, value})),
  },
];

export const ngn = (n: number) => `₦${n.toLocaleString("en-NG")}`;
