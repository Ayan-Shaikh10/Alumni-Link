import { useState } from "react";

function CreateEventForm({ onSubmit, loading }) {

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    image: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit(formData);

    setFormData({
      title: "",
      date: "",
      location: "",
      description: "",
      image: ""
    });
  }

  return (

    <form
      onSubmit={handleSubmit}
      className="bg-slate-900 border border-cyan-400/20 rounded-2xl p-8"
    >

      <h2 className="text-3xl font-bold text-white mb-8">

        Create New Event

      </h2>

      <div className="space-y-6">

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Event Title"
          required
          className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-white outline-none focus:border-cyan-400"
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-white outline-none focus:border-cyan-400"
        />

        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
          required
          className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-white outline-none focus:border-cyan-400"
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={5}
          placeholder="Event Description"
          required
          className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-white outline-none resize-none focus:border-cyan-400"
        />

        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL (Optional)"
          className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-white outline-none focus:border-cyan-400"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-cyan-400 text-slate-950 font-bold py-4 rounded-xl hover:bg-cyan-300 transition"
        >
          {loading ? "Publishing..." : "Publish Event"}
        </button>

      </div>

    </form>

  );

}

export default CreateEventForm;