import axios from "axios";
import { getAuthHeaders } from "../utils/auth";

export const login = async (username: string) => {
  try {
    const response = await axios.post(
      `http://localhost:8000/auth/login`,
      {
        username: username,
      },
      {
        headers: getAuthHeaders(),
      }
    );
    return response.data
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};
