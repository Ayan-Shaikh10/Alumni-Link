import { useEffect, useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();
  const location = useLocation();

  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      id: "home",
      label: "Home",
    },
    {
      id: "events",
      label: "Events",
    },
    {
      id: "alumni",
      label: "Alumni",
    },
    {
      id: "about",
      label: "About",
    },
  ];

  function scrollToSection(id) {

    if (location.pathname !== "/") {

      navigate("/");

      setTimeout(() => {

        const element = document.getElementById(id);

        if (element) {

          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

        }

      }, 300);

    } else {

      const element = document.getElementById(id);

      if (element) {

        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

      }

    }

    setMenuOpen(false);

  }

  useEffect(() => {

    if (location.pathname !== "/") return;

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            setActiveSection(entry.target.id);

          }

        });

      },

      {
        threshold: 0.45,
      }

    );

    navItems.forEach((item) => {

      const section = document.getElementById(item.id);

      if (section) {

        observer.observe(section);

      }

    });

    return () => observer.disconnect();

  }, [location.pathname]);

  return (

    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/70 border-b border-cyan-400/20">

      <div className="max-w-7xl mx-auto h-24 px-8 flex items-center justify-between">

        {/* Logo */}

        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-3"
        >

          <FaGraduationCap className="text-3xl text-cyan-400" />

          <h2 className="text-2xl font-bold text-white">

            Alumni

            <span className="text-cyan-400">

              -Link

            </span>

          </h2>

        </button>

        {/* Desktop Navigation */}
      <div className="hidden md:flex gap-10">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`relative transition duration-300 ${
              activeSection === item.id
                ? "text-cyan-400 font-semibold"
                : "text-slate-300 hover:text-cyan-400"
            }`}
          >
            {item.label}

            {activeSection === item.id && (
              <span className="absolute left-0 -bottom-2 h-[2px] w-full rounded-full bg-cyan-400"></span>
            )}
          </button>
        ))}
      </div>

      {/* Desktop Buttons */}
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

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden"
      >
        {menuOpen ? (
          <HiX className="text-3xl text-cyan-400" />
        ) : (
          <HiMenu className="text-3xl text-cyan-400" />
        )}
      </button>

    </div>

    {/* Mobile Menu */}
    {menuOpen && (
      <div className="md:hidden border-t border-cyan-400/20 bg-slate-900/95 backdrop-blur-xl">
        <div className="px-8 py-6 flex flex-col gap-5">

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-left text-lg transition ${
                activeSection === item.id
                  ? "text-cyan-400 font-semibold"
                  : "text-slate-300 hover:text-cyan-400"
              }`}
            >
              {item.label}
            </button>
          ))}

          <div className="border-t border-slate-700 my-2"></div>

          <NavLink
            to="/login"
            onClick={() => setMobileOpen(false)}
          >
            <button className="w-full px-5 py-3 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition">
              Login
            </button>
          </NavLink>

          <NavLink
            to="/register"
            onClick={() => setMenuOpen(false)}
          >
            <button className="w-full px-5 py-3 rounded-lg bg-cyan-400 text-black font-semibold hover:scale-[1.02] transition">
              Register
            </button>
          </NavLink>

        </div>
      </div>
    )}
  </nav>
  );
}

export default Navbar;