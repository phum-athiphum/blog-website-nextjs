import axios from "axios";
import { getAuthHeaders } from "../utils/auth";
export const createComment = async (commentData: {
    userId: number;
    description: string;
  }) => {
    try {
  
      const response = await axios.post("http://localhost:8000/comments", commentData, {
        headers: getAuthHeaders()
      });
  
      return response.data;
    } catch (error) {
      console.error("Error creating post:", error);
      return [];
    }
  };