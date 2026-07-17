import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers
} from "react-icons/fa";

function EventListItem({ 
    event,
    onDelete,
    onEdit
 }) {

  const registeredCount =
    event.registeredUsers?.length || 0;

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <div className="flex justify-between items-start">

        <div>

          <h3 className="text-xl font-bold text-white">

            {event.title}

          </h3>

          <div className="flex items-center gap-2 text-slate-400 mt-3">

            <FaCalendarAlt className="text-cyan-400"/>

            <span>
              {new Date(event.date).toLocaleDateString(
                "en-GB",
                {
                  day: "numeric",
                  month: "short",
                  year: "numeric"
                }
              )}
            </span>

          </div>

          <div className="flex items-center gap-2 text-slate-400 mt-2">

            <FaMapMarkerAlt className="text-cyan-400"/>

            <span>{event.location}</span>

          </div>

          <div className="flex items-center gap-2 text-slate-400 mt-2">

            <FaUsers className="text-cyan-400"/>

            <span>

              {registeredCount} Registered

            </span>

          </div>

        </div>

     <div className="flex justify-end gap-3 mt-6">

  <button

    onClick={() => onEdit(event)}

    className="
      px-5
      py-2
      rounded-xl
      bg-cyan-500/20
      border
      border-cyan-400/40
      text-cyan-300
      font-semibold
      hover:bg-cyan-500
      hover:text-white
      transition-all
      duration-300
    "

  >

    Edit

  </button>

  <button

    onClick={() => onDelete(event)}

    className="
      px-5
      py-2
      rounded-xl
      bg-red-500/20
      border
      border-red-500/40
      text-red-400
      font-semibold
      hover:bg-red-500
      hover:text-white
      transition-all
      duration-300
    "

  >

    Delete

  </button>

</div>

      </div>

    </div>

  );

}

export default EventListItem;