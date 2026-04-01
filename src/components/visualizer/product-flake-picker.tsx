"use client";

import { useState } from "react";
import { flakeBrands } from "@/lib/flake-colors";
import { useEpoxyStore } from "@/lib/store/epoxy-store";

export function ProductFlakePicker() {
  const { setConfig } = useEpoxyStore();
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedLine, setSelectedLine] = useState<string>("");
  const [view, setView] = useState<"blends" | "individual">("blends");

  const brand = flakeBrands.find((b) => b.name === selectedBrand);
  const line = brand?.lines.find((l) => l.name === selectedLine);

  const handleBrandChange = (name: string) => {
    setSelectedBrand(name);
    setSelectedLine("");
  };

  const handleColorSelect = (hex: string) => {
    setConfig({ secondaryColor: hex });
  };

  return (
    <div className="space-y-3">
      {/* Brand Select */}
      <div>
        <label className="block text-xs font-medium text-muted mb-1">Flake Brand</label>
        <select
          value={selectedBrand}
          onChange={(e) => handleBrandChange(e.target.value)}
          className="w-full bg-card border border-card-border rounded-lg px-3 py-2 text-sm"
        >
          <option value="">Select a brand...</option>
          {flakeBrands.map((b) => (
            <option key={b.name} value={b.name}>
              {b.name}
            </option>
          ))}
        </select>
      </div>

      {/* Product Line Select */}
      {brand && (
        <div>
          <label className="block text-xs font-medium text-muted mb-1">Product</label>
          <select
            value={selectedLine}
            onChange={(e) => setSelectedLine(e.target.value)}
            className="w-full bg-card border border-card-border rounded-lg px-3 py-2 text-sm"
          >
            <option value="">Select a product...</option>
            {brand.lines.map((l) => (
              <option key={l.name} value={l.name}>
                {l.name} ({l.type})
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Toggle: Blends vs Individual */}
      {line && (
        <div className="flex gap-1">
          {line.blends.length > 0 && (
            <button
              onClick={() => setView("blends")}
              className={`flex-1 px-3 py-1.5 text-xs rounded-lg border transition-colors ${
                view === "blends"
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-card-border hover:border-muted"
              }`}
            >
              Blends
            </button>
          )}
          {line.individualColors.length > 0 && (
            <button
              onClick={() => setView("individual")}
              className={`flex-1 px-3 py-1.5 text-xs rounded-lg border transition-colors ${
                view === "individual"
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-card-border hover:border-muted"
              }`}
            >
              Individual Colors
            </button>
          )}
        </div>
      )}

      {/* Blends View */}
      {line && view === "blends" && line.blends.length > 0 && (
        <div className="space-y-2">
          {line.blends.map((blend) => (
            <button
              key={blend.name}
              onClick={() => handleColorSelect(blend.colors[0].hex)}
              className="w-full text-left border border-card-border rounded-lg p-2 hover:border-accent/50 transition-colors"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="flex -space-x-1">
                  {blend.colors.map((c, i) => (
                    <div
                      key={i}
                      className="w-5 h-5 rounded-full border border-white"
                      style={{ backgroundColor: c.hex, zIndex: blend.colors.length - i }}
                    />
                  ))}
                </div>
                <span className="text-xs font-medium">{blend.name}</span>
              </div>
              <div className="flex h-3 rounded overflow-hidden">
                {blend.colors.map((c, i) => (
                  <div
                    key={i}
                    className="flex-1"
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Individual Colors View */}
      {line && view === "individual" && line.individualColors.length > 0 && (
        <div className="grid grid-cols-5 gap-1.5">
          {line.individualColors.map((color) => (
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
              <span className="block text-[8px] text-muted text-center mt-0.5 truncate">
                {color.name}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
