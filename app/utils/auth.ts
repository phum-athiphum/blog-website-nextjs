import jwt from "jsonwebtoken";

interface JwtPayload {
    username: string;
    userId: string;
  }

const SECRET_KEY = "your-jwt-secret";

export const getAuthHeaders = () => {
  const token = localStorage.getItem("accessToken");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};


export const getUsernameFromToken = (token: string) => {
    try {
      const decoded = jwt.verify(token, SECRET_KEY) as JwtPayload;
      return decoded.username;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  };
