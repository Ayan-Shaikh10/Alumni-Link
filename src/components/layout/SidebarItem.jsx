import { NavLink } from "react-router-dom";

function SidebarItem({

  to,

  icon,

  label

}) {

  return (

    <NavLink

      to={to}

      className={({ isActive }) =>

        `flex items-center gap-4 px-5 py-3 rounded-xl transition-all duration-200 font-medium

        ${

          isActive

            ? "bg-cyan-400 text-black shadow-lg"

            : "text-slate-300 hover:bg-slate-800 hover:text-cyan-400"

        }`

      }

    >

      <span className="text-xl">

        {icon}

      </span>

      <span>

        {label}

      </span>

    </NavLink>

  );

}

export default SidebarItem;