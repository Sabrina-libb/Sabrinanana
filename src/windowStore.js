import { create } from 'zustand';

export const useWindowStore = create((set) => ({
  openWindows: {
    about: false,
    experience: false,
    works: false,
    gallery: false,
    music: false,
    contact: false,
    dataAnalysis: false,
    designPortfolio: false,
  },
  activeWindow: null,
  hasClicked: false,

  triggerWindow: (id) => set((state) => ({
    openWindows: { ...state.openWindows, [id]: true },
    activeWindow: id,
    hasClicked: true,
  })),

  closeWindow: (id) => set((state) => ({
    openWindows: { ...state.openWindows, [id]: false },
  })),

  setActive: (id) => set({ activeWindow: id }),
}));
