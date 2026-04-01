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
  saveProject: (name: string) => void;
  loadProject: (id: string) => void;
  deleteProject: (id: string) => void;
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

  saveProject: (name) => {
    const { config, originalImage, generatedImage } = get();
    const project: Project = {
      id: crypto.randomUUID(),
      name,
      config: { ...config },
      originalImage,
      generatedImage,
      createdAt: new Date().toISOString(),
    };
    set((state) => ({
      projects: [...state.projects, project],
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

  deleteProject: (id) =>
    set((state) => ({
      projects: state.projects.filter((p) => p.id !== id),
      activeProjectId:
        state.activeProjectId === id ? null : state.activeProjectId,
    })),

  resetConfig: () => set({ config: { ...defaultConfig }, generatedImage: null }),
}));
