"use client";

import { useEpoxyStore, EpoxyConfig } from "@/lib/store/epoxy-store";

const flakeTypes: { value: EpoxyConfig["flakeType"]; label: string }[] = [
  { value: "none", label: "None" },
  { value: "metallic", label: "Metallic" },
  { value: "vinyl", label: "Vinyl Chip" },
  { value: "quartz", label: "Quartz" },
  { value: "mica", label: "Mica" },
];

const flakeSizes: { value: EpoxyConfig["flakeSize"]; label: string }[] = [
  { value: "fine", label: "Fine" },
  { value: "medium", label: "Medium" },
  { value: "coarse", label: "Coarse" },
];

const textures: { value: EpoxyConfig["texture"]; label: string }[] = [
  { value: "smooth", label: "Smooth" },
  { value: "orange-peel", label: "Orange Peel" },
  { value: "broadcast", label: "Full Broadcast" },
  { value: "swirl", label: "Swirl" },
];

const roomTypes = [
  "garage",
  "basement",
  "commercial kitchen",
  "showroom",
  "warehouse",
  "retail store",
  "workshop",
  "patio",
];

export function ColorControls() {
  const { config, setConfig } = useEpoxyStore();

  return (
    <div className="space-y-5">
      {/* Base Color */}
      <div>
        <label className="block text-sm font-medium mb-2">Base Color</label>
        <div className="flex items-center gap-3">
          <input
            type="color"
            value={config.baseColor}
            onChange={(e) => setConfig({ baseColor: e.target.value })}
            className="w-10 h-10 rounded-lg cursor-pointer border border-card-border bg-transparent"
          />
          <input
            type="text"
            value={config.baseColor}
            onChange={(e) => setConfig({ baseColor: e.target.value })}
            className="flex-1 bg-card border border-card-border rounded-lg px-3 py-2 text-sm font-mono"
          />
        </div>
      </div>

      {/* Secondary Color */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Secondary / Flake Color
        </label>
        <div className="flex items-center gap-3">
          <input
            type="color"
            value={config.secondaryColor}
            onChange={(e) => setConfig({ secondaryColor: e.target.value })}
            className="w-10 h-10 rounded-lg cursor-pointer border border-card-border bg-transparent"
          />
          <input
            type="text"
            value={config.secondaryColor}
            onChange={(e) => setConfig({ secondaryColor: e.target.value })}
            className="flex-1 bg-card border border-card-border rounded-lg px-3 py-2 text-sm font-mono"
          />
        </div>
      </div>

      {/* Flake Type */}
      <div>
        <label className="block text-sm font-medium mb-2">Flake Type</label>
        <div className="grid grid-cols-3 gap-2">
          {flakeTypes.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setConfig({ flakeType: value })}
              className={`px-3 py-2 text-sm rounded-lg border transition-colors ${
                config.flakeType === value
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-card-border hover:border-muted"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Flake Density */}
      {config.flakeType !== "none" && (
        <div>
          <label className="block text-sm font-medium mb-2">
            Flake Density: {config.flakeDensity}%
          </label>
          <input
            type="range"
            min={0}
            max={100}
            value={config.flakeDensity}
            onChange={(e) =>
              setConfig({ flakeDensity: parseInt(e.target.value) })
            }
          />
        </div>
      )}

      {/* Flake Size */}
      {config.flakeType !== "none" && (
        <div>
          <label className="block text-sm font-medium mb-2">Flake Size</label>
          <div className="grid grid-cols-3 gap-2">
            {flakeSizes.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => setConfig({ flakeSize: value })}
                className={`px-3 py-2 text-sm rounded-lg border transition-colors ${
                  config.flakeSize === value
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-card-border hover:border-muted"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Gloss Level */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Gloss Level: {config.glossLevel}%
        </label>
        <input
          type="range"
          min={0}
          max={100}
          value={config.glossLevel}
          onChange={(e) => setConfig({ glossLevel: parseInt(e.target.value) })}
        />
      </div>

      {/* Metallic Effect */}
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">Metallic Effect</label>
        <button
          onClick={() => setConfig({ metallicEffect: !config.metallicEffect })}
          className={`w-11 h-6 rounded-full transition-colors relative ${
            config.metallicEffect ? "bg-accent" : "bg-card-border"
          }`}
        >
          <span
            className={`block w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${
              config.metallicEffect ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
      </div>

      {/* Texture */}
      <div>
        <label className="block text-sm font-medium mb-2">Texture</label>
        <div className="grid grid-cols-2 gap-2">
          {textures.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setConfig({ texture: value })}
              className={`px-3 py-2 text-sm rounded-lg border transition-colors ${
                config.texture === value
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-card-border hover:border-muted"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Room Type */}
      <div>
        <label className="block text-sm font-medium mb-2">Room Type</label>
        <select
          value={config.roomType}
          onChange={(e) => setConfig({ roomType: e.target.value })}
          className="w-full bg-card border border-card-border rounded-lg px-3 py-2 text-sm"
        >
          {roomTypes.map((type) => (
            <option key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
