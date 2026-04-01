import { create } from "zustand";

export interface EpoxyConfig {
  baseColor: string;
  secondaryColor: string;
  flakeType: "none" | "metallic" | "vinyl" | "quartz" | "mica";
  flakeDensity: number; // 0-100
  flakeSize: "fine" | "medium" | "coarse";
  glossLevel: number; // 0-100
  metallicEffect: boolean;
  texture: "smooth" | "orange-peel" | "broadcast" | "swirl";
  roomType: string;
}

export interface Project {
  id: string;
  name: string;
  config: EpoxyConfig;
  originalImage: string | null;
  generatedImage: string | null;
  createdAt: string;
}

interface DbProject {
  id: string;
  name: string;
  baseColor: string;
  secondaryColor: string;
  flakeType: string;
  flakeDensity: number;
  flakeSize: string;
  glossLevel: number;
  metallicEffect: boolean;
  texture: string;
  roomType: string;
  originalImage: string | null;
  generatedImage: string | null;
  createdAt: string;
}

function dbToProject(p: DbProject): Project {
  return {
    id: p.id,
    name: p.name,
    config: {
      baseColor: p.baseColor,
      secondaryColor: p.secondaryColor,
      flakeType: p.flakeType as EpoxyConfig["flakeType"],
      flakeDensity: p.flakeDensity,
      flakeSize: p.flakeSize as EpoxyConfig["flakeSize"],
      glossLevel: p.glossLevel,
      metallicEffect: p.metallicEffect,
      texture: p.texture as EpoxyConfig["texture"],
      roomType: p.roomType,
    },
    originalImage: p.originalImage,
    generatedImage: p.generatedImage,
    createdAt: p.createdAt,
  };
}

interface EpoxyStore {
  config: EpoxyConfig;
  originalImage: string | null;
  generatedImage: string | null;
  isGenerating: boolean;
  projects: Project[];
  activeProjectId: string | null;

  setConfig: (partial: Partial<EpoxyConfig>) => void;
  setOriginalImage: (image: string | null) => void;
  setGeneratedImage: (image: string | null) => void;
  setIsGenerating: (value: boolean) => void;
  saveProject: (name: string) => Promise<void>;
  loadProject: (id: string) => void;
  deleteProject: (id: string) => Promise<void>;
  renameProject: (id: string, name: string) => Promise<void>;
  fetchProjects: () => Promise<void>;
  resetConfig: () => void;
}

const defaultConfig: EpoxyConfig = {
  baseColor: "#808080",
  secondaryColor: "#a0a0a0",
  flakeType: "none",
  flakeDensity: 50,
  flakeSize: "medium",
  glossLevel: 85,
  metallicEffect: false,
  texture: "smooth",
  roomType: "garage",
};

export const useEpoxyStore = create<EpoxyStore>((set, get) => ({
  config: { ...defaultConfig },
  originalImage: null,
  generatedImage: null,
  isGenerating: false,
  projects: [],
  activeProjectId: null,

  setConfig: (partial) =>
    set((state) => ({ config: { ...state.config, ...partial } })),

  setOriginalImage: (image) => set({ originalImage: image, generatedImage: null }),

  setGeneratedImage: (image) => set({ generatedImage: image }),

  setIsGenerating: (value) => set({ isGenerating: value }),

  fetchProjects: async () => {
    try {
      const res = await fetch("/api/projects");
      if (!res.ok) return;
      const data: DbProject[] = await res.json();
      if (Array.isArray(data)) {
        set({ projects: data.map(dbToProject) });
      }
    } catch {
      // silently fail
    }
  },

  saveProject: async (name) => {
    const { config, originalImage, generatedImage } = get();
    console.log("saveProject - originalImage:", originalImage ? `${originalImage.length} chars` : null);
    console.log("saveProject - generatedImage:", generatedImage ? `${generatedImage.length} chars` : null);
    const res = await fetch("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, config, originalImage, generatedImage }),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      console.error("Save project error:", err);
      throw new Error("Failed to save");
    }
    const data: DbProject = await res.json();
    const project = dbToProject(data);
    set((state) => ({
      projects: [project, ...state.projects],
      activeProjectId: project.id,
    }));
  },

  loadProject: (id) => {
    const project = get().projects.find((p) => p.id === id);
    if (project) {
      set({
        config: { ...project.config },
        originalImage: project.originalImage,
        generatedImage: project.generatedImage,
        activeProjectId: id,
      });
    }
  },

  renameProject: async (id, name) => {
    const res = await fetch(`/api/projects/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    if (!res.ok) throw new Error("Failed to rename");
    set((state) => ({
      projects: state.projects.map((p) =>
        p.id === id ? { ...p, name } : p
      ),
    }));
  },

  deleteProject: async (id) => {
    await fetch(`/api/projects/${id}`, { method: "DELETE" });
    set((state) => ({
      projects: state.projects.filter((p) => p.id !== id),
      activeProjectId:
        state.activeProjectId === id ? null : state.activeProjectId,
    }));
  },

  resetConfig: () => set({ config: { ...defaultConfig }, generatedImage: null }),
}));
