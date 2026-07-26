import { useEffect, useState } from "react";

import {
  FaSearch,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle
} from "react-icons/fa";

import DashboardLayout from "../components/layout/DashboardLayout";

import {
  getEvents,
  getUserRegistrations,
  registerForEvent,
  withdrawFromEvent
} from "../services/eventService";

import { useAuth } from "../contex/AuthContext";

import { toast } from "react-toastify";


function EventsDashboard() {

  const { currentUser } = useAuth();


  const [events, setEvents] = useState([]);

  const [enrolledEvents, setEnrolledEvents] = useState([]);

  const [loading, setLoading] = useState(true);

  const [actionLoading, setActionLoading] = useState(null);

  const [search, setSearch] = useState("");


  useEffect(() => {

    async function loadData() {

      try {

        const eventsData = await getEvents();

        setEvents(eventsData);


        if (currentUser) {

          const registrations = await getUserRegistrations(
            currentUser.uid
          );

          setEnrolledEvents(registrations);

        }

      } catch (error) {

        console.error("Failed to load events:", error);

        toast.error("Failed to load events.");

      } finally {

        setLoading(false);

      }

    }

    loadData();

  }, [currentUser]);


  const isEnrolled = (eventId) => {

    return enrolledEvents.includes(eventId);

  };


  async function handleRegister(eventId) {

    if (!currentUser) return;


    try {

      setActionLoading(eventId);


      // IMPORTANT:
      // eventId first, uid second

      await registerForEvent(

        eventId,

        currentUser.uid

      );


      setEnrolledEvents((previous) => [

        ...previous,

        eventId

      ]);


      toast.success("Registered for event successfully!");

    } catch (error) {

      console.error("Registration failed:", error);

      toast.error("Failed to register for event.");

    } finally {

      setActionLoading(null);

    }

  }


  async function handleWithdraw(eventId) {

    if (!currentUser) return;


    try {

      setActionLoading(eventId);


      await withdrawFromEvent(

        eventId,

        currentUser.uid

      );


      setEnrolledEvents((previous) =>

        previous.filter((id) => id !== eventId)

      );


      toast.success("Withdrawn from event.");

    } catch (error) {

      console.error("Withdrawal failed:", error);

      toast.error("Failed to withdraw from event.");

    } finally {

      setActionLoading(null);

    }

  }


  const filteredEvents = events.filter((event) => {

    const searchText = search.toLowerCase();


    return (

      event.title?.toLowerCase().includes(searchText) ||

      event.location?.toLowerCase().includes(searchText) ||

      event.description?.toLowerCase().includes(searchText)

    );

  });


  return (

    <DashboardLayout>

      <div className="min-h-screen bg-slate-950">


        {/* Page Header */}

        <div className="mb-10">

          <h1 className="text-4xl font-bold text-white">

            Events

          </h1>

          <p className="text-slate-400 mt-2">

            Discover upcoming events and stay connected with your alumni community.

          </p>

        </div>


        {/* Search */}

        <div className="relative mb-10">

          <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />


          <input

            type="text"

            placeholder="Search events by title, location, or description..."

            value={search}

            onChange={(e) => setSearch(e.target.value)}

            className="w-full bg-slate-900 border border-slate-800 rounded-2xl py-4 pl-14 pr-5 text-white outline-none focus:border-cyan-400 transition"

          />

        </div>


        {/* Loading */}

        {loading && (

          <p className="text-slate-400">

            Loading events...

          </p>

        )}


        {/* No Events */}

        {!loading && filteredEvents.length === 0 && (

          <div className="text-center py-20">

            <FaCalendarAlt className="text-cyan-400 text-5xl mx-auto mb-5" />

            <h2 className="text-2xl font-semibold text-white">

              No Events Found

            </h2>

            <p className="text-slate-400 mt-2">

              Try searching for another event.

            </p>

          </div>

        )}


        {/* Events Grid */}

        {!loading && filteredEvents.length > 0 && (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {filteredEvents.map((event) => {

              const enrolled = isEnrolled(event.id);


              return (

                <div

                  key={event.id}

                  className={`

                    relative

                    bg-slate-900

                    rounded-2xl

                    overflow-hidden

                    transition-all

                    duration-300

                    hover:-translate-y-1

                    ${

                      enrolled

                        ? "border border-emerald-400 shadow-[0_0_35px_rgba(52,900,153,0.25)]"

                        : "border border-slate-800 hover:border-cyan-400/50"

                    }

                  `}

                >


                  {/* Enrolled Badge */}

                  {enrolled && (

                    <div className="absolute top-3 left-3 z-10 flex items-center gap-2 bg-emerald-400 text-slate-950 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">

                      <FaCheckCircle />

                      ENROLLED

                    </div>

                  )}


                  {/* Event Image */}

                  {event.image ? (

                    <img

                      src={event.image}

                      alt={event.title}

                      className="w-full h-40 object-cover"

                    />

                  ) : (

                    <div className="w-full h-40 bg-slate-800 flex items-center justify-center">

                      <FaCalendarAlt className="text-cyan-400 text-5xl" />

                    </div>

                  )}


                  {/* Event Content */}

                  <div className="p-5">


                    <h2 className="text-xl font-bold text-white mb-4">

                      {event.title}

                    </h2>


                    <div className="space-y-2 mb-4">


                      <p className="text-cyan-400 text-sm flex items-center gap-2">

                        <FaCalendarAlt />

                        {event.date}

                      </p>


                      <p className="text-slate-400 text-sm flex items-center gap-2">

                        <FaMapMarkerAlt />

                        {event.location}

                      </p>


                    </div>


                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-6">

                      {event.description}

                    </p>


                    {/* Register / Withdraw */}

                    {enrolled ? (

                      <button

                        onClick={() => handleWithdraw(event.id)}

                        disabled={actionLoading === event.id}

                        className="w-full border border-emerald-400/70 text-emerald-400 py-3 rounded-xl font-semibold hover:bg-emerald-400 hover:text-slate-950 transition disabled:opacity-50"

                      >

                        {actionLoading === event.id

                          ? "Processing..."

                          : "Withdraw"

                        }

                      </button>

                    ) : (

                      <button

                        onClick={() => handleRegister(event.id)}

                        disabled={actionLoading === event.id}

                        className="w-full bg-cyan-400 text-slate-950 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition disabled:opacity-50"

                      >

                        {actionLoading === event.id

                          ? "Registering..."

                          : "Register"

                        }

                      </button>

                    )}


                  </div>

                </div>

              );

            })}

          </div>

        )}

      </div>

    </DashboardLayout>

  );

}


export default EventsDashboard;