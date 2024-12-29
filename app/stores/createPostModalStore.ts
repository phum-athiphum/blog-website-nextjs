import { create } from "zustand";

import { Post } from "../types";

interface CreatePostModalStore {
  isOpen: boolean;
  postData: Post | null;
  toggleCreatePostModal: (isEdit: boolean, data?: Post) => void;
  setPostData: (data: Post | null) => void;
  closeCreatePostModal: () => void;
}

export const useCreatePostModalStore = create<CreatePostModalStore>((set) => ({
  isOpen: false,
  postData: null,
  toggleCreatePostModal: (isEdit: boolean, data?: Post) => {
    if (isEdit && data) {
      set({ isOpen: true, postData: data });
    } else {
      set({ isOpen: true, postData: null });
    }
  },
  setPostData: (data: Post | null) => set({ postData: data }),
  closeCreatePostModal: () => set({ isOpen: false, postData: null }),
}));