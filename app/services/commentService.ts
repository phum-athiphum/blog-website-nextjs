import axios from "axios";
import { getAuthHeaders } from "../utils/auth";

const apiUrl = "http://localhost:8000"
export const createComment = async (commentData: {
    postId:number;
    userId: number;
    description: string;
  }) => {
    try {
  
      const response = await axios.post(`${apiUrl}/comments`, commentData, {
        headers: getAuthHeaders()
      });
  
      return response.data;
    } catch (error) {
      console.error("Error creating post:", error);
      return [];
    }
  };