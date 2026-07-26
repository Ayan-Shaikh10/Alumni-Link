import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../../contex/AuthContext";
import { logoutUser } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SidebarProfile() {

  const { userData } = useAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {

    try {

      await logoutUser();

      toast.success("Logged out successfully.");

      navigate("/login");

    } catch (error) {

      console.error("Logout failed:", error);

      toast.error("Logout failed. Please try again.");

    }

  };

  return (

    <div className="border-t border-slate-800 p-5">

      {/* User Information */}

      <div className="flex items-center gap-4 mb-5">

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

      {/* Logout Button */}

      <button

        onClick={handleLogout}

        className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg border border-red-400/30 text-red-400 hover:bg-red-400 hover:text-black transition"

      >

        <FaSignOutAlt />

        Logout

      </button>

    </div>

  );

}

export default SidebarProfile;