import {
  FaHome,
  FaUser,
  FaUsers,
  FaCalendarAlt,
  FaNewspaper,
  FaEnvelope,
  FaCog
} from "react-icons/fa";

import Logo from "./Logo";
import SidebarItem from "./SidebarItem";
import SidebarProfile from "./SidebarProfile";

function Sidebar() {

  return (

    <aside className="w-85 h-screen bg-slate-900 border-r border-slate-800 flex flex-col">

      {/* Logo */}

      <Logo />

      {/* Navigation */}

      <nav className="flex-1 py-8 px-10 space-y-3">

        <SidebarItem

          to="/dashboard"

          icon={<FaHome />}

          label="Dashboard"

        />

        <SidebarItem

          to="/profile"

          icon={<FaUser />}

          label="Profile"

        />

        <SidebarItem

          to="/directory"

          icon={<FaUsers />}

          label="Find Alumni"

        />

        <SidebarItem

          to="/events"

          icon={<FaCalendarAlt />}

          label="Events"

        />

        <SidebarItem

          to="/feed"

          icon={<FaNewspaper />}

          label="Community Feed"

        />

        <SidebarItem

          to="/messages"

          icon={<FaEnvelope />}

          label="Messages"

        />

        <SidebarItem

          to="/settings"

          icon={<FaCog />}

          label="Settings"

        />

      </nav>

      {/* Logged-in User */}

      <SidebarProfile />

    </aside>

  );

}

export default Sidebar;