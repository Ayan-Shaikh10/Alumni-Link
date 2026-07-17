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
      <div className="max-w-5xl mx-auto px-8 py-10">
        <CreateEventForm
          onSubmit={handleSubmit}
          loading={loading}
          editing={!!selectedEvent}
          initialData={selectedEvent}
        />

        <ManageEvents onEdit={setSelectedEvent} />
      </div>
    </div>
  );
}

export default AdminDashboard;