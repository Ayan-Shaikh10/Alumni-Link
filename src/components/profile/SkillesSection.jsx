import { useState, useEffect } from "react";
import { FaTools, FaTimes } from "react-icons/fa";

function SkillsSection({ formData, handleChange }) {

  const MAX_SKILLS = 20;
  const MAX_LENGTH = 30;

  const [skillInput, setSkillInput] = useState("");
  const [skills, setSkills] = useState([]);

  useEffect(() => {

    if (formData.skills) {

      const list = formData.skills
        .split(",")
        .map(skill => skill.trim())
        .filter(skill => skill !== "");

      setSkills(list);

    }

  }, []);

  const updateParent = (updatedSkills) => {

    handleChange({

      target: {

        name: "skills",

        value: updatedSkills.join(",")

      }

    });

  };

  const addSkill = () => {

    let value = skillInput.trim();

    if (!value) return;

    if (value.length > MAX_LENGTH) {

      alert(`Each skill can contain a maximum of ${MAX_LENGTH} characters.`);

      return;

    }

    if (skills.length >= MAX_SKILLS) {

      alert(`You can add a maximum of ${MAX_SKILLS} skills.`);

      return;

    }

    const alreadyExists = skills.some(

      skill => skill.toLowerCase() === value.toLowerCase()

    );

    if (alreadyExists) {

      setSkillInput("");

      return;

    }

    const updatedSkills = [...skills, value];

    setSkills(updatedSkills);

    updateParent(updatedSkills);

    setSkillInput("");

  };

  const removeSkill = (index) => {

    const updatedSkills = skills.filter((_, i) => i !== index);

    setSkills(updatedSkills);

    updateParent(updatedSkills);

  };

  return (

    <section className="bg-slate-900 border border-cyan-400/20 rounded-2xl p-8 min-h-[360px]">

      {/* Heading */}

      <div className="flex items-center gap-3 mb-8">

        <FaTools className="text-cyan-400 text-2xl flex-shrink-0" />

        <h2 className="text-3xl font-bold text-white whitespace-nowrap">

          Skills

        </h2>

        <div className="flex-1 h-px bg-cyan-400/30"></div>

      </div>

      {/* Input */}

      <div className="flex gap-3">

        <input

          type="text"

          value={skillInput}

          placeholder="Add a skill (Press Enter)"

          onChange={(e) => setSkillInput(e.target.value)}

          onKeyDown={(e) => {

            if (e.key === "Enter") {

              e.preventDefault();

              addSkill();

            }

          }}

          className="flex-1 bg-slate-800 border border-slate-700 rounded-xl p-4 text-white outline-none focus:border-cyan-400 transition"

        />

        <button

          type="button"

          onClick={addSkill}

          className="bg-cyan-400 text-black px-5 rounded-xl font-semibold hover:bg-cyan-300 transition"

        >

          + Add Skill

        </button>

      </div>

      <div className="flex justify-between mt-3 text-sm">

        <p className="text-slate-500">

          Press Enter or click Add Skill.

        </p>

        <p className="text-slate-500">

          {skills.length}/{MAX_SKILLS}

        </p>

      </div>

      {/* Chip Area */}

      <div className="mt-6 h-[145px] overflow-y-auto rounded-xl border border-dashed border-slate-700 p-4">

        {

          skills.length === 0 ? (

            <div className="h-full flex items-center justify-center text-center">

              <p className="text-slate-500">

                No skills added yet.<br />

                Start adding your professional skills.

              </p>

            </div>

          ) : (

            <div className="flex flex-wrap gap-3">

              {

                skills.map((skill, index) => (

                  <div

                    key={index}

                    className="flex items-center gap-2 bg-cyan-400/15 border border-cyan-400/30 px-4 py-2 rounded-full transition"

                  >

                    <span className="text-cyan-300 font-medium">

                      {skill}

                    </span>

                    <button

                      type="button"

                      onClick={() => removeSkill(index)}

                      className="text-cyan-300 hover:text-red-400 transition"

                    >

                      <FaTimes size={12} />

                    </button>

                  </div>

                ))

              }

            </div>

          )

        }

      </div>

    </section>

  );

}

export default SkillsSection;