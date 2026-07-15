import { FaGraduationCap } from "react-icons/fa";

function Logo() {

  return (

    <div className="flex items-center gap-3 px-6 py-8 border-b border-slate-800">

      <div className="w-12 h-12 rounded-xl bg-cyan-400 flex items-center justify-center shadow-lg">

        <FaGraduationCap className="text-black text-2xl" />

      </div>

      <div>

        <h1 className="text-white text-xl font-bold">

          AlumniLink

        </h1>

        <p className="text-slate-400 text-sm">

          Alumni Network

        </p>

      </div>

    </div>

  );

}

export default Logo;