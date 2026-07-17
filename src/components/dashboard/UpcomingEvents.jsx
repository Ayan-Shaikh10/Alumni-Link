import { useEffect, useState } from "react";
import EventCard from "./EventCard";
import { getEvents } from "../../services/eventService";

function UpcomingEvents() {

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

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

    loadEvents();

  }, []);

  return (

    <section className="max-w-7xl mx-auto px-8 mt-12">

      {/* Heading */}

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-3xl font-bold text-white">

            Upcoming Events

          </h2>

          <p className="text-slate-400 mt-1">

            Stay connected with upcoming alumni activities.

          </p>

        </div>

      </div>

      {/* Loading */}

      {loading && (

        <div className="text-slate-400 py-10">

          Loading events...

        </div>

      )}

      {/* Empty */}

      {!loading && events.length === 0 && (

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">

          <h3 className="text-white text-xl font-semibold">

            No Upcoming Events

          </h3>

          <p className="text-slate-400 mt-2">

            New alumni events will appear here.

          </p>

        </div>

      )}

      {/* Event Cards */}

      {!loading && events.length > 0 && (

        <div className="grid lg:grid-cols-3 gap-6">

          {events.map((event) => (

            <EventCard

              key={event.id}

              title={event.title}

              date={event.date}

              location={event.location}

              onRegister={() =>
                alert(`Register for ${event.title}`)
              }

            />

          ))}

        </div>

      )}

    </section>

  );

}

export default UpcomingEvents;