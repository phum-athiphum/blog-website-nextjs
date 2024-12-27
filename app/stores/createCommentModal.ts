import { create } from "zustand";

interface CommentModalState {
  isOpen: boolean;
  toggleModal: () => void;
  closeModal: () => void;
}

export const useCreateCommentModalStore = create<CommentModalState>((set) => ({
  isOpen: false,
  toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
  closeModal: () => set({ isOpen: false }),
}));
