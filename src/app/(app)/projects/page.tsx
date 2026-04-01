"use client";

import Link from "next/link";
import { Trash2, FolderOpen, Plus } from "lucide-react";
import { useEpoxyStore } from "@/lib/store/epoxy-store";

export default function ProjectsPage() {
  const { projects, deleteProject, loadProject } = useEpoxyStore();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Saved Projects</h1>
          <p className="text-sm text-muted mt-1">
            {projects.length} project{projects.length !== 1 ? "s" : ""} saved
          </p>
        </div>
        <Link
          href="/editor"
          className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-black font-medium px-5 py-2.5 rounded-xl transition-colors"
        >
          <Plus className="w-4 h-4" />
          New Project
        </Link>
      </div>

      {projects.length === 0 ? (
        <div className="border border-card-border rounded-xl p-16 text-center">
          <FolderOpen className="w-12 h-12 text-muted mx-auto mb-4" />
          <p className="text-lg font-medium">No projects yet</p>
          <p className="text-sm text-muted mt-1">
            Create your first epoxy visualization in the editor.
          </p>
          <Link
            href="/editor"
            className="inline-block mt-6 text-accent hover:text-accent-hover font-medium"
          >
            Go to Editor &rarr;
          </Link>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-card-border rounded-xl overflow-hidden group hover:border-accent/30 transition-colors"
            >
              {/* Thumbnail */}
              <div className="aspect-video bg-card relative">
                {project.generatedImage ? (
                  <img
                    src={project.generatedImage}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                ) : project.originalImage ? (
                  <img
                    src={project.originalImage}
                    alt={project.name}
                    className="w-full h-full object-cover opacity-50"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <FolderOpen className="w-8 h-8 text-muted" />
                  </div>
                )}
                {/* Color swatch overlay */}
                <div className="absolute bottom-2 left-2 flex gap-1">
                  <div
                    className="w-5 h-5 rounded-full border border-white/30"
                    style={{ backgroundColor: project.config.baseColor }}
                  />
                  <div
                    className="w-5 h-5 rounded-full border border-white/30"
                    style={{ backgroundColor: project.config.secondaryColor }}
                  />
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-medium truncate">{project.name}</h3>
                <p className="text-xs text-muted mt-1">
                  {new Date(project.createdAt).toLocaleDateString()} &middot;{" "}
                  {project.config.flakeType === "none"
                    ? "Solid"
                    : project.config.flakeType}{" "}
                  &middot; {project.config.texture}
                </p>
                <div className="flex gap-2 mt-3">
                  <Link
                    href="/editor"
                    onClick={() => loadProject(project.id)}
                    className="flex-1 text-center text-sm bg-card border border-card-border hover:border-muted py-1.5 rounded-lg transition-colors"
                  >
                    Open
                  </Link>
                  <button
                    onClick={() => deleteProject(project.id)}
                    className="text-sm border border-card-border hover:border-red-500 hover:text-red-500 py-1.5 px-3 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
