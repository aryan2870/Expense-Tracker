import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuWallet } from "react-icons/lu";

import AuthLayout from "../../components/Layouts/AuthLayout";
import Input from "../../components/Inputs/Input";

import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";

import { UserContext } from "../../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { updateUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    setError("");

    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
        email,
        password,
      });

      const { token, user } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        updateUser(user);
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <AuthLayout>
      <div className="w-full flex flex-col justify-center">
        {/* Header Section with Icon */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-600">
            <LuWallet size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800 tracking-tight">
              Welcome back
            </h3>
            <p className="text-xs text-slate-500 mt-[2px]">
              Please enter your credentials to login
            </p>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Email Address"
            placeholder="john@example.com"
            type="email"
          />
          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="Password"
            placeholder="Min 8 characters"
            type="password"
          />

          {error && <p className="text-red-500 text-xs font-medium pt-1">{error}</p>}

          <button 
            type="submit" 
            className="w-full cursor-pointer text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 py-3.5 px-4 rounded-xl shadow-lg shadow-purple-600/25 transition-all duration-300 transform active:scale-[0.98] mt-2"
          >
            LOGIN
          </button>

          <p className="text-sm text-slate-600 text-center mt-4">
            Don't have an account?{" "}
            <Link className="font-semibold text-purple-600 hover:text-purple-700 transition-colors duration-200 underline" to={"/signUp"}>
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
