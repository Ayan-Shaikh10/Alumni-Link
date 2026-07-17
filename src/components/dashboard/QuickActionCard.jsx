import { Link } from "react-router-dom";

function QuickActionCard({

  title,

  icon,

  to,

  iconBg = "bg-cyan-500/20",

  iconColor = "text-cyan-400"

}) {

  return (

    <Link
      to={to}
      className="
        group
        bg-slate-900
        border
        border-slate-800
        rounded-2xl
        p-6
        flex
        flex-col
        items-center
        justify-center
        gap-4
        hover:border-cyan-400/40
        hover:-translate-y-1
        transition-all
        duration-300
      "
    >

      <div
        className={`
          w-16
          h-16
          rounded-2xl
          flex
          items-center
          justify-center
          ${iconBg}
          group-hover:scale-110
          transition-all
          duration-300
        `}
      >

        <div className={`text-3xl ${iconColor}`}>
          {icon}
        </div>

      </div>

      <h3 className="text-white font-semibold text-lg text-center">
        {title}
      </h3>

    </Link>

  );

}

export default QuickActionCard;