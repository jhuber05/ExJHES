"use client";

import { Download, Save, RotateCcw, ImagePlus } from "lucide-react";
import toast from "react-hot-toast";
import { useEpoxyStore } from "@/lib/store/epoxy-store";
import { PhotoUpload } from "@/components/visualizer/photo-upload";
import { ColorControls } from "@/components/visualizer/color-controls";
import { GenerateButton } from "@/components/visualizer/generate-button";
import { BeforeAfter } from "@/components/visualizer/before-after";
import { ProductColorPicker } from "@/components/visualizer/product-color-picker";
import { ProductFlakePicker } from "@/components/visualizer/product-flake-picker";

export default function EditorPage() {
  const {
    originalImage,
    generatedImage,
    resetConfig,
    saveProject,
    setOriginalImage,
  } = useEpoxyStore();


  const handleQuickSave = async () => {
    const name = `Project ${new Date().toLocaleString()}`;
    try {
      await saveProject(name);
      toast.success("Project saved!");
    } catch {
      toast.error("Failed to save project");
    }
  };


  const handleDownload = () => {
    if (!generatedImage) return;
    const link = document.createElement("a");
    link.href = generatedImage;
    link.download = `epoxy-preview-${Date.now()}.png`;
    link.click();
  };

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-64px)]">
      {/* Sidebar Controls */}
      <aside className="w-full lg:w-80 xl:w-96 border-b lg:border-b-0 lg:border-r border-card-border overflow-y-auto bg-card/50">
        <div className="p-4 space-y-4">
          {/* Product Colors */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-muted mb-3">
              Product Colors
            </p>
            <ProductColorPicker />
          </div>

          {/* Divider */}
          <div className="border-t border-card-border" />

          {/* Product Flakes */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-muted mb-3">
              Product Flakes
            </p>
            <ProductFlakePicker />
          </div>

          {/* Divider */}
          <div className="border-t border-card-border" />

          {/* Custom Controls */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-muted mb-3">
              Custom Settings
            </p>
            <ColorControls />
          </div>

          {/* Divider */}
          <div className="border-t border-card-border" />

          {/* Actions */}
          <div className="space-y-2">
            <GenerateButton />
            <div className="flex gap-2">
              <button
                onClick={handleQuickSave}
                className="flex-1 flex items-center justify-center gap-2 border border-card-border hover:border-muted py-2 px-4 rounded-xl text-sm transition-colors"
              >
                <Save className="w-4 h-4" />
                Save
              </button>
              <button
                onClick={handleDownload}
                disabled={!generatedImage}
                className="flex-1 flex items-center justify-center gap-2 border border-card-border hover:border-muted disabled:opacity-50 disabled:cursor-not-allowed py-2 px-4 rounded-xl text-sm transition-colors"
              >
                <Download className="w-4 h-4" />
                Export
              </button>
              <button
                onClick={resetConfig}
                className="flex items-center justify-center gap-2 border border-card-border hover:border-muted py-2 px-3 rounded-xl text-sm transition-colors"
                title="Reset settings"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </aside>

      {/* Main Viewport */}
      <div className="flex-1 flex items-center justify-center p-6 overflow-hidden">
        <div className="w-full max-w-4xl max-h-full flex flex-col items-center">
          {!originalImage ? (
            <PhotoUpload />
          ) : generatedImage ? (
            <div className="flex flex-col items-center gap-3 max-h-full min-h-0">
              <div className="min-h-0 shrink w-full flex justify-center">
                <BeforeAfter before={originalImage} after={generatedImage} />
              </div>
              <p className="text-center text-xs text-muted shrink-0">
                Drag the slider to compare before and after
              </p>
              <button
                onClick={() => setOriginalImage(null)}
                className="shrink-0 flex items-center gap-2 border border-card-border hover:border-accent text-muted hover:text-foreground px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300"
              >
                <ImagePlus className="w-4 h-4" />
                Start Over with New Image
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <PhotoUpload />
              <div className="flex justify-center">
                <button
                  onClick={() => setOriginalImage(null)}
                  className="flex items-center gap-2 text-muted hover:text-foreground text-sm transition-colors duration-300"
                >
                  <ImagePlus className="w-4 h-4" />
                  Upload a different image
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
