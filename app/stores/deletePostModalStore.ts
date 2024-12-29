import { create } from "zustand";

interface DeleteModalState {
  isOpen: boolean;
  postId: number | null;
  toggleDeleteModal: () => void;
  closeDeleteModal: () => void;
  setPostId: (id: number) => void; 
}

export const useDeletePostModalStore = create<DeleteModalState>((set) => ({
  isOpen: false,
  postId: null, // Initialize postId as null
  toggleDeleteModal: () => set((state) => ({ isOpen: !state.isOpen })),
  closeDeleteModal: () => set({ isOpen: false, postId: null }),
  setPostId: (id: number) => set({ postId: id }),
}));