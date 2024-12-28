import { create } from "zustand";

interface DeleteModalState {
  isOpen: boolean;
  toggleDeleteModal: () => void;
  closeDeleteModal: () => void;
}

export const useDeletePostModalStore = create<DeleteModalState>((set) => ({
  isOpen: false,
  toggleDeleteModal: () => set((state) => ({ isOpen: !state.isOpen })),
  closeDeleteModal: () => set({ isOpen: false }),
}));
