import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "../../contex/AuthContext";

function ProfileHeader() {

  const { userData } = useAuth();

  return (

    <section className="bg-slate-900 border border-cyan-400/20 rounded-2xl p-8">

      <div className="flex flex-col md:flex-row items-center gap-8">

        {/* Profile Picture */}

        <FaUserCircle className="text-cyan-400 text-9xl" />

        {/* User Details */}

        <div className="flex-1 text-center md:text-left">

          <h1 className="text-4xl font-bold text-white">

            {userData?.fullName || "Loading..."}

          </h1>

          <p className="text-cyan-400 text-xl mt-2">

            {userData?.degree || "Degree"}

          </p>

          <p className="text-slate-400 mt-1">

            {userData?.profession || "Profession"}

          </p>

        </div>

        {/* Profile Status */}

        <div className="bg-slate-800 rounded-xl px-6 py-4 text-center">

          <p className="text-slate-400 text-sm">

            Profile Status

          </p>

          <h2 className="text-green-400 text-2xl font-bold">

            Active

          </h2>

        </div>

      </div>

    </section>

  );

}

export default ProfileHeader;