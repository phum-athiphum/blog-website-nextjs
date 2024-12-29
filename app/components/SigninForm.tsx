import React, { useState } from "react";
import { login } from "../services/authService";
import { useRouter } from "next/navigation";

function SigninForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const data = await login(username);
      if (data) {
        localStorage.setItem("accessToken", data.access_token);
        router.push("/homepage");
      }
    } catch (err) {
      setError("Login failed. Please try again.");
      console.error("Login error:", err);
    }
  };

  return (
    <div className="flex flex-col w-[343px] xl:w-[384px] mx-auto text-white">
      <h1 className="text-[28px] mb-10">Sign In</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full h-[44px] p-2 mb-5 outline-none"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        <button
          type="submit"
          className="font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full bg-lightgreen"
        >Login</button>
      </form>
    </div>
  );
}

export default SigninForm;
