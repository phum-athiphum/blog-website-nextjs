import { create } from "zustand";

interface MobileSidebarState {
  isOpen: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
}

export const useMobileSidebarStore = create<MobileSidebarState>((set) => ({
  isOpen: false,
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
  closeSidebar: () => set({ isOpen: false }),
}));