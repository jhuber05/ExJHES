export interface FlakeColor {
  name: string;
  hex: string;
}

export interface FlakeBlend {
  name: string;
  colors: FlakeColor[];
}

export interface FlakeLine {
  name: string;
  type: "vinyl" | "metallic" | "mica";
  individualColors: FlakeColor[];
  blends: FlakeBlend[];
}

export interface FlakeBrand {
  name: string;
  lines: FlakeLine[];
}

export const flakeBrands: FlakeBrand[] = [
  {
    name: "Torginol",
    lines: [
      {
        name: "Vinyl Chip Flakes",
        type: "vinyl",
        individualColors: [
          { name: "White", hex: "#FFFFFF" },
          { name: "Cream", hex: "#FFFDD0" },
          { name: "Bone", hex: "#E3DAC9" },
          { name: "Ivory", hex: "#FFFFF0" },
          { name: "Beige", hex: "#D2B48C" },
          { name: "Tan", hex: "#C4A882" },
          { name: "Buckskin", hex: "#C2956B" },
          { name: "Saddle Brown", hex: "#8B4513" },
          { name: "Brown", hex: "#6B3A2A" },
          { name: "Dark Brown", hex: "#3E1F0D" },
          { name: "Black", hex: "#1A1A1A" },
          { name: "Charcoal", hex: "#36454F" },
          { name: "Medium Gray", hex: "#808080" },
          { name: "Light Gray", hex: "#C0C0C0" },
          { name: "Dove Gray", hex: "#B0AFA8" },
          { name: "Tile Red", hex: "#B33B24" },
          { name: "Brick Red", hex: "#8B2500" },
          { name: "Redwood", hex: "#6B3226" },
          { name: "Terracotta", hex: "#CC6644" },
          { name: "Burnt Orange", hex: "#CC5500" },
          { name: "Orange", hex: "#E86B1A" },
          { name: "Yellow", hex: "#EECF2E" },
          { name: "Gold", hex: "#CFB53B" },
          { name: "Light Blue", hex: "#ADD8E6" },
          { name: "Medium Blue", hex: "#4682B4" },
          { name: "Royal Blue", hex: "#2B3E94" },
          { name: "Navy Blue", hex: "#1B2B5A" },
          { name: "Teal", hex: "#008080" },
          { name: "Green", hex: "#3B7A3B" },
          { name: "Forest Green", hex: "#1E4D2B" },
          { name: "Sage", hex: "#9CAF88" },
          { name: "Plum", hex: "#6B3A6B" },
        ],
        blends: [
          {
            name: "Outback",
            colors: [
              { name: "Tan", hex: "#C4A882" },
              { name: "Buckskin", hex: "#C2956B" },
              { name: "Brown", hex: "#6B3A2A" },
              { name: "Cream", hex: "#FFFDD0" },
              { name: "Black", hex: "#1A1A1A" },
            ],
          },
          {
            name: "Nightfall",
            colors: [
              { name: "Black", hex: "#1A1A1A" },
              { name: "Charcoal", hex: "#36454F" },
              { name: "Medium Gray", hex: "#808080" },
              { name: "Light Gray", hex: "#C0C0C0" },
              { name: "White", hex: "#FFFFFF" },
            ],
          },
          {
            name: "Sahara",
            colors: [
              { name: "Cream", hex: "#FFFDD0" },
              { name: "Bone", hex: "#E3DAC9" },
              { name: "Tan", hex: "#C4A882" },
              { name: "Buckskin", hex: "#C2956B" },
              { name: "Saddle Brown", hex: "#8B4513" },
            ],
          },
          {
            name: "Autumn",
            colors: [
              { name: "Terracotta", hex: "#CC6644" },
              { name: "Saddle Brown", hex: "#8B4513" },
              { name: "Gold", hex: "#CFB53B" },
              { name: "Brown", hex: "#6B3A2A" },
              { name: "Cream", hex: "#FFFDD0" },
            ],
          },
          {
            name: "Granite",
            colors: [
              { name: "White", hex: "#FFFFFF" },
              { name: "Light Gray", hex: "#C0C0C0" },
              { name: "Medium Gray", hex: "#808080" },
              { name: "Charcoal", hex: "#36454F" },
              { name: "Black", hex: "#1A1A1A" },
            ],
          },
          {
            name: "Canyon",
            colors: [
              { name: "Tan", hex: "#C4A882" },
              { name: "Terracotta", hex: "#CC6644" },
              { name: "Brown", hex: "#6B3A2A" },
              { name: "Cream", hex: "#FFFDD0" },
              { name: "Saddle Brown", hex: "#8B4513" },
            ],
          },
          {
            name: "Yukon",
            colors: [
              { name: "Medium Gray", hex: "#808080" },
              { name: "Dove Gray", hex: "#B0AFA8" },
              { name: "Charcoal", hex: "#36454F" },
              { name: "White", hex: "#FFFFFF" },
              { name: "Black", hex: "#1A1A1A" },
            ],
          },
          {
            name: "Driftwood",
            colors: [
              { name: "Bone", hex: "#E3DAC9" },
              { name: "Tan", hex: "#C4A882" },
              { name: "Light Gray", hex: "#C0C0C0" },
              { name: "Cream", hex: "#FFFDD0" },
              { name: "Buckskin", hex: "#C2956B" },
            ],
          },
          {
            name: "Domino",
            colors: [
              { name: "Black", hex: "#1A1A1A" },
              { name: "White", hex: "#FFFFFF" },
            ],
          },
          {
            name: "Oreo",
            colors: [
              { name: "Black", hex: "#1A1A1A" },
              { name: "White", hex: "#FFFFFF" },
              { name: "Medium Gray", hex: "#808080" },
            ],
          },
          {
            name: "Mojave",
            colors: [
              { name: "Saddle Brown", hex: "#8B4513" },
              { name: "Tan", hex: "#C4A882" },
              { name: "Gold", hex: "#CFB53B" },
              { name: "Cream", hex: "#FFFDD0" },
              { name: "Orange", hex: "#E86B1A" },
            ],
          },
          {
            name: "Tuscan",
            colors: [
              { name: "Terracotta", hex: "#CC6644" },
              { name: "Tile Red", hex: "#B33B24" },
              { name: "Cream", hex: "#FFFDD0" },
              { name: "Tan", hex: "#C4A882" },
              { name: "Brown", hex: "#6B3A2A" },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Xtreme Polishing",
    lines: [
      {
        name: "Vinyl Chip Flakes",
        type: "vinyl",
        individualColors: [
          { name: "White", hex: "#FFFFFF" },
          { name: "Cream", hex: "#FFF8DC" },
          { name: "Beige", hex: "#D2B48C" },
          { name: "Tan", hex: "#C4A882" },
          { name: "Brown", hex: "#6B3A2A" },
          { name: "Chocolate", hex: "#3E1F0D" },
          { name: "Black", hex: "#111111" },
          { name: "Charcoal Gray", hex: "#36454F" },
          { name: "Medium Gray", hex: "#808080" },
          { name: "Light Gray", hex: "#C0C0C0" },
          { name: "Silver", hex: "#B8B8B8" },
          { name: "Red", hex: "#CC2233" },
          { name: "Brick", hex: "#8B3A3A" },
          { name: "Terra Cotta", hex: "#CC6644" },
          { name: "Orange", hex: "#E8751A" },
          { name: "Yellow", hex: "#E8CC2E" },
          { name: "Sky Blue", hex: "#87CEEB" },
          { name: "Royal Blue", hex: "#2B4494" },
          { name: "Teal", hex: "#007070" },
          { name: "Green", hex: "#3B7A3B" },
        ],
        blends: [
          {
            name: "Cookies and Cream",
            colors: [
              { name: "White", hex: "#FFFFFF" },
              { name: "Cream", hex: "#FFF8DC" },
              { name: "Tan", hex: "#D2B48C" },
              { name: "Light Gray", hex: "#C0C0C0" },
              { name: "Black", hex: "#111111" },
            ],
          },
          {
            name: "Marble",
            colors: [
              { name: "White", hex: "#FFFFFF" },
              { name: "Light Gray", hex: "#C0C0C0" },
              { name: "Medium Gray", hex: "#808080" },
              { name: "Black", hex: "#111111" },
            ],
          },
          {
            name: "Mocha",
            colors: [
              { name: "Cream", hex: "#FFF8DC" },
              { name: "Tan", hex: "#C4A882" },
              { name: "Brown", hex: "#6B3A2A" },
              { name: "Chocolate", hex: "#3E1F0D" },
            ],
          },
          {
            name: "Sandstone",
            colors: [
              { name: "Cream", hex: "#FFF8DC" },
              { name: "Beige", hex: "#D2B48C" },
              { name: "Tan", hex: "#C4A882" },
              { name: "Brown", hex: "#6B3A2A" },
            ],
          },
          {
            name: "Midnight",
            colors: [
              { name: "Black", hex: "#111111" },
              { name: "Charcoal Gray", hex: "#36454F" },
              { name: "Medium Gray", hex: "#808080" },
              { name: "Royal Blue", hex: "#2B4494" },
            ],
          },
        ],
      },
      {
        name: "Metallic Pigments",
        type: "metallic",
        individualColors: [
          { name: "Pearl White", hex: "#F0E8E0" },
          { name: "Silver", hex: "#B0B0B0" },
          { name: "Gunmetal", hex: "#4A4A4E" },
          { name: "Copper", hex: "#B87333" },
          { name: "Bronze", hex: "#8B6914" },
          { name: "Gold", hex: "#CFB53B" },
          { name: "Champagne", hex: "#DFC8A0" },
          { name: "Charcoal", hex: "#3A3A3A" },
          { name: "Ocean Blue", hex: "#2A5CAA" },
          { name: "Sapphire", hex: "#0F52BA" },
          { name: "Emerald", hex: "#1B6B3A" },
          { name: "Burgundy", hex: "#6B1A2A" },
        ],
        blends: [],
      },
    ],
  },
  {
    name: "Rust-Oleum",
    lines: [
      {
        name: "EpoxyShield Decorative Chips",
        type: "vinyl",
        individualColors: [],
        blends: [
          {
            name: "Tan Blend",
            colors: [
              { name: "Tan", hex: "#C4A882" },
              { name: "Cream", hex: "#FFFDD0" },
              { name: "Brown", hex: "#7B5B3A" },
              { name: "White", hex: "#F5F5F0" },
              { name: "Beige", hex: "#D2C3A8" },
            ],
          },
          {
            name: "Gray Blend",
            colors: [
              { name: "Medium Gray", hex: "#808080" },
              { name: "Light Gray", hex: "#C0C0C0" },
              { name: "White", hex: "#F5F5F0" },
              { name: "Charcoal", hex: "#4A4A4A" },
              { name: "Black", hex: "#222222" },
            ],
          },
          {
            name: "Red Blend",
            colors: [
              { name: "Red", hex: "#CC2233" },
              { name: "Brick", hex: "#8B3A3A" },
              { name: "Black", hex: "#222222" },
              { name: "Gray", hex: "#808080" },
              { name: "White", hex: "#F5F5F0" },
            ],
          },
          {
            name: "Blue Blend",
            colors: [
              { name: "Blue", hex: "#4466AA" },
              { name: "Light Blue", hex: "#7799CC" },
              { name: "White", hex: "#F5F5F0" },
              { name: "Gray", hex: "#808080" },
              { name: "Navy", hex: "#2B3B6B" },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "ArmorPoxy",
    lines: [
      {
        name: "Vinyl Chip System",
        type: "vinyl",
        individualColors: [
          { name: "White", hex: "#FFFFFF" },
          { name: "Cream", hex: "#FFF8DC" },
          { name: "Bone", hex: "#E3DAC9" },
          { name: "Beige", hex: "#D2B48C" },
          { name: "Tan", hex: "#C0A86B" },
          { name: "Light Brown", hex: "#A67B4B" },
          { name: "Medium Brown", hex: "#7B4B2A" },
          { name: "Dark Brown", hex: "#3E1F0D" },
          { name: "Black", hex: "#151515" },
          { name: "Charcoal", hex: "#36454F" },
          { name: "Medium Gray", hex: "#808080" },
          { name: "Light Gray", hex: "#C0C0C0" },
          { name: "Red", hex: "#CC2230" },
          { name: "Terra Cotta", hex: "#CC6644" },
          { name: "Orange", hex: "#DD6B20" },
          { name: "Yellow", hex: "#DDC020" },
          { name: "Light Blue", hex: "#8CB4D8" },
          { name: "Medium Blue", hex: "#3366AA" },
          { name: "Navy", hex: "#1B2B55" },
          { name: "Teal", hex: "#008080" },
          { name: "Green", hex: "#3B7A3B" },
          { name: "Forest", hex: "#1E4D2B" },
        ],
        blends: [
          {
            name: "Saddle Tan",
            colors: [
              { name: "Tan", hex: "#C0A86B" },
              { name: "Cream", hex: "#FFF8DC" },
              { name: "Medium Brown", hex: "#7B4B2A" },
              { name: "Bone", hex: "#E3DAC9" },
            ],
          },
          {
            name: "Granite Gray",
            colors: [
              { name: "Light Gray", hex: "#C0C0C0" },
              { name: "Medium Gray", hex: "#808080" },
              { name: "Charcoal", hex: "#36454F" },
              { name: "White", hex: "#FFFFFF" },
              { name: "Black", hex: "#151515" },
            ],
          },
          {
            name: "Desert Sand",
            colors: [
              { name: "Bone", hex: "#E3DAC9" },
              { name: "Cream", hex: "#FFF8DC" },
              { name: "Tan", hex: "#C0A86B" },
              { name: "Light Brown", hex: "#A67B4B" },
            ],
          },
          {
            name: "Autumn Blend",
            colors: [
              { name: "Terra Cotta", hex: "#CC6644" },
              { name: "Medium Brown", hex: "#7B4B2A" },
              { name: "Tan", hex: "#C0A86B" },
              { name: "Cream", hex: "#FFF8DC" },
              { name: "Red", hex: "#CC2230" },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "ColorFlakes",
    lines: [
      {
        name: "Premium Vinyl Flakes",
        type: "vinyl",
        individualColors: [
          { name: "Snow White", hex: "#FFFFFF" },
          { name: "Antique White", hex: "#FAEBD7" },
          { name: "Cream", hex: "#FFFDD0" },
          { name: "Ivory", hex: "#FFFFF0" },
          { name: "Bone", hex: "#E3DAC9" },
          { name: "Eggshell", hex: "#F0EAD6" },
          { name: "Buff", hex: "#DAA06D" },
          { name: "Sand", hex: "#C2B280" },
          { name: "Khaki", hex: "#BDB76B" },
          { name: "Tan", hex: "#C4A882" },
          { name: "Camel", hex: "#C19A6B" },
          { name: "Buckskin", hex: "#C2956B" },
          { name: "Sienna", hex: "#A0522D" },
          { name: "Saddle", hex: "#8B4513" },
          { name: "Chocolate", hex: "#4A2A0A" },
          { name: "Espresso", hex: "#2E1503" },
          { name: "Platinum", hex: "#E5E4E2" },
          { name: "Silver", hex: "#C0C0C0" },
          { name: "Dove", hex: "#B0AFA8" },
          { name: "Smoke", hex: "#96969C" },
          { name: "Pewter", hex: "#8A8D8F" },
          { name: "Slate", hex: "#708090" },
          { name: "Graphite", hex: "#4B4B4B" },
          { name: "Charcoal", hex: "#36454F" },
          { name: "Onyx", hex: "#151515" },
          { name: "Coral", hex: "#E8735A" },
          { name: "Salmon", hex: "#E87A6A" },
          { name: "Brick Red", hex: "#8B2500" },
          { name: "Crimson", hex: "#AA1133" },
          { name: "Marigold", hex: "#EAA221" },
          { name: "Sunflower", hex: "#EECF2E" },
          { name: "Sky Blue", hex: "#87CEEB" },
          { name: "Cornflower", hex: "#6495ED" },
          { name: "Cobalt", hex: "#2B4494" },
          { name: "Navy", hex: "#1B2B5A" },
          { name: "Seafoam", hex: "#71C9A6" },
          { name: "Jade", hex: "#00A86B" },
          { name: "Hunter Green", hex: "#1E4D2B" },
          { name: "Lilac", hex: "#C8A2C8" },
          { name: "Plum", hex: "#6B3A6B" },
        ],
        blends: [
          {
            name: "Outback",
            colors: [
              { name: "Tan", hex: "#C4A882" },
              { name: "Buckskin", hex: "#C2956B" },
              { name: "Chocolate", hex: "#4A2A0A" },
              { name: "Cream", hex: "#FFFDD0" },
              { name: "Onyx", hex: "#151515" },
            ],
          },
          {
            name: "Timberline",
            colors: [
              { name: "Saddle", hex: "#8B4513" },
              { name: "Camel", hex: "#C19A6B" },
              { name: "Bone", hex: "#E3DAC9" },
              { name: "Chocolate", hex: "#4A2A0A" },
              { name: "Tan", hex: "#C4A882" },
            ],
          },
          {
            name: "Shoreline",
            colors: [
              { name: "Sand", hex: "#C2B280" },
              { name: "Cream", hex: "#FFFDD0" },
              { name: "Dove", hex: "#B0AFA8" },
              { name: "Sky Blue", hex: "#87CEEB" },
              { name: "Snow White", hex: "#FFFFFF" },
            ],
          },
          {
            name: "Tundra",
            colors: [
              { name: "Silver", hex: "#C0C0C0" },
              { name: "Pewter", hex: "#8A8D8F" },
              { name: "Slate", hex: "#708090" },
              { name: "Charcoal", hex: "#36454F" },
              { name: "Onyx", hex: "#151515" },
            ],
          },
          {
            name: "Mesa",
            colors: [
              { name: "Sienna", hex: "#A0522D" },
              { name: "Buff", hex: "#DAA06D" },
              { name: "Tan", hex: "#C4A882" },
              { name: "Cream", hex: "#FFFDD0" },
              { name: "Saddle", hex: "#8B4513" },
            ],
          },
          {
            name: "Peppered Granite",
            colors: [
              { name: "Snow White", hex: "#FFFFFF" },
              { name: "Silver", hex: "#C0C0C0" },
              { name: "Smoke", hex: "#96969C" },
              { name: "Graphite", hex: "#4B4B4B" },
              { name: "Onyx", hex: "#151515" },
            ],
          },
          {
            name: "Autumn Harvest",
            colors: [
              { name: "Sienna", hex: "#A0522D" },
              { name: "Marigold", hex: "#EAA221" },
              { name: "Saddle", hex: "#8B4513" },
              { name: "Cream", hex: "#FFFDD0" },
              { name: "Brick Red", hex: "#8B2500" },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "LATICRETE (StonaTek)",
    lines: [
      {
        name: "Decorative Flake System",
        type: "vinyl",
        individualColors: [
          { name: "White", hex: "#FFFFFF" },
          { name: "Eggshell", hex: "#F0EAD6" },
          { name: "Cream", hex: "#FFFDD0" },
          { name: "Buff", hex: "#D2B48C" },
          { name: "Tan", hex: "#C4A882" },
          { name: "Brown", hex: "#6B3A2A" },
          { name: "Dark Brown", hex: "#3E1F0D" },
          { name: "Black", hex: "#1A1A1A" },
          { name: "Light Gray", hex: "#C0C0C0" },
          { name: "Medium Gray", hex: "#808080" },
          { name: "Charcoal", hex: "#444444" },
          { name: "Red", hex: "#CC2233" },
          { name: "Terra Cotta", hex: "#CC6644" },
          { name: "Blue", hex: "#3B6BAA" },
          { name: "Green", hex: "#3B7A4B" },
          { name: "Yellow", hex: "#DECE2E" },
        ],
        blends: [
          {
            name: "Granite",
            colors: [
              { name: "White", hex: "#FFFFFF" },
              { name: "Light Gray", hex: "#C0C0C0" },
              { name: "Medium Gray", hex: "#808080" },
              { name: "Charcoal", hex: "#444444" },
              { name: "Black", hex: "#1A1A1A" },
            ],
          },
          {
            name: "Sandstone",
            colors: [
              { name: "Cream", hex: "#FFFDD0" },
              { name: "Buff", hex: "#D2B48C" },
              { name: "Tan", hex: "#C4A882" },
              { name: "Brown", hex: "#6B3A2A" },
              { name: "Eggshell", hex: "#F0EAD6" },
            ],
          },
          {
            name: "Earth",
            colors: [
              { name: "Tan", hex: "#C4A882" },
              { name: "Brown", hex: "#6B3A2A" },
              { name: "Cream", hex: "#FFFDD0" },
              { name: "Dark Brown", hex: "#3E1F0D" },
              { name: "Buff", hex: "#D2B48C" },
            ],
          },
          {
            name: "Bluestone",
            colors: [
              { name: "Blue", hex: "#3B6BAA" },
              { name: "Light Gray", hex: "#C0C0C0" },
              { name: "Medium Gray", hex: "#808080" },
              { name: "White", hex: "#FFFFFF" },
              { name: "Charcoal", hex: "#444444" },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Armor Garage",
    lines: [
      {
        name: "Vinyl Chip Flakes",
        type: "vinyl",
        individualColors: [
          { name: "White", hex: "#FFFFFF" },
          { name: "Cream", hex: "#FFFDD0" },
          { name: "Tan", hex: "#C4A882" },
          { name: "Brown", hex: "#6B3A2A" },
          { name: "Black", hex: "#1A1A1A" },
          { name: "Light Gray", hex: "#C0C0C0" },
          { name: "Medium Gray", hex: "#808080" },
          { name: "Dark Gray", hex: "#505050" },
          { name: "Red", hex: "#CC2233" },
          { name: "Blue", hex: "#3B5BAA" },
          { name: "Green", hex: "#3B7A3B" },
          { name: "Yellow", hex: "#DECE2E" },
        ],
        blends: [
          {
            name: "Mocha",
            colors: [
              { name: "Cream", hex: "#FFFDD0" },
              { name: "Tan", hex: "#C4A882" },
              { name: "Brown", hex: "#6B3A2A" },
              { name: "Black", hex: "#1A1A1A" },
            ],
          },
          {
            name: "Granite",
            colors: [
              { name: "White", hex: "#FFFFFF" },
              { name: "Light Gray", hex: "#C0C0C0" },
              { name: "Medium Gray", hex: "#808080" },
              { name: "Dark Gray", hex: "#505050" },
              { name: "Black", hex: "#1A1A1A" },
            ],
          },
          {
            name: "Saddle Tan",
            colors: [
              { name: "Tan", hex: "#C4A882" },
              { name: "Cream", hex: "#FFFDD0" },
              { name: "Brown", hex: "#6B3A2A" },
            ],
          },
          {
            name: "Domino",
            colors: [
              { name: "Black", hex: "#1A1A1A" },
              { name: "White", hex: "#FFFFFF" },
            ],
          },
        ],
      },
    ],
  },
];
