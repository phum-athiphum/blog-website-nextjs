import axios from "axios";
import { Post } from "../types";
import { getAuthHeaders } from "../utils/auth";

export const getAllPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get("http://localhost:8000/posts");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

export const createPosts = async (postData: {
  userId: number;
  title: string;
  description: string;
  categoryId: number;
}): Promise<Post[]> => {
  try {

    const response = await axios.post("http://localhost:8000/posts", postData, {
      headers: getAuthHeaders()
    });

    return response.data;
  } catch (error) {
    console.error("Error creating post:", error);
    return [];
  }
};

export const deletePost = async (postId: number | null) => {
  try {

    const response = await axios.delete(
      `http://localhost:8000/posts/${postId}`,
      {
        headers: getAuthHeaders()
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error creating post:", error);
    return [];
  }
};
