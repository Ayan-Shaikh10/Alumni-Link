import {
  FaHome,
  FaUser,
  FaUsers,
  FaCalendarAlt,
  FaNewspaper,
  FaEnvelope,
  FaCog,
  FaPeopleArrows,
  FaPeopleCarry,
  FaSchool,
  FaSearch
} from "react-icons/fa";

import Logo from "./Logo";
import SidebarItem from "./SidebarItem";
import SidebarProfile from "./SidebarProfile";

import { FaPeopleGroup, FaSchoolFlag } from "react-icons/fa6";

import { useAuth } from "../../contex/AuthContext";


function Sidebar() {

  const {
    currentUser,
    userData
  } = useAuth();


  return (

    <aside className="w-85 h-screen bg-slate-900 border-r border-slate-800 flex flex-col">


      {/* ============================================================ */}

      {/* LOGO */}

      {/* ============================================================ */}


      <Logo />


      {/* ============================================================ */}

      {/* NAVIGATION */}

      {/* ============================================================ */}


      <nav className="flex-1 py-8 px-10 space-y-3">


        {/* DASHBOARD */}

        <SidebarItem

          to="/dashboard"

          icon={<FaHome />}

          label="Dashboard"

          end

        />


        {/* PROFILE */}

        <SidebarItem

          to="/profile"

          icon={<FaUser />}

          label="Profile"

        />


        {/* FIND ALUMNI */}

        <SidebarItem

          to="/dashboard/alumni"

          icon={<FaUsers />}

          label="Find Alumni"

        />


        {/* FIND STUDENT - ALUMNI ONLY */}

        {userData?.role === "alumni" && (

          <SidebarItem

            to="/dashboard/student"

            icon={<FaSearch />}

            label="Find Student"

          />

        )}


        {/* EVENTS */}

        <SidebarItem

          to="/dashboard/events"

          icon={<FaCalendarAlt />}

          label="Events"

        />


        {/* COMMUNITY FEED */}

        <SidebarItem

          to="/dashboard/feed"

          icon={<FaNewspaper />}

          label="Community Feed"

        />


        {/* MESSAGES */}

        <SidebarItem

          to="/dashboard/message"

          icon={<FaEnvelope />}

          label="Messages"

        />


        {/* SETTINGS */}

        <SidebarItem

          to="/dashboard/settings"

          icon={<FaCog />}

          label="Settings"

        />


      </nav>


      {/* ============================================================ */}

      {/* LOGGED-IN USER */}

      {/* ============================================================ */}


      <SidebarProfile />


    </aside>

  );

}


export default Sidebar;