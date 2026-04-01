"use client";

import { Sparkles, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { useEpoxyStore } from "@/lib/store/epoxy-store";

export function GenerateButton() {
  const {
    config,
    originalImage,
    isGenerating,
    setIsGenerating,
    setGeneratedImage,
  } = useEpoxyStore();

  const handleGenerate = async () => {
    if (!originalImage) {
      toast.error("Upload a room photo first");
      return;
    }

    setIsGenerating(true);
    setGeneratedImage(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ config, image: originalImage }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Generation failed");
      }

      setGeneratedImage(data.image);
      toast.success("Floor visualization generated!");
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Failed to generate preview"
      );
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="relative group w-full">
      <button
        onClick={handleGenerate}
        disabled={!originalImage || isGenerating}
        className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-xl transition-colors"
      >
        {isGenerating ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <Sparkles className="w-5 h-5" />
            Generate Preview
          </>
        )}
      </button>
      {!originalImage && !isGenerating && (
        <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Upload image first
        </span>
      )}
    </div>
  );
}
