import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram
} from "react-icons/fa";

function DashboardQuote() {
  return (
    <section className="max-w-7xl mx-auto px-8 mt-10 pb-8">

      <div className="bg-slate-900/80 border border-cyan-400/10 rounded-2xl px-8 py-6 flex items-center justify-between gap-8">

        <div className="flex items-center gap-5">

          <div className="text-cyan-400 text-5xl font-serif leading-none">
            “
          </div>

          <div>

            <p className="text-slate-300 text-lg">
              Alone we can do so little; together we can do so much.
            </p>

            <p className="text-slate-500 text-sm mt-3">
              – Helen Keller
            </p>

          </div>

        </div>

        <div className="h-16 w-px bg-slate-800"></div>

        <div className="flex flex-col items-start gap-3">

          <h3 className="text-slate-300 font-medium">
            Stay Connected
          </h3>

          <div className="flex items-center gap-3">

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 transition"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 transition"
            >
              <FaInstagram />
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default DashboardQuote;