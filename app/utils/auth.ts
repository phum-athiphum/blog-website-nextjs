import jwt from "jsonwebtoken";

interface JwtPayload {
  name: string;
  userId: string;
}

const SECRET_KEY = process.env.SECRET_KEY;

export const getAuthHeaders = () => {
  const token = localStorage.getItem("accessToken");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};


export const getUserFromToken = (token: string): { userId: string; name: string } | null => {
    try {
      if (!SECRET_KEY) {
        throw new Error("SECRET_KEY is not defined");
      }
      const decoded = jwt.verify(token, SECRET_KEY) as JwtPayload;
      return {
        userId: decoded.userId,
        name: decoded.name,
      };
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  };


export const getUserFullname = () => {
    const fullName = localStorage.getItem("name");
    if (fullName) {
        return fullName
    } else {
        return null
    }

}


export const getUserId = () => {
    const id = localStorage.getItem("userId");
    if (id) {
        return parseInt(id)
    } else {
        return null
    }
}
