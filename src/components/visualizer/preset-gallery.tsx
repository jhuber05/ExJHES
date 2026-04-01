"use client";

import { useState } from "react";
import { useEpoxyStore } from "@/lib/store/epoxy-store";
import { presets, presetCategories } from "@/lib/presets";

export function PresetGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const { setConfig } = useEpoxyStore();

  const filtered =
    activeCategory === "all"
      ? presets
      : presets.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-3 py-1 text-xs rounded-full border transition-colors ${
            activeCategory === "all"
              ? "border-accent bg-accent/10 text-accent"
              : "border-card-border hover:border-muted"
          }`}
        >
          All
        </button>
        {presetCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1 text-xs rounded-full border transition-colors ${
              activeCategory === cat
                ? "border-accent bg-accent/10 text-accent"
                : "border-card-border hover:border-muted"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        {filtered.map((preset) => (
          <button
            key={preset.id}
            onClick={() => setConfig(preset.config)}
            className="group text-left border border-card-border rounded-lg overflow-hidden hover:border-accent/50 transition-colors"
          >
            <div
              className="h-16 w-full"
              style={{ background: preset.thumbnail }}
            />
            <div className="p-2">
              <p className="text-xs font-medium">{preset.name}</p>
              <p className="text-[10px] text-muted">{preset.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
