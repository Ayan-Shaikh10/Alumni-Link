import { FaGraduationCap } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/70 border-b border-cyan-400/20 h-25 py-5">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* Logo */}

        <div className="flex items-center gap-3">

          <FaGraduationCap
            className="text-cyan-400 text-3xl"
          />

          <h2 className="text-2xl font-bold text-white">

            Alumni
            <span className="text-cyan-400">
              -Link
            </span>

          </h2>

        </div>

        {/* Links */}

        <div className="hidden md:flex gap-10">

          <a className="text-slate-300 hover:text-cyan-400 transition duration-300">
            Home
          </a>

          <a className="text-slate-300 hover:text-cyan-400 transition">
            Events
          </a>

          <a className="text-slate-300 hover:text-cyan-400 transition">
            Alumni
          </a>

          <a className="text-slate-300 hover:text-cyan-400 transition">
            Contact
          </a>

        </div>

        {/* Buttons */}

        <div className="hidden md:flex gap-4">

          <button className="px-5 py-2 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition">

            Login

          </button>

          <button className="px-5 py-2 rounded-lg bg-cyan-400 text-black font-semibold hover:scale-105 transition">

            Register

          </button>

        </div>

        {/* Mobile Icon */}

        <HiMenu className="text-3xl text-cyan-400 md:hidden" />

      </div>

    </nav>
  );
}

export default Navbar;