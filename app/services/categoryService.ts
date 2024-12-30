import axios from "axios";
import { Category } from "../types";
const apiUrl = process.env.API_URL
export const getAllCategory = async (): Promise<Category[]> => {
    try {
      const response = await axios.get(`${apiUrl}/category`);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching posts:", error);
      return [];
    }
  };