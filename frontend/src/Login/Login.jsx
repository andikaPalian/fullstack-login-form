import React, { useState } from "react";
import PasswordInput from "../components/Input/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError(false);

    if (!email || !password) {
      setError("Please enter email and password");
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
