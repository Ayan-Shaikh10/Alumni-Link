import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { useAuth } from "../../contex/AuthContext";
import { calculateProfileProgress } from "../../services/userService";
import { useNavigate } from "react-router-dom";

function ProfileProgress() {
  const { userData } = useAuth();
  const navigate = useNavigate();

  const {
    progress,
    completed,
    remaining
  } = calculateProfileProgress(userData);

  return (
    <section className="max-w-7xl mx-auto px-8 mt-10">

      <div className="bg-slate-900 border border-cyan-400/20 rounded-2xl p-8">

        {/* Header */}

        <div className="flex justify-between items-center">

          <h2 className="text-3xl font-bold text-white">
            🎯 Profile Completion
          </h2>

          <span className="text-cyan-400 text-2xl font-bold">
            {progress}%
          </span>

        </div>

        {/* Progress Bar */}

        <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden mt-6">

          <div
            className="h-full bg-cyan-400 rounded-full transition-all duration-700"
            style={{ width: `${progress}%` }}
          />

        </div>

        {/* Description */}

        <p className="text-slate-400 mt-4">

          {progress === 100
            ? "🏆 Excellent! Your profile is fully completed and ready for networking."
            : `🚀 Great Start! Only ${remaining.length} more ${
                remaining.length === 1 ? "section" : "sections"
              } left to complete your profile.`}

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

        {/* Button */}

        {progress < 100 && (

          <button
            onClick={() => navigate("/profile")}
            className="mt-8 bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition duration-300"
          >
            Complete Profile
          </button>

        )}

      </div>

    </section>
  );
}

export default ProfileProgress;