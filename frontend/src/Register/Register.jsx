import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PassswordInput from "../components/Input/PasswordInput";
import "./register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setError(false);
    if (!username || !email || !password) {
      setError("Please enter username, email and password");
    }
  };
  return (
    <div className="register-container">
      <form onSubmit={handleRegister}>
        <h4 className="register">Register</h4>
        <input
          type="text"
          placeholder="username"
          className="register-input"
          value={username}
          required
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="email"
          className="register-input"
          value={email}
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <PassswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="register-button">Create Account</button>
        <p className="login">
          Already have an account?{" "}
          <Link to="/" className="login-link">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
