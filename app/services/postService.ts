import axios from "axios";
import { Post } from "../types";
import { getAuthHeaders } from "../utils/auth";


const apiUrl = process.env.API_URL

export const getAllPosts = async (
    userId?: string,
    category?: string,
    search?: string
  ): Promise<Post[]> => {
    try {
      const params: Record<string, string | number> = {};
  
      if (userId) {
        params.userId = userId;
      }
  
      if (category) {
        params.categoryId = category;
      }
  
      if (search) {
        params.title = search;
      }
  
      const response = await axios.get(`${apiUrl}/posts`, { params });
      return response.data.data;
    } catch (error) {
      console.error("Error fetching posts:", error);
      return [];
    }
  };


export const getPostsById = async (id:string): Promise<Post | null> => {
    try {
      const response = await axios.get(`${apiUrl}/posts/${id}`);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching posts:", error);
      return null;
    }
  };

export const createPosts = async (postData: {
  userId: number;
  title: string;
  description: string;
  categoryId: number;
}): Promise<Post[]> => {
  try {

    const response = await axios.post(`${apiUrl}/posts`, postData, {
      headers: getAuthHeaders()
    });

    return response.data;
  } catch (error) {
    console.error("Error creating post:", error);
    return [];
  }
};

export const updatePost = async (id: number, postData: {
    title: string;
    description: string;
    categoryId: number;
  }): Promise<Post[]> => {
    try {
  
      const response = await axios.patch(`${apiUrl}/posts/${id}`, postData, {
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
      `${apiUrl}/posts/${postId}`,
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
