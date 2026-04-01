"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, Image as ImageIcon } from "lucide-react";
import { useEpoxyStore } from "@/lib/store/epoxy-store";

export function PhotoUpload() {
  const { originalImage, setOriginalImage } = useEpoxyStore();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = () => {
        setOriginalImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    },
    [setOriginalImage]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [".png", ".jpg", ".jpeg", ".webp"] },
    maxFiles: 1,
    maxSize: 10 * 1024 * 1024, // 10MB
  });

  if (originalImage) {
    return (
      <div className="relative group">
        <img
          src={originalImage}
          alt="Uploaded room"
          className="max-h-[60vh] max-w-full h-auto w-auto object-contain rounded-lg mx-auto block"
        />
        <button
          onClick={() => setOriginalImage(null)}
          className="absolute top-3 right-3 bg-black/70 hover:bg-black text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
        >
          Remove
        </button>
      </div>
    );
  }

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all ${
        isDragActive
          ? "border-accent bg-accent/5"
          : "border-card-border hover:border-muted"
      }`}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center gap-4">
        {isDragActive ? (
          <ImageIcon className="w-12 h-12 text-accent" />
        ) : (
          <Upload className="w-12 h-12 text-muted" />
        )}
        <div>
          <p className="text-lg font-medium">
            {isDragActive ? "Drop your photo here" : "Upload a room photo"}
          </p>
          <p className="text-sm text-muted mt-1">
            Drag & drop or click to browse. PNG, JPG, WebP up to 10MB.
          </p>
        </div>
      </div>
    </div>
  );
}
