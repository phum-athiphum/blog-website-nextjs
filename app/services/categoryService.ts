import axios from "axios";
import { Category } from "../types";
const apiUrl = "http://localhost:8000"
export const getAllCategory = async (): Promise<Category[]> => {
    try {
      const response = await axios.get(`${apiUrl}/category`);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching posts:", error);
      return [];
    }
  };