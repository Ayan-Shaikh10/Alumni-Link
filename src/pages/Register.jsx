import { Link } from "react-router-dom";
import { useState } from "react";
import{auth,db} from "../firebase/firebase";
import{createUserWithEmailAndPassword} from"firebase/auth";
import{doc,setDoc} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


import {
  FaGraduationCap,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaUniversity,
  FaBriefcase,
  FaBuilding,
  FaMapMarkerAlt,
  FaLock
} from "react-icons/fa";

import { MdSchool } from "react-icons/md";

function Register() {

  const currentYear = new Date().getFullYear();

  const years = [];

  for (let year = currentYear + 5; year >= 1990; year--) {
    years.push(year);
  }

  const [formData, setFormData] = useState({

    fullName: "",

    email: "",

    phone: "",

    degree: "",

    department: "",

    graduationYear: "",

    profession: "",

    company: "",

    city: "",

    password: "",

    confirmPassword: ""

  });

  const [errors, setErrors] = useState({

  fullName: "",

  email: "",

  phone: "",

  degree: "",

  department: "",

  graduationYear: "",

  profession: "",

  company: "",

  city: "",

  password: "",

  confirmPassword: ""

});

  const [loading, setLoading]=useState(false);

const navigate = useNavigate();

const handleChange = (e) => {

  const { name, value } = e.target;

  setFormData({

    ...formData,

    [name]: value

  });

  setErrors({

    ...errors,

    [name]: ""

  });

};

const validateForm = () => {

  let newErrors = {};

  // ---------- Full Name ----------

  if (formData.fullName.trim() === "") {

    newErrors.fullName = "Full Name is required.";

  } else if (formData.fullName.trim().length < 3) {

    newErrors.fullName = "Full Name must be at least 3 characters.";

  }

  // ---------- Email ----------

  if (formData.email.trim() === "") {

    newErrors.email = "Email is required.";

  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
  ) {

    newErrors.email = "Enter a valid email address.";

  }

  // ---------- Phone ----------

  if (formData.phone.trim() === "") {

    newErrors.phone = "Phone Number is required.";

  } else if (!/^[0-9]{10}$/.test(formData.phone)) {

    newErrors.phone = "Phone Number must contain exactly 10 digits.";

  }

  // ---------- Degree ----------

  if (formData.degree.trim() === "") {

    newErrors.degree = "Degree is required.";

  }

  // ---------- Department ----------

  if (formData.department.trim() === "") {

    newErrors.department = "Department is required.";

  }

  // ---------- Graduation Year ----------

  if (formData.graduationYear === "") {

    newErrors.graduationYear = "Please select your Graduation Year.";

  }

  // ---------- Profession ----------

  if (formData.profession.trim() === "") {

    newErrors.profession = "Profession is required.";

  }

  // ---------- City ----------

  if (formData.city.trim() === "") {

    newErrors.city = "City is required.";

  }

  // ---------- Password ----------

  if (formData.password === "") {

    newErrors.password = "Password is required.";

  } else if (formData.password.length < 8) {

    newErrors.password = "Password must be at least 8 characters.";

  }

  // ---------- Confirm Password ----------

  if (formData.confirmPassword === "") {

    newErrors.confirmPassword = "Please confirm your password.";

  } else if (formData.password !== formData.confirmPassword) {

    newErrors.confirmPassword = "Passwords do not match.";

  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;

};



const handleSubmit = async (e) => {

  e.preventDefault();

  if (!validateForm()) {

    return;

  }

  setLoading(true);

  try {

    const userCredential = await createUserWithEmailAndPassword(

      auth,

      formData.email,

      formData.password

    );

    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {

      uid: user.uid,

      fullName: formData.fullName,

      email: formData.email,

      phone: formData.phone,

      degree: formData.degree,

      department: formData.department,

      graduationYear: formData.graduationYear,

      profession: formData.profession,

      company: formData.company,

      city: formData.city,

      createdAt: new Date()

    });

    toast.success("Account Created Successfully!");

    navigate("/login");
    setLoading(false);

  }

  catch (error) {

    console.error(error);

    switch (error.code) {

  case "auth/email-already-in-use":

    toast.error("Email already registered.");

    break;

  case "auth/invalid-email":

    toast.error("Invalid email address.");

    break;

  case "auth/weak-password":

    toast.error("Password is too weak.");

    break;

  default:

    toast.error("Something went wrong.");

}

setLoading(false);

  }

};

  return (

    <div className="min-h-screen bg-slate-950 flex items-center justify-center py-12 px-5">

      <div className="w-full max-w-3xl rounded-3xl border border-cyan-400/20 bg-slate-900 shadow-2xl p-10">

        {/* Logo */}

        <div className="flex justify-center items-center gap-3">

          <FaGraduationCap className="text-cyan-400 text-5xl" />

          <h1 className="text-5xl font-bold text-white">

            Alumni

            <span className="text-cyan-400">

              -Link

            </span>

          </h1>

        </div>

        {/* Heading */}

        <h2 className="text-center text-4xl font-bold text-white mt-8">

          Join Your

          <span className="text-cyan-400">

            {" "}Alumni{" "}

          </span>

          Community

        </h2>

        <p className="text-center text-slate-400 mt-3 mb-12">

          Create your account and start connecting with alumni worldwide.

        </p>

        <form onSubmit={handleSubmit}>




        {/* ============================= */}

        {/* PERSONAL DETAILS */}

        {/* ============================= */}

        <div className="flex items-center gap-3 mb-8">

          <FaUser className="text-cyan-400 text-2xl" />

          <h3 className="text-3xl font-semibold text-white">

            Personal Details

          </h3>

          <div className="flex-1 h-[2px] bg-cyan-400/40"></div>

        </div>

        {/* Full Name */}

        <div className="mb-6">

          <label className="block text-slate-300 mb-2">

            Full Name

          </label>

          <div className="flex items-center bg-slate-800 rounded-xl border border-slate-700 focus-within:border-cyan-400">

            <FaUser className="mx-4 text-slate-400" />

            <input
  type="text"
  name="fullName"
  placeholder="Enter your full name"
  value={formData.fullName}
  onChange={handleChange}
  className="w-full bg-transparent outline-none py-4 text-white placeholder:text-slate-500"
/>

{
  errors.fullName && (

    <p className="text-red-400 text-sm mt-2">

      {errors.fullName}

    </p>

  )
}

          </div>

        </div>

        {/* Email */}

        <div className="mb-6">

          <label className="block text-slate-300 mb-2">

            Email Address

          </label>

          <div className="flex items-center bg-slate-800 rounded-xl border border-slate-700 focus-within:border-cyan-400">

            <FaEnvelope className="mx-4 text-slate-400" />

            <input
  type="email"
  name="email"
  placeholder="Enter your email"
  value={formData.email}
  onChange={handleChange}
  className="w-full bg-transparent outline-none py-4 text-white placeholder:text-slate-500"
/>

{
  errors.email && (

    <p className="text-red-400 text-sm mt-2">

      {errors.email}

    </p>

  )
}

          </div>

        </div>

        {/* Phone */}

        <div className="mb-12">

          <label className="block text-slate-300 mb-2">

            Phone Number

          </label>

          <div className="flex items-center bg-slate-800 rounded-xl border border-slate-700 focus-within:border-cyan-400">

            <FaPhone className="mx-4 text-slate-400" />

<input
  type="tel"
  name="phone"
  placeholder="Enter your phone number"
  value={formData.phone}
  onChange={handleChange}
  className="w-full bg-transparent outline-none py-4 text-white placeholder:text-slate-500"
/>

{
  errors.phone && (

    <p className="text-red-400 text-sm mt-2">

      {errors.phone}

    </p>

  )
}

          </div>

        </div>

        {/* ============================= */}

        {/* EDUCATIONAL DETAILS */}

        {/* ============================= */}

        <div className="flex items-center gap-3 mb-8">

          <MdSchool className="text-cyan-400 text-3xl" />

          <h3 className="text-3xl font-semibold text-white">

            Educational Details

          </h3>

          <div className="flex-1 h-[2px] bg-cyan-400/40"></div>

        </div>

        {/* Degree */}

        <div className="mb-6">

          <label className="block text-slate-300 mb-2">

            Degree

          </label>

          <div className="flex items-center bg-slate-800 rounded-xl border border-slate-700">

            <FaGraduationCap className="mx-4 text-slate-400" />

           <input
  type="text"
  name="degree"
  placeholder="B.Sc IT"
  value={formData.degree}
  onChange={handleChange}
  className="w-full bg-transparent outline-none py-4 text-white"
/>

{
  errors.degree && (

    <p className="text-red-400 text-sm mt-2">

      {errors.degree}

    </p>

  )
}

          </div>

        </div>

        {/* Department */}

        <div className="mb-6">

          <label className="block text-slate-300 mb-2">

            Department

          </label>

          <div className="flex items-center bg-slate-800 rounded-xl border border-slate-700">

            <FaUniversity className="mx-4 text-slate-400" />

            <input
  type="text"
  name="department"
  placeholder="Information Technology"
  value={formData.department}
  onChange={handleChange}
  className="w-full bg-transparent outline-none py-4 text-white"
/>

{
  errors.department && (

    <p className="text-red-400 text-sm mt-2">

      {errors.department}

    </p>

  )
}

          </div>

        </div>

        {/* Graduation Year */}

        <div className="mb-12">

          <label className="block text-slate-300 mb-2">

            Graduation Year

          </label>

          <div className="flex items-center bg-slate-800 rounded-xl border border-slate-700">

            <FaGraduationCap className="mx-4 text-slate-400" />

            <select
  name="graduationYear"
  value={formData.graduationYear}
  onChange={handleChange}
  className="w-full bg-transparent outline-none py-4 text-white"
>

  {
  errors.graduationYear && (

    <p className="text-red-400 text-sm mt-2">

      {errors.graduationYear}

    </p>

  )
}

              <option value="" disabled>

                Select Graduation Year

              </option>

              {years.map((year) => (

                <option
                  key={year}
                  value={year}
                  className="bg-slate-900"
                >

                  {year}

                </option>

              ))}

            </select>

          </div>

        </div>

        {/* ============================= */}

        {/* PROFESSIONAL DETAILS */}

        {/* ============================= */}

        <div className="flex items-center gap-3 mb-8">

          <FaBriefcase className="text-cyan-400 text-2xl" />

          <h3 className="text-3xl font-semibold text-white">

            Professional Details

          </h3>

          <div className="flex-1 h-[2px] bg-cyan-400/40"></div>

        </div>

        {/* Profession */}

        <div className="mb-6">

          <label className="block text-slate-300 mb-2">

            Profession

          </label>

          <div className="flex items-center bg-slate-800 rounded-xl border border-slate-700">

            <FaBriefcase className="mx-4 text-slate-400" />

            <input
  type="text"
  name="profession"
  placeholder="Software Engineer"
  value={formData.profession}
  onChange={handleChange}
  className="w-full bg-transparent outline-none py-4 text-white"
/>

{
  errors.profession && (

    <p className="text-red-400 text-sm mt-2">

      {errors.profession}

    </p>

  )
}

          </div>

        </div>

        {/* Company */}

        <div className="mb-6">

          <label className="block text-slate-300 mb-2">

            Company (Optional)

          </label>

          <div className="flex items-center bg-slate-800 rounded-xl border border-slate-700">

            <FaBuilding className="mx-4 text-slate-400" />

            <input
  type="text"
  name="company"
  placeholder="Google"
  value={formData.company}
  onChange={handleChange}
  className="w-full bg-transparent outline-none py-4 text-white"
/>

{
  errors.company && (

    <p className="text-red-400 text-sm mt-2">

      {errors.company}

    </p>

  )
}



          </div>

        </div>

        {/* City */}

        <div className="mb-12">

          <label className="block text-slate-300 mb-2">

            City

          </label>

          <div className="flex items-center bg-slate-800 rounded-xl border border-slate-700">

            <FaMapMarkerAlt className="mx-4 text-slate-400" />

           <input
  type="text"
  name="city"
  placeholder="Mumbai"
  value={formData.city}
  onChange={handleChange}
  className="w-full bg-transparent outline-none py-4 text-white"
/>

{
  errors.city && (

    <p className="text-red-400 text-sm mt-2">

      {errors.city}

    </p>

  )
}

          </div>

        </div>

        {/* ============================= */}

        {/* SECURITY */}

        {/* ============================= */}

        <div className="flex items-center gap-3 mb-8">

          <FaLock className="text-cyan-400 text-2xl" />

          <h3 className="text-3xl font-semibold text-white">

            Security

          </h3>

          <div className="flex-1 h-[2px] bg-cyan-400/40"></div>

        </div>

        {/* Password */}

        <div className="mb-6">

          <label className="block text-slate-300 mb-2">

            Password

          </label>

          <div className="flex items-center bg-slate-800 rounded-xl border border-slate-700 focus-within:border-cyan-400">

            <FaLock className="mx-4 text-slate-400" />

            <input
  type="password"
  name="password"
  placeholder="Create a strong password"
  value={formData.password}
  onChange={handleChange}
  className="w-full bg-transparent outline-none py-4 text-white placeholder:text-slate-500"
/>

{
  errors.password && (

    <p className="text-red-400 text-sm mt-2">

      {errors.password}

    </p>

  )
}

          </div>

        </div>

        {/* Confirm Password */}

        <div className="mb-10">

          <label className="block text-slate-300 mb-2">

            Confirm Password

          </label>

          <div className="flex items-center bg-slate-800 rounded-xl border border-slate-700 focus-within:border-cyan-400">

            <FaLock className="mx-4 text-slate-400" />

         <input
  type="password"
  name="confirmPassword"
  placeholder="Re-enter your password"
  value={formData.confirmPassword}
  onChange={handleChange}
  className="w-full bg-transparent outline-none py-4 text-white placeholder:text-slate-500"
/>

{
  errors.confirmPassword && (

    <p className="text-red-400 text-sm mt-2">

      {errors.confirmPassword}

    </p>

  )
}

          </div>

        </div>

        {/* Create Account Button */}

        <button
  type="submit"
  disabled={loading}
  className="w-full bg-cyan-400 text-black py-3 rounded-lg font-semibold hover:bg-cyan-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
>

  {loading ? "Creating Account..." : "Create Account"}

</button>



        </form>

        {/* Login Link */}

        <p className="text-center text-slate-400 mt-8">

          Already have an account?

          <Link
            to="/login"
            className="text-cyan-400 hover:text-cyan-300 font-semibold ml-2"
          >

            Login

          </Link>

        </p>

      </div>

    </div>

  );

}

export default Register;