import { FaBell, FaUserCircle } from "react-icons/fa";
import { useAuth } from "../../contex/AuthContext";
import { useNavigate } from "react-router-dom";

function Topbar() {

  const Navigate = useNavigate();

  const { userData } = useAuth();

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) {

    greeting = "Good Morning";

  } else if (hour < 17) {

    greeting = "Good Afternoon";

  }

  return (

    <header className="

      bg-slate-950/70

      backdrop-blur-xl

      border-b

      border-white/10

      px-10

      py-7

    ">

      <div className="flex justify-between items-center">

        {/* Left */}

        <div>

          <h1 className="text-4xl font-bold text-white">

            {greeting},

            <span className="text-cyan-400">

              {" "}{userData?.fullName || "User"}

            </span>

          </h1>

          <p className="text-slate-400 mt-2 text-lg">

            Welcome back! Ready to build your alumni network today?

          </p>

        </div>

        {/* Right */}

        <div className="flex items-center gap-6">

          <button

            onClick={() => Navigate("/dashboard/message")}

            className="relative p-3 rounded-xl bg-slate-900/70 hover:bg-slate-800/80 transition"

          >

            <FaBell className="text-cyan-400 text-xl" />

            <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-red-500"></span>

          </button>

          <div className="flex items-center gap-3 bg-slate-900/70 backdrop-blur-md rounded-xl px-4 py-3">

            <FaUserCircle className="text-cyan-400 text-4xl" />

            <button

              onClick={() => Navigate("/profile")}

              className="text-left"

            >

              <div>

                <h3 className="text-white font-semibold">

                  {userData?.fullName || "User"}

                </h3>

                <p className="text-slate-400 text-sm">

                  Alumni Member

                </p>

              </div>

            </button>

          </div>

        </div>

      </div>

    </header>

  );

}

export default Topbar;