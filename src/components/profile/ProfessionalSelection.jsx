import {
  FaBriefcase,
  FaBuilding,
  FaMapMarkerAlt
} from "react-icons/fa";

import InputField from "../common/InputField";

function ProfessionalSection({

  formData,

  handleChange,

  errors

}) {

  return (

    <section className="bg-slate-900 border border-cyan-400/20 rounded-2xl p-8 min-h-[360px]">

      {/* Heading */}

      <div className="flex items-center gap-3 mb-10">

        <FaBriefcase className="text-cyan-400 text-2xl flex-shrink-0" />

        <h2 className="text-3xl font-bold text-white whitespace-nowrap">

          Professional Details

        </h2>

        <div className="flex-1 h-px bg-cyan-400/30"></div>

      </div>

      <div className="space-y-6">

        <InputField

          label="Profession"

          icon={<FaBriefcase />}

          name="profession"

          value={formData.profession}

          onChange={handleChange}

          placeholder="Software Engineer"

          error={errors.profession}

        />

        <InputField

          label="Company"

          icon={<FaBuilding />}

          name="company"

          value={formData.company}

          onChange={handleChange}

          placeholder="Google"

          error={errors.company}

        />

        <InputField

          label="Work Location"

          icon={<FaMapMarkerAlt />}

          name="city"

          value={formData.city}

          onChange={handleChange}

          placeholder="Mumbai"

          error={errors.city}

        />

      </div>

    </section>

  );

}

export default ProfessionalSection;