export interface ProductColor {
  name: string;
  hex: string;
}

export interface ProductLine {
  name: string;
  category: "solid" | "metallic" | "pearlescent" | "tint";
  colors: ProductColor[];
}

export interface Brand {
  name: string;
  lines: ProductLine[];
}

export const brands: Brand[] = [
  {
    name: "Rust-Oleum",
    lines: [
      {
        name: "EpoxyShield Garage Floor",
        category: "solid",
        colors: [
          { name: "Gray", hex: "#808080" },
          { name: "Dark Gray", hex: "#505050" },
          { name: "Tan", hex: "#C2A878" },
        ],
      },
      {
        name: "EpoxyShield Professional",
        category: "solid",
        colors: [
          { name: "Silver Gray", hex: "#A0A0A0" },
          { name: "Dark Gray", hex: "#505050" },
          { name: "Dunes Tan", hex: "#C4A46C" },
          { name: "Tile Red", hex: "#B33B2E" },
        ],
      },
      {
        name: "EpoxyShield Tint Colors",
        category: "tint",
        colors: [
          { name: "Almond Delight", hex: "#D4C4A8" },
          { name: "Aqua Marine", hex: "#7FCDCD" },
          { name: "Aqua Mist", hex: "#A0D6D6" },
          { name: "Armor Gray", hex: "#6B6B6B" },
          { name: "Black Knight", hex: "#1A1A1A" },
          { name: "Blue Ridge", hex: "#6B8EA6" },
          { name: "Cactus", hex: "#5C6B3C" },
          { name: "Cayenne", hex: "#8B2500" },
          { name: "Charcoal Gray", hex: "#3C3C3C" },
          { name: "Cigar", hex: "#5C3D1E" },
          { name: "Cocoa", hex: "#4A3728" },
          { name: "Country Rose", hex: "#B56B6B" },
          { name: "Deep Sage", hex: "#5A6B50" },
          { name: "Dry Earth", hex: "#9B7B4A" },
          { name: "Ginger", hex: "#A0602A" },
          { name: "Gray Sky", hex: "#9AA0A8" },
          { name: "Ice Blue", hex: "#B0D4E8" },
          { name: "Mellow Mauve", hex: "#B09098" },
          { name: "New Concrete", hex: "#B8B4A8" },
          { name: "Plump Grape", hex: "#5A3A5A" },
          { name: "Sand", hex: "#C8B88A" },
          { name: "Sky Blue", hex: "#7AADE0" },
          { name: "Slate Gray", hex: "#6A6E70" },
          { name: "Taupe", hex: "#8B7D6B" },
          { name: "Tropical Beach", hex: "#E8D8A0" },
          { name: "Twilight Blue", hex: "#3A4A6B" },
          { name: "Wheat", hex: "#D4C090" },
        ],
      },
      {
        name: "RockSolid Polycuramine",
        category: "solid",
        colors: [
          { name: "Black", hex: "#1A1A1A" },
          { name: "Gray", hex: "#808080" },
          { name: "Dark Gray", hex: "#505050" },
          { name: "Mocha", hex: "#6B4A3A" },
          { name: "Tan", hex: "#C2A878" },
        ],
      },
      {
        name: "RockSolid Metallic",
        category: "metallic",
        colors: [
          { name: "Amaretto", hex: "#A86B3A" },
          { name: "Silver Bullet", hex: "#B8B8B8" },
          { name: "Gunmetal", hex: "#4A4A50" },
          { name: "Brilliant Blue", hex: "#2A5AAA" },
          { name: "Cherry Bomb", hex: "#A01020" },
          { name: "Copper Pot", hex: "#B07040" },
          { name: "Earth Brown", hex: "#6B4A28" },
          { name: "Burnished Gold", hex: "#C4A040" },
        ],
      },
      {
        name: "RockSolid Pearlescent",
        category: "pearlescent",
        colors: [
          { name: "Cabernet", hex: "#6A1B2A" },
          { name: "Emerald", hex: "#287050" },
          { name: "Graphite", hex: "#3A3A3A" },
          { name: "Midnight Blue", hex: "#1A2040" },
          { name: "Smokey Blue", hex: "#5A6A80" },
          { name: "Pearl Black", hex: "#202020" },
        ],
      },
    ],
  },
  {
    name: "Behr Premium",
    lines: [
      {
        name: "1-Part Epoxy Floor Paint",
        category: "solid",
        colors: [
          { name: "White", hex: "#F0F0F0" },
          { name: "Silver Gray", hex: "#A0A0A0" },
          { name: "Slate Gray", hex: "#6A6E70" },
        ],
      },
    ],
  },
  {
    name: "Sherwin-Williams",
    lines: [
      {
        name: "ArmorSeal Floor Coating",
        category: "solid",
        colors: [
          { name: "White", hex: "#F0F0F0" },
          { name: "Haze Gray", hex: "#B0B4B0" },
          { name: "Deck Gray", hex: "#5A5E60" },
          { name: "Sandstone", hex: "#C4AB78" },
          { name: "Safety Yellow", hex: "#F0D000" },
          { name: "Tile Red", hex: "#B33B2E" },
        ],
      },
    ],
  },
  {
    name: "Benjamin Moore",
    lines: [
      {
        name: "Corotech 100% Solids Epoxy",
        category: "solid",
        colors: [
          { name: "White", hex: "#F0F0F0" },
          { name: "Terracotta", hex: "#B04A30" },
          { name: "Sandstone", hex: "#C4AB78" },
          { name: "Silver Gray", hex: "#A0A0A0" },
          { name: "Battleship Gray", hex: "#747880" },
        ],
      },
      {
        name: "Corotech Polyamide Epoxy",
        category: "solid",
        colors: [
          { name: "White", hex: "#F0F0F0" },
          { name: "Black", hex: "#1A1A1A" },
          { name: "Pearl Gray", hex: "#B0B0A8" },
          { name: "Silver Gray", hex: "#A0A0A0" },
          { name: "Battleship Gray", hex: "#747880" },
          { name: "Safety Yellow", hex: "#F0D000" },
          { name: "Safety Red", hex: "#C02020" },
        ],
      },
      {
        name: "INSL-X GarageGuard",
        category: "solid",
        colors: [
          { name: "Showroom Gray", hex: "#8A8A8A" },
          { name: "Desert Sand", hex: "#C8B490" },
        ],
      },
    ],
  },
  {
    name: "PPG SuperCoat",
    lines: [
      {
        name: "Epoxy Garage Floor Kit",
        category: "solid",
        colors: [
          { name: "Cobalt Blue", hex: "#0047AB" },
          { name: "Stone Gray", hex: "#8A8A80" },
          { name: "Slate Gray", hex: "#6A6E70" },
          { name: "Sandstone", hex: "#C4AB78" },
          { name: "Firebrick", hex: "#A02020" },
          { name: "Ivory", hex: "#F0E8D0" },
        ],
      },
    ],
  },
  {
    name: "ArmorPoxy",
    lines: [
      {
        name: "ArmorPoxy II / ArmorUltra",
        category: "solid",
        colors: [
          { name: "Bright White", hex: "#FAFAFA" },
          { name: "White", hex: "#F0F0F0" },
          { name: "Black", hex: "#1A1A1A" },
          { name: "Light Gray", hex: "#B0B0B0" },
          { name: "Medium Gray", hex: "#808080" },
          { name: "Dark Gray", hex: "#505050" },
          { name: "Tan", hex: "#C2A878" },
          { name: "Beige", hex: "#C8B890" },
          { name: "Bright Red", hex: "#D02020" },
          { name: "Safety Yellow", hex: "#F0D000" },
        ],
      },
    ],
  },
  {
    name: "Valspar",
    lines: [
      {
        name: "2-Part Garage Floor Epoxy",
        category: "solid",
        colors: [
          { name: "Gray", hex: "#808080" },
          { name: "Tan", hex: "#C2A878" },
        ],
      },
    ],
  },
  {
    name: "Seal-Krete",
    lines: [
      {
        name: "Epoxy-Seal",
        category: "solid",
        colors: [
          { name: "Slate Gray", hex: "#6A6E70" },
          { name: "Armor Gray", hex: "#6B6B6B" },
          { name: "Sand", hex: "#C8B88A" },
        ],
      },
      {
        name: "Metallic Seal",
        category: "metallic",
        colors: [
          { name: "Charcoal Gray", hex: "#3C3C40" },
        ],
      },
    ],
  },
  {
    name: "Flexmar (Polyaspartic)",
    lines: [
      {
        name: "Solid Color",
        category: "solid",
        colors: [
          { name: "White", hex: "#F0F0F0" },
          { name: "Black", hex: "#1A1A1A" },
          { name: "Brown", hex: "#5A3A20" },
          { name: "Chocolate", hex: "#3E2418" },
          { name: "Caramel", hex: "#A06830" },
          { name: "Mocha", hex: "#6B4A3A" },
          { name: "Manilla", hex: "#E8D8B0" },
          { name: "Sand Beige", hex: "#C8B88A" },
          { name: "Oyster", hex: "#D8D0C0" },
          { name: "Taupe", hex: "#8B7D6B" },
          { name: "Pearl Grey", hex: "#B0B0A8" },
          { name: "Silver Grey", hex: "#A0A0A0" },
          { name: "Stone Grey", hex: "#808078" },
          { name: "Dolphin Grey", hex: "#6A6A6A" },
          { name: "White-Night Grey", hex: "#C8C8C8" },
          { name: "Desert Haze", hex: "#B8A888" },
          { name: "Royal Blue", hex: "#2040A0" },
          { name: "Sky Blue", hex: "#7AADE0" },
          { name: "Mint Green", hex: "#80C8A0" },
          { name: "Emerald Green", hex: "#287050" },
          { name: "Terra Cotta", hex: "#B04A30" },
          { name: "Tile Red", hex: "#B33B2E" },
          { name: "Safety Red", hex: "#C02020" },
          { name: "Safety Yellow", hex: "#F0D000" },
        ],
      },
      {
        name: "Metallic",
        category: "metallic",
        colors: [
          { name: "Rum", hex: "#7A4A28" },
          { name: "Dolphin", hex: "#6A6A6A" },
          { name: "Seaweed", hex: "#3A5A3A" },
          { name: "Starfish", hex: "#C8A060" },
          { name: "Sunset", hex: "#D08040" },
          { name: "Whale", hex: "#3A4A60" },
          { name: "Coral", hex: "#D07060" },
          { name: "Maui", hex: "#3080A0" },
          { name: "Mandarin", hex: "#D07020" },
        ],
      },
    ],
  },
  {
    name: "Rokrez",
    lines: [
      {
        name: "Standard",
        category: "solid",
        colors: [
          { name: "Steel Gray", hex: "#6A6E78" },
          { name: "Gray", hex: "#808080" },
          { name: "Dark Gray", hex: "#505050" },
          { name: "Tan", hex: "#C2A878" },
        ],
      },
      {
        name: "Metallic Additives",
        category: "metallic",
        colors: [
          { name: "Aluminum", hex: "#B0B0B0" },
          { name: "Apple Green", hex: "#60B040" },
          { name: "Bright Orange", hex: "#E06020" },
          { name: "Bronze", hex: "#8A6A30" },
          { name: "Cabernet", hex: "#6A1B2A" },
          { name: "Charcoal", hex: "#3A3A3A" },
          { name: "Chestnut Brown", hex: "#6A3A18" },
          { name: "Cobalt", hex: "#0047AB" },
          { name: "Copper", hex: "#B07040" },
          { name: "Crimson", hex: "#A01020" },
          { name: "Gold Rush", hex: "#D0A020" },
          { name: "Graphite", hex: "#3A3A3A" },
          { name: "Luster Blue", hex: "#4A7AB0" },
          { name: "Magenta", hex: "#A01060" },
          { name: "Marigold", hex: "#E0A020" },
          { name: "Merlot", hex: "#5A1828" },
          { name: "Oyster", hex: "#D8D0C0" },
          { name: "Pearl", hex: "#E0D8D0" },
          { name: "Smoke Gray", hex: "#7A7A7A" },
          { name: "Violet", hex: "#6020A0" },
        ],
      },
    ],
  },
  {
    name: "Armor Garage",
    lines: [
      {
        name: "Epoxy Floor Coating",
        category: "solid",
        colors: [
          { name: "Off-White", hex: "#E8E0D0" },
          { name: "Desert Tan", hex: "#C4A46C" },
          { name: "Beige", hex: "#C8B890" },
          { name: "Tan", hex: "#C2A878" },
          { name: "Khaki Tan", hex: "#B8A070" },
          { name: "Brown", hex: "#5A3A20" },
          { name: "Light Gray", hex: "#B0B0B0" },
          { name: "Medium Gray", hex: "#808080" },
          { name: "Dark Gray", hex: "#505050" },
          { name: "Charcoal Gray", hex: "#3C3C3C" },
          { name: "Light Blue", hex: "#7AB0D0" },
          { name: "Blue", hex: "#2A60C0" },
          { name: "Tile Red", hex: "#B33B2E" },
          { name: "Green", hex: "#2A7A40" },
          { name: "Traffic Yellow", hex: "#E8C010" },
          { name: "Safety Yellow", hex: "#F0D000" },
        ],
      },
    ],
  },
];
