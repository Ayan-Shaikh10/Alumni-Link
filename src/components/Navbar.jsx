import { FaGraduationCap } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/70 border-b border-cyan-400/20 h-24">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 h-full">

        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-3"
        >
          <FaGraduationCap className="text-cyan-400 text-3xl" />

          <h2 className="text-2xl font-bold text-white">
            Alumni
            <span className="text-cyan-400">-Link</span>
          </h2>
        </NavLink>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-10">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold"
                : "text-slate-300 hover:text-cyan-400 transition duration-300"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/events"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold"
                : "text-slate-300 hover:text-cyan-400 transition duration-300"
            }
          >
            Events
          </NavLink>

          <NavLink
            to="/directory"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold"
                : "text-slate-300 hover:text-cyan-400 transition duration-300"
            }
          >
            Alumni
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold"
                : "text-slate-300 hover:text-cyan-400 transition duration-300"
            }
          >
            About
          </NavLink>

        </div>

        {/* Buttons */}
        <div className="hidden md:flex gap-4">

          <NavLink to="/login">
            <button className="px-5 py-2 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300">
              Login
            </button>
          </NavLink>

          <NavLink to="/register">
            <button className="px-5 py-2 rounded-lg bg-cyan-400 text-black font-semibold hover:scale-105 transition duration-300">
              Register
            </button>
          </NavLink>

        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden">
          <HiMenu className="text-3xl text-cyan-400" />
        </button>

      </div>

    </nav>
  );
}

export default Navbar;