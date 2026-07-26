import { useState } from "react";
import { toast } from "react-toastify";

import CreateEventForm from "../../components/admin/CreateEventForm";
import ManageEvents from "../../components/admin/ManageEvent";

import {
  createEvent,
  updateEvent,
} from "../../services/eventService";

function AdminDashboard() {
  const [loading, setLoading] = useState(false);

  const [selectedEvent, setSelectedEvent] = useState(null);

  async function handleSubmit(eventData) {
    try {
      setLoading(true);

      if (selectedEvent) {
        await updateEvent(selectedEvent.id, eventData);

        toast.success("🎉 Event Updated Successfully!");

        setSelectedEvent(null);
      } else {
        await createEvent(eventData);

        toast.success("🎉 Event Published Successfully!");
      }
    } catch (error) {
      console.error(error);

      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950">

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10">

        {/* PAGE HEADER */}

        <div className="mb-10">

          <p className="text-cyan-400 font-semibold tracking-wider uppercase text-sm">
            Administration
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Event Management
          </h1>

          <p className="text-slate-400 mt-3 text-lg">
            Create, manage and organize alumni community events.
          </p>

        </div>


        {/* MAIN ADMIN LAYOUT */}

        <div className="grid grid-cols-1 lg:grid-cols-[420px_minmax(0,1fr)] gap-8 items-start">


          {/* LEFT SIDE — CREATE / EDIT FORM */}

          <div className="lg:sticky lg:top-8">

            <CreateEventForm
              onSubmit={handleSubmit}
              loading={loading}
              editing={!!selectedEvent}
              initialData={selectedEvent}
              onCancelEdit={() => setSelectedEvent(null)}
            />

          </div>


          {/* RIGHT SIDE — EVENT LIST */}

          <div className="min-w-0 mt-[-50px]">

            <ManageEvents
              onEdit={setSelectedEvent}
            />

          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;