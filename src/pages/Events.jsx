import { useEffect, useState } from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt
} from "react-icons/fa";

import { getEvents } from "../services/eventService";

function Event() {

  const [events, setEvents] = useState([]);

  const [loading, setLoading] = useState(true);


  useEffect(() => {

    async function loadEvents() {

      try {

        const data = await getEvents();

        setEvents(data);

      } catch (error) {

        console.error("Failed to load events:", error);

      } finally {

        setLoading(false);

      }

    }

    loadEvents();

  }, []);


  return (

    <div className="min-h-screen bg-slate-950 py-20 px-6">

      {/* Page Header */}

      <div className="max-w-7xl mx-auto text-center mb-16">

        <h1 className="text-5xl font-bold text-white">

          Upcoming Events

        </h1>

        <p className="text-slate-400 mt-4 text-lg">

          Stay connected with your alumni community through exciting events and experiences.

        </p>

      </div>


      {/* Loading */}

      {loading && (

        <p className="text-center text-slate-400 text-lg">

          Loading events...

        </p>

      )}


      {/* No Events */}

      {!loading && events.length === 0 && (

        <div className="text-center py-20">

          <FaCalendarAlt className="text-cyan-400 text-6xl mx-auto mb-6" />

          <h2 className="text-3xl font-semibold text-white">

            No Events Available

          </h2>

          <p className="text-slate-400 mt-3">

            There are currently no events available.

          </p>

        </div>

      )}


      {/* Events Grid */}

      {!loading && events.length > 0 && (

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {events.map((event) => (

            <div

              key={event.id}

              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-400/60 hover:-translate-y-1 transition-all duration-300"

            >

              {/* Event Image */}

              {event.image ? (

                <img

                  src={event.image}

                  alt={event.title}

                  className="w-full h-52 object-cover"

                />

              ) : (

                <div className="w-full h-52 bg-slate-800 flex items-center justify-center">

                  <FaCalendarAlt className="text-cyan-400 text-6xl" />

                </div>

              )}


              {/* Event Content */}

              <div className="p-6">

                <h2 className="text-2xl font-bold text-white mb-4">

                  {event.title}

                </h2>


                <div className="space-y-3 mb-5">

                  <p className="text-cyan-400 flex items-center gap-3">

                    <FaCalendarAlt />

                    {event.date}

                  </p>


                  <p className="text-slate-400 flex items-center gap-3">

                    <FaMapMarkerAlt />

                    {event.location}

                  </p>

                </div>


                <p className="text-slate-400 leading-relaxed line-clamp-4">

                  {event.description}

                </p>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}


export default Event;