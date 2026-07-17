import {
  FaCalendarAlt,
  FaMapMarkerAlt
} from "react-icons/fa";

function EventCard({

  event,

  onRegister,

  registered = false

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

        {event.title}

      </h3>

      <div className="flex items-center gap-2 text-slate-400 mt-4">

        <FaCalendarAlt className="text-cyan-400" />

        <span>{new Date(event.date + "T00:00:00").toLocaleDateString("en-GB",
        {
          day:"numeric",
          month:"short",
          year:"numeric"
        }
        )}</span>

      </div>

      <div className="flex items-center gap-2 text-slate-400 mt-3">

        <FaMapMarkerAlt className="text-cyan-400" />

        <span>{event.location}</span>

      </div>

      <button

        onClick={() => onRegister(event)}

        disabled={registered}

        className={`
          mt-6
          px-6
          py-3
          rounded-xl
          font-semibold
          transition-all
          duration-300
          ${
            registered
              ? "bg-green-500 text-white cursor-default"
              : "bg-cyan-500 text-slate-950 hover:bg-cyan-400"
          }
        `}

      >

        {registered ? "✓ Registered" : "Register"}

      </button>

    </div>

  );

}

export default EventCard;