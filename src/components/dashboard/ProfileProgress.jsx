import { FaCheckCircle, FaRegCircle } from "react-icons/fa";

function ProfileProgress() {

  const progress = 75;

  const completed = [

    "Personal Details",
    "Educational Details",
    "Professional Details"

  ];

  const remaining = [

    "About Me",
    "Skills",
    "Experience"

  ];

  return (

    <section className="max-w-7xl mx-auto px-8 mt-10">

      <div className="bg-slate-900 border border-cyan-400/20 rounded-2xl p-8">

        <div className="flex justify-between items-center">

          <h2 className="text-3xl font-bold text-white">

            Profile Completion

          </h2>

          <span className="text-cyan-400 font-bold text-2xl">

            {progress}%

          </span>

        </div>

        {/* Progress Bar */}

        <div className="w-full h-4 bg-slate-800 rounded-full mt-6 overflow-hidden">

          <div
            className="h-full bg-cyan-400 rounded-full transition-all duration-700"
            style={{ width: `${progress}%` }}
          ></div>

        </div>

        <p className="text-slate-400 mt-4">

          Complete your profile to help alumni and students know you better.

        </p>

        {/* Checklist */}

        <div className="grid md:grid-cols-2 gap-4 mt-8">

          {completed.map((item) => (

            <div
              key={item}
              className="flex items-center gap-3 text-green-400"
            >

              <FaCheckCircle />

              <span>{item}</span>

            </div>

          ))}

          {remaining.map((item) => (

            <div
              key={item}
              className="flex items-center gap-3 text-slate-400"
            >

              <FaRegCircle />

              <span>{item}</span>

            </div>

          ))}

        </div>

        <button className="mt-8 bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition">

          Complete Profile

        </button>

      </div>

    </section>

  );

}

export default ProfileProgress;