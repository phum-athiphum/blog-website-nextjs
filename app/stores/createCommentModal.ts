import { create } from "zustand";

interface CommentModalState {
  isOpen: boolean;
  toggleCreateCommentModal: () => void;
  closeCreateCommentModal: () => void;
}

export const useCreateCommentModalStore = create<CommentModalState>((set) => ({
  isOpen: false,
  toggleCreateCommentModal: () => set((state) => ({ isOpen: !state.isOpen })),
  closeCreateCommentModal: () => set({ isOpen: false }),
}));
