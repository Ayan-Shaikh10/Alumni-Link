import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "../../contex/AuthContext";

function SidebarProfile() {

  const { userData } = useAuth();

  return (

    <div className="border-t border-slate-800 p-5">

      <div className="flex items-center gap-4">

        <FaUserCircle className="text-cyan-400 text-5xl" />

        <div className="overflow-hidden">

          <h3 className="text-white font-semibold truncate">

            {userData?.fullName || "Loading..."}

          </h3>

          <p className="text-slate-400 text-sm truncate">

            {userData?.email || ""}

          </p>

        </div>

      </div>

    </div>

  );

}

export default SidebarProfile;