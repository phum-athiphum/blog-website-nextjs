import axios from "axios";
import { getAuthHeaders } from "../utils/auth";
const apiUrl = process.env.API_URL
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
