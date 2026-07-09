import { FaBriefcase } from "react-icons/fa";

function ExperienceSection({

  formData,

  handleChange

}) {

  return (

    <section className="bg-slate-900 border border-cyan-400/20 rounded-2xl p-8 min-h-[360px]">

      {/* Heading */}

      <div className="flex items-center gap-3 mb-10">

        <FaBriefcase className="text-cyan-400 text-2xl flex-shrink-0" />

        <h2 className="text-3xl font-bold text-white whitespace-nowrap">

          Experience

        </h2>

        <div className="flex-1 h-px bg-cyan-400/30"></div>

      </div>

      <textarea

        name="experience"

        value={formData.experience}

        onChange={handleChange}

        placeholder="Share your work experience, internships, freelancing, research, major projects, or leadership roles..."

        className="w-full h-[180px] bg-slate-800 border border-slate-700 rounded-xl p-5 text-white outline-none focus:border-cyan-400 transition resize-none"

      />

      <p className="text-slate-500 text-sm mt-4">

        Include internships, jobs, freelance work, personal projects, or leadership experience to help other alumni understand your background.

      </p>

    </section>

  );

}

export default ExperienceSection;