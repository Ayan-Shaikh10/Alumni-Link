import {
  FaCalendarAlt,
  FaMapMarkerAlt
} from "react-icons/fa";

function EventCard({

  title,

  date,

  location,

  onRegister

}) {

  return (

    <div
      className="
        bg-slate-900
        border
        border-slate-800
        rounded-2xl
        p-6
        hover:border-cyan-400/40
        transition-all
        duration-300
      "
    >

      <h3 className="text-xl font-bold text-white">

        {title}

      </h3>

      <div className="flex items-center gap-2 text-slate-400 mt-4">

        <FaCalendarAlt className="text-cyan-400" />

        <span>{date}</span>

      </div>

      <div className="flex items-center gap-2 text-slate-400 mt-3">

        <FaMapMarkerAlt className="text-cyan-400" />

        <span>{location}</span>

      </div>

      <button

        onClick={onRegister}

        className="
          mt-6
          px-6
          py-3
          rounded-xl
          bg-cyan-500
          text-slate-950
          font-semibold
          hover:bg-cyan-400
          transition-all
          duration-300
        "

      >

        Register

      </button>

    </div>

  );

}

export default EventCard;