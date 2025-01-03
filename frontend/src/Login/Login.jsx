import React, { useState } from "react";
import PasswordInput from "../components/Input/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(false);

    if (!email || !password) {
      setError("Please enter email and password");
    }

    try {
      const response = await axiosInstance.post("/api/user/login", {
        email,
        password,
      });

      const {data} = response.data;
      if (!data?.token) {
        throw new error ("Token not found in response");
      };

      localStorage.setItem("token", `Bearer ${data.token}`);
      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
      };

      console.log("Login successful")
      navigate("/home");
    } catch (error) {
      console.error("Login error:", {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status
      });
      
      setError(
        error.response?.data?.message || 
        error.message || 
        "Login failed. Please try again."
      );
    }
  };
  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h4 className="login">Login</h4>
        <input
          type="email"
          placeholder="Email"
          required
          className="email-login"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && (<p className="error-message">{error}</p>)}
        <button type="submit" className="login-button">
          Login
        </button>
        <p className="register">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="register-link">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
