import { useState } from "react";
import CreateEventForm from "../../components/admin/CreateEventForm";
import { createEvent } from "../../services/eventService";

function AdminDashboard() {

  const [loading, setLoading] = useState(false);

  async function handleCreateEvent(eventData) {

    try {

      setLoading(true);

      await createEvent(eventData);

      alert("🎉 Event Published Successfully!");

    } catch (error) {

      console.error(error);

      alert("Something went wrong.");

    } finally {

      setLoading(false);

    }

  }

  return (

    <div className="min-h-screen bg-slate-950">

      <div className="max-w-5xl mx-auto px-8 py-10">

        <CreateEventForm
          onSubmit={handleCreateEvent}
          loading={loading}
        />

      </div>

    </div>

  );

}

export default AdminDashboard;