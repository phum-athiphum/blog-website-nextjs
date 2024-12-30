import { create } from "zustand";

interface CreatePostModalStore {
  isOpen: boolean;
  toggleCreatePostModal: () => void;
  closeCreatePostModal: () => void;
}

export const useCreatePostModalStore = create<CreatePostModalStore>((set) => ({
  isOpen: false,
  toggleCreatePostModal: () => set((state) => ({ isOpen: !state.isOpen })),
  closeCreatePostModal: () => set({ isOpen: false }),
}));