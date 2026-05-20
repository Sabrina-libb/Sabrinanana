import { create } from 'zustand';

const useStore = create((set) => ({
  isCatHovered: false,
  setIsCatHovered: (value) => set({ isCatHovered: value }),

  activeModal: null,
  openModal: (id) => set({ activeModal: id }),
  closeModal: () => set({ activeModal: null }),
}));

export default useStore;
