import { useEffect, useState } from "react";
import { getEvents, deleteEvent } from "../../services/eventService";
import { toast } from "react-toastify";
import EventListItem from "./EventListItem";

function ManageEvent({ onEdit }) {

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadEvents() {

    try {

      const data = await getEvents();

      setEvents(data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  }

  useEffect(() => {

    loadEvents();

  }, []);

  async function handleDelete(event) {

    const confirmDelete = window.confirm(
      `Delete "${event.title}"?`
    );

    if (!confirmDelete) return;

    try {

      await deleteEvent(event.id);

      toast.success("Event Deleted Successfully!");

      await loadEvents();

    } catch (error) {

      console.error(error);

      toast.error("Failed To Delete Event.");

    }

  }

  return (

    <section className="mt-12">

      <h2 className="text-3xl font-bold text-white mb-8">

        Manage Events

      </h2>

      {loading && (

        <p className="text-slate-400">

          Loading...

        </p>

      )}

      {!loading && events.length === 0 && (

        <p className="text-slate-400">

          No Events Found

        </p>

      )}

      <div className="space-y-5">

        {events.map((event) => (

          <EventListItem

            key={event.id}

            event={event}

            onDelete={handleDelete}
            onEdit={onEdit}

          />

        ))}

      </div>

    </section>

  );

}

export default ManageEvent;