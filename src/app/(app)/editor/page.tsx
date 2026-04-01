"use client";

import { useState } from "react";
import { Download, Save, RotateCcw, ChevronDown, ChevronUp } from "lucide-react";
import toast from "react-hot-toast";
import { useEpoxyStore } from "@/lib/store/epoxy-store";
import { PhotoUpload } from "@/components/visualizer/photo-upload";
import { ColorControls } from "@/components/visualizer/color-controls";
import { PresetGallery } from "@/components/visualizer/preset-gallery";
import { GenerateButton } from "@/components/visualizer/generate-button";
import { BeforeAfter } from "@/components/visualizer/before-after";

export default function EditorPage() {
  const {
    originalImage,
    generatedImage,
    resetConfig,
    saveProject,
  } = useEpoxyStore();

  const [showPresets, setShowPresets] = useState(true);
  const [projectName, setProjectName] = useState("");
  const [showSaveDialog, setShowSaveDialog] = useState(false);

  const handleSave = () => {
    if (!projectName.trim()) {
      toast.error("Enter a project name");
      return;
    }
    saveProject(projectName.trim());
    setProjectName("");
    setShowSaveDialog(false);
    toast.success("Project saved!");
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
          {/* Presets Section */}
          <div>
            <button
              onClick={() => setShowPresets(!showPresets)}
              className="w-full flex items-center justify-between text-sm font-semibold uppercase tracking-wider text-muted mb-2"
            >
              Presets
              {showPresets ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
            {showPresets && <PresetGallery />}
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
                onClick={() => setShowSaveDialog(true)}
                disabled={!generatedImage}
                className="flex-1 flex items-center justify-center gap-2 border border-card-border hover:border-muted disabled:opacity-50 disabled:cursor-not-allowed py-2 px-4 rounded-xl text-sm transition-colors"
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

        {/* Save Dialog */}
        {showSaveDialog && (
          <div className="p-4 border-t border-card-border">
            <p className="text-sm font-medium mb-2">Save Project</p>
            <div className="flex gap-2">
              <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="Project name..."
                className="flex-1 bg-card border border-card-border rounded-lg px-3 py-2 text-sm"
                onKeyDown={(e) => e.key === "Enter" && handleSave()}
              />
              <button
                onClick={handleSave}
                className="bg-accent hover:bg-accent-hover text-black font-medium px-4 py-2 rounded-lg text-sm transition-colors"
              >
                Save
              </button>
              <button
                onClick={() => setShowSaveDialog(false)}
                className="border border-card-border hover:border-muted px-3 py-2 rounded-lg text-sm transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </aside>

      {/* Main Viewport */}
      <div className="flex-1 flex items-center justify-center p-6 overflow-y-auto">
        <div className="w-full max-w-4xl">
          {!originalImage ? (
            <PhotoUpload />
          ) : generatedImage ? (
            <div className="space-y-4">
              <BeforeAfter before={originalImage} after={generatedImage} />
              <p className="text-center text-xs text-muted">
                Drag the slider to compare before and after
              </p>
            </div>
          ) : (
            <PhotoUpload />
          )}
        </div>
      </div>
    </div>
  );
}
