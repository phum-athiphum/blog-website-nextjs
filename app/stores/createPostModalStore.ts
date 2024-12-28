import { create } from "zustand";

interface PostData {
  title: string;
  categoryId: string;
  description: string;
}

interface CreatePostModalStore {
  isOpen: boolean;
  postData: PostData | null;
  toggleCreatePostModal: (isEdit: boolean, data?: PostData) => void;
  setPostData: (data: PostData | null) => void;
  closeCreatePostModal: () => void;
}

export const useCreatePostModalStore = create<CreatePostModalStore>((set) => ({
  isOpen: false,
  postData: null,
  toggleCreatePostModal: (isEdit: boolean, data?: PostData) => {
    if (isEdit && data) {
      set({ isOpen: true, postData: data });
    } else {
      set({ isOpen: true, postData: null });
    }
  },
  setPostData: (data: PostData | null) => set({ postData: data }),
  closeCreatePostModal: () => set({ isOpen: false, postData: null }),
}));