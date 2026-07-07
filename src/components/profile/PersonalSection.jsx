import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import InputField from "../common/InputField";


function PersonalSection({

  formData,

  handleChange,

  errors

}) {

  return (

    <section className="bg-slate-900 border border-cyan-400/20 rounded-2xl p-8 mt-8">

      {/* Heading */}

      <div className="flex items-center gap-3 mb-8">

        <FaUser className="text-cyan-400 text-2xl" />

        <h2 className="text-3xl font-bold text-white">

          Personal Details

        </h2>

        <div className="flex-1 h-[2px] bg-cyan-400/30"></div>

      </div>

      <InputField
        label="Full Name"
        icon={<FaUser />}
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Enter your full name"
        error={errors.fullName}
      />

      <InputField
        label="Email"
        icon={<FaEnvelope />}
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
        error={errors.email}
      />

      <InputField
        label="Phone Number"
        icon={<FaPhone />}
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Enter phone number"
        error={errors.phone}
      />

      <InputField
        label="City"
        icon={<FaMapMarkerAlt />}
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="Enter your city"
        error={errors.city}
      />

    </section>

  );

}

export default PersonalSection;