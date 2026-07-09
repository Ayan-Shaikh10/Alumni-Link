import { FaGraduationCap, FaUniversity } from "react-icons/fa";
import InputField from "../common/InputField";

function EducationSection({

  formData,

  handleChange,

  errors,

  years

}) {

  return (

    <section className="bg-slate-900 border border-cyan-400/20 rounded-2xl p-8 min-h-[360px]">

      {/* Heading */}

      <div className="flex items-center gap-3 mb-10">

        <FaGraduationCap className="text-cyan-400 text-2xl flex-shrink-0" />

        <h2 className="text-3xl font-bold text-white whitespace-nowrap">

          Educational Details

        </h2>

        <div className="flex-1 h-px bg-cyan-400/30"></div>

      </div>

      <div className="space-y-6">

        <InputField
          label="Degree"
          icon={<FaGraduationCap />}
          name="degree"
          value={formData.degree}
          onChange={handleChange}
          placeholder="B.Sc IT"
          error={errors.degree}
        />

        <InputField
          label="Department"
          icon={<FaUniversity />}
          name="department"
          value={formData.department}
          onChange={handleChange}
          placeholder="Information Technology"
          error={errors.department}
        />

        {/* Graduation Year */}

        <div>

          <label className="block text-slate-300 mb-2">

            Graduation Year

          </label>

          <div className="flex items-center bg-slate-800 border border-slate-700 rounded-xl focus-within:border-cyan-400 transition">

            <FaGraduationCap className="mx-4 text-slate-400" />

            <select

              name="graduationYear"

              value={formData.graduationYear}

              onChange={handleChange}

              className="w-full bg-transparent outline-none py-4 text-white"

            >

              <option value="" className="bg-slate-900">

                Select Graduation Year

              </option>

              {

                years.map((year) => (

                  <option

                    key={year}

                    value={year}

                    className="bg-slate-900"

                  >

                    {year}

                  </option>

                ))

              }

            </select>

          </div>

          {

            errors.graduationYear && (

              <p className="text-red-400 text-sm mt-2">

                {errors.graduationYear}

              </p>

            )

          }

        </div>

      </div>

    </section>

  );

}

export default EducationSection;