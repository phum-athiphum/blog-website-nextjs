import axios from "axios";
import { getAuthHeaders } from "../utils/auth";
const apiUrl = "http://localhost:8000"
export const login = async (username: string) => {
  try {
    const response = await axios.post(
      `${apiUrl}/auth/login`,
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
