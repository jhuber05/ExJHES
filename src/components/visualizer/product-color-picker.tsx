"use client";

import { useState } from "react";
import { brands } from "@/lib/product-colors";
import { useEpoxyStore } from "@/lib/store/epoxy-store";

export function ProductColorPicker() {
  const { setConfig } = useEpoxyStore();
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedLine, setSelectedLine] = useState<string>("");

  const brand = brands.find((b) => b.name === selectedBrand);
  const line = brand?.lines.find((l) => l.name === selectedLine);

  const handleBrandChange = (name: string) => {
    setSelectedBrand(name);
    setSelectedLine("");
  };

  const handleColorSelect = (hex: string) => {
    setConfig({ baseColor: hex });
  };

  return (
    <div className="space-y-3">
      {/* Brand Select */}
      <div>
        <label className="block text-xs font-medium text-muted mb-1">Brand</label>
        <select
          value={selectedBrand}
          onChange={(e) => handleBrandChange(e.target.value)}
          className="w-full bg-card border border-card-border rounded-lg px-3 py-2 text-sm"
        >
          <option value="">Select a brand...</option>
          {brands.map((b) => (
            <option key={b.name} value={b.name}>
              {b.name}
            </option>
          ))}
        </select>
      </div>

      {/* Product Line Select */}
      {brand && (
        <div>
          <label className="block text-xs font-medium text-muted mb-1">Product Line</label>
          <select
            value={selectedLine}
            onChange={(e) => setSelectedLine(e.target.value)}
            className="w-full bg-card border border-card-border rounded-lg px-3 py-2 text-sm"
          >
            <option value="">Select a product...</option>
            {brand.lines.map((l) => (
              <option key={l.name} value={l.name}>
                {l.name} ({l.category})
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Color Grid */}
      {line && (
        <div>
          <label className="block text-xs font-medium text-muted mb-1">
            {line.colors.length} colors
          </label>
          <div className="grid grid-cols-4 gap-1.5">
            {line.colors.map((color) => (
              <button
                key={color.name}
                onClick={() => handleColorSelect(color.hex)}
                className="group relative"
                title={`${color.name} — ${color.hex}`}
              >
                <div
                  className="w-full aspect-square rounded-lg border border-card-border hover:border-accent transition-colors hover:scale-110 duration-200"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="block text-[9px] text-muted text-center mt-0.5 truncate">
                  {color.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
