function EventListItem({ event, onDelete, onEdit }) {
  return (
    <div
      className="
        group
        bg-slate-900
        border
        border-slate-800
        rounded-2xl
        p-6
        hover:border-cyan-400/40
        hover:shadow-[0_0_25px_rgba(34,211,238,0.08)]
        transition-all
        duration-300
      "
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        {/* Event Information */}

        <div className="min-w-0">

          <h3 className="text-xl font-bold text-white">
            {event.title}
          </h3>

          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-3 text-sm text-slate-400">

            <span>
              📅 {event.date}
            </span>

            <span>
              📍 {event.location}
            </span>

          </div>

          {event.description && (
            <p className="text-slate-500 mt-3 line-clamp-2">
              {event.description}
            </p>
          )}

        </div>


        {/* Actions */}

        <div className="flex gap-3 shrink-0">

          <button
            onClick={() => onEdit(event)}
            className="
              px-5
              py-2.5
              rounded-xl
              bg-cyan-500/10
              border
              border-cyan-400/30
              text-cyan-300
              font-semibold
              hover:bg-cyan-500
              hover:text-slate-950
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
              py-2.5
              rounded-xl
              bg-red-500/10
              border
              border-red-500/30
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