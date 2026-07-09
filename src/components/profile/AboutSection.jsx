import { FaRegAddressCard } from "react-icons/fa";

function AboutSection({

  formData,

  handleChange

}) {

  return (

    <section className="bg-slate-900 border border-cyan-400/20 rounded-2xl p-8 min-h-[600px]">

      {/* Heading */}

      <div className="flex items-center gap-3 mb-10">

        <FaRegAddressCard className="text-cyan-400 text-2xl flex-shrink-0" />

        <h2 className="text-3xl font-bold text-white whitespace-nowrap">

          About Me

        </h2>

        <div className="flex-1 h-px bg-cyan-400/30"></div>

      </div>

      <textarea

        name="about"

        value={formData.about}

        onChange={handleChange}

        placeholder="Tell other alumni about yourself, your interests, achievements, career goals, and anything you'd like fellow alumni to know..."

        className="w-full h-[420px] bg-slate-800 border border-slate-700 rounded-xl p-5 text-white outline-none focus:border-cyan-400 transition resize-none"

      />

      <p className="text-slate-500 text-sm mt-4">

        Write a short introduction about yourself. This will be visible to other alumni.

      </p>

    </section>

  );

}

export default AboutSection;