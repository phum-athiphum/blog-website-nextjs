export const getAuthHeaders = () => {
    const token = localStorage.getItem("accessToken");
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    };
  };