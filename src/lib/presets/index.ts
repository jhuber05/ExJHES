import { EpoxyConfig } from "@/lib/store/epoxy-store";

export interface Preset {
  id: string;
  name: string;
  category: string;
  description: string;
  thumbnail: string; // CSS gradient as fallback
  config: Partial<EpoxyConfig>;
}

export const presets: Preset[] = [
  {
    id: "classic-gray",
    name: "Classic Gray",
    category: "Solid",
    description: "Professional gray with high gloss finish",
    thumbnail: "linear-gradient(135deg, #6b7280, #9ca3af)",
    config: {
      baseColor: "#6b7280",
      secondaryColor: "#9ca3af",
      flakeType: "none",
      glossLevel: 90,
      texture: "smooth",
    },
  },
  {
    id: "midnight-flake",
    name: "Midnight Flake",
    category: "Metallic",
    description: "Deep black with silver metallic flakes",
    thumbnail: "linear-gradient(135deg, #1a1a2e, #16213e)",
    config: {
      baseColor: "#1a1a2e",
      secondaryColor: "#c0c0c0",
      flakeType: "metallic",
      flakeDensity: 65,
      flakeSize: "fine",
      glossLevel: 95,
      metallicEffect: true,
      texture: "smooth",
    },
  },
  {
    id: "desert-tan",
    name: "Desert Tan",
    category: "Solid",
    description: "Warm tan with satin finish",
    thumbnail: "linear-gradient(135deg, #c2a878, #d4b896)",
    config: {
      baseColor: "#c2a878",
      secondaryColor: "#d4b896",
      flakeType: "none",
      glossLevel: 60,
      texture: "orange-peel",
    },
  },
  {
    id: "garage-blue",
    name: "Garage Blue",
    category: "Flake",
    description: "Bold blue with vinyl chip broadcast",
    thumbnail: "linear-gradient(135deg, #1e3a5f, #2563eb)",
    config: {
      baseColor: "#1e3a5f",
      secondaryColor: "#93c5fd",
      flakeType: "vinyl",
      flakeDensity: 80,
      flakeSize: "coarse",
      glossLevel: 85,
      texture: "broadcast",
    },
  },
  {
    id: "copper-metallic",
    name: "Copper Metallic",
    category: "Metallic",
    description: "Rich copper with metallic depth effect",
    thumbnail: "linear-gradient(135deg, #92400e, #b45309)",
    config: {
      baseColor: "#92400e",
      secondaryColor: "#f59e0b",
      flakeType: "mica",
      flakeDensity: 70,
      flakeSize: "fine",
      glossLevel: 95,
      metallicEffect: true,
      texture: "swirl",
    },
  },
  {
    id: "arctic-white",
    name: "Arctic White",
    category: "Solid",
    description: "Clean white with ultra-high gloss",
    thumbnail: "linear-gradient(135deg, #e5e7eb, #f9fafb)",
    config: {
      baseColor: "#e5e7eb",
      secondaryColor: "#f9fafb",
      flakeType: "none",
      glossLevel: 100,
      texture: "smooth",
    },
  },
  {
    id: "emerald-quartz",
    name: "Emerald Quartz",
    category: "Flake",
    description: "Deep green with quartz aggregate",
    thumbnail: "linear-gradient(135deg, #064e3b, #059669)",
    config: {
      baseColor: "#064e3b",
      secondaryColor: "#34d399",
      flakeType: "quartz",
      flakeDensity: 75,
      flakeSize: "medium",
      glossLevel: 80,
      texture: "broadcast",
    },
  },
  {
    id: "showroom-red",
    name: "Showroom Red",
    category: "Metallic",
    description: "Vibrant red with metallic shimmer",
    thumbnail: "linear-gradient(135deg, #7f1d1d, #dc2626)",
    config: {
      baseColor: "#7f1d1d",
      secondaryColor: "#fca5a5",
      flakeType: "metallic",
      flakeDensity: 55,
      flakeSize: "fine",
      glossLevel: 95,
      metallicEffect: true,
      texture: "smooth",
    },
  },
];

export const presetCategories = [...new Set(presets.map((p) => p.category))];
