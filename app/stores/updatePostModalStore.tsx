import { create } from "zustand";

import { Post } from "../types";

interface UpdatePostModalStore {
  isOpen: boolean;
  postData: Post | null;
  toggleUpdatePostModal: (isEdit: boolean, data?: Post) => void;
  setUpdatePosData: (data: Post | null) => void;
  closeUpdatePostModal: () => void;
}

export const useUpdatePostModalStore = create<UpdatePostModalStore>((set) => ({
  isOpen: false,
  postData: null,
  toggleUpdatePostModal: (isEdit: boolean, data?: Post) => {
    if (isEdit && data) {
      set({ isOpen: true, postData: data });
    } else {
      set({ isOpen: true, postData: null });
    }
  },
  setUpdatePosData: (data: Post | null) => set({ postData: data }),
  closeUpdatePostModal: () => set({ isOpen: false, postData: null }),
}));
