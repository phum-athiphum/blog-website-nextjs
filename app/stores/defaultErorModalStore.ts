import { create } from "zustand";

interface DefaultErrorModalState {
  isOpen: boolean;
  description: string | null;
  toggleErrorModal: () => void;
  closeErrorModal: () => void;
  setDescription: (id: string) => void;
}

export const useDefaultErrortModalStore = create<DefaultErrorModalState>(
  (set) => ({
    isOpen: false,
    description: "",
    toggleErrorModal: () => set((state) => ({ isOpen: !state.isOpen })),
    closeErrorModal: () => set({ isOpen: false, description: null }),
    setDescription: (text: string) => set({ description: text }),
  })
);
