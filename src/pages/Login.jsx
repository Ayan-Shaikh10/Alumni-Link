import { Link } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import {
  FaGraduationCap,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash
} from "react-icons/fa";

function Login() {

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({

    email: "",

    password: ""

  });

  const navigate = useNavigate();

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };

  const handleLogin = async (e) => {

  e.preventDefault();

  if (!formData.email || !formData.password) {

    toast.error("Please fill in all fields.");

    return;

  }

  setLoading(true);

  try {

    await signInWithEmailAndPassword(

      auth,

      formData.email,

      formData.password

    );

    toast.success("Welcome back!");

    navigate("/dashboard");

  }

  catch (error) {

    switch (error.code) {

      case "auth/invalid-credential":

        toast.error("Incorrect email or password.");

        break;

      case "auth/invalid-email":

        toast.error("Invalid email address.");

        break;

      case "auth/too-many-requests":

        toast.error("Too many attempts. Please try again later.");

        break;

      default:

        toast.error("Login failed.");

    }

  }

  finally {

    setLoading(false);

  }

};

  return (

    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-5">

      <div className="w-full max-w-lg rounded-3xl bg-slate-900 border border-cyan-400/20 shadow-2xl p-10">

        {/* Logo */}

        <div className="flex justify-center items-center gap-3">

          <FaGraduationCap className="text-cyan-400 text-5xl" />

          <h1 className="text-5xl font-bold text-white">

            Alumni

            <span className="text-cyan-400">

              -Link

            </span>

          </h1>

        </div>

        <h2 className="text-center text-4xl font-bold text-white mt-8">

          Welcome Back

        </h2>

        <p className="text-center text-slate-400 mt-3 mb-10">

          Login to continue your alumni journey.

        </p>

        <form onSubmit={handleLogin}>

            {/* Email */}

          <div className="mb-6">

            <label className="block text-slate-300 mb-2">

              Email Address

            </label>

            <div className="flex items-center bg-slate-800 rounded-xl border border-slate-700 focus-within:border-cyan-400">

              <FaEnvelope className="mx-4 text-slate-400" />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent outline-none py-4 text-white placeholder:text-slate-500"
              />

            </div>

          </div>

          {/* Password */}

          <div className="mb-4">

            <label className="block text-slate-300 mb-2">

              Password

            </label>

            <div className="flex items-center bg-slate-800 rounded-xl border border-slate-700 focus-within:border-cyan-400">

              <FaLock className="mx-4 text-slate-400" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-transparent outline-none py-4 text-white placeholder:text-slate-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="mr-4 text-slate-400 hover:text-cyan-400"
              >

                {showPassword ? <FaEyeSlash /> : <FaEye />}

              </button>

            </div>

          </div>

          {/* Remember Me + Forgot Password */}

          <div className="flex justify-between items-center mb-8">

            <label className="flex items-center gap-2 text-slate-300">

              <input type="checkbox" />

              Remember Me

            </label>

            <Link
              to="/forgot-password"
              className="text-cyan-400 hover:text-cyan-300"
            >

              Forgot Password?

            </Link>

          </div>

          {/* Login Button */}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-400 text-black py-3 rounded-xl font-semibold hover:bg-cyan-300 transition disabled:opacity-50"
          >

            {loading ? "Logging In..." : "Login"}

          </button>

        </form>

        <p className="text-center text-slate-400 mt-8">

          Don't have an account?

          <Link
            to="/register"
            className="text-cyan-400 font-semibold ml-2 hover:text-cyan-300"
          >

            Register

          </Link>

        </p>

      </div>

    </div>

  );

}

export default Login;