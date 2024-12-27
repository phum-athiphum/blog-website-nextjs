import { create } from "zustand";

interface CreatePostModalState {
  isOpen: boolean;
  toggleModal: () => void;
  closeModal: () => void;
}

export const useCreatePostModalStore = create<CreatePostModalState>((set) => ({
  isOpen: false,
  toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
  closeModal: () => set({ isOpen: false }),
}));
