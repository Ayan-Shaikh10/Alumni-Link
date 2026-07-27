import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { auth, db } from "../firebase/firebase";

import {
  createUserWithEmailAndPassword
} from "firebase/auth";

import {
  doc,
  setDoc
} from "firebase/firestore";

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

  const graduationYears = [];

  for (
    let year = currentYear;
    year >= 1990;
    year--
  ) {
    graduationYears.push(year);
  }


  const currentStudyYears = [
    "1st Year",
    "2nd Year",
    "3rd Year",
    "4th Year"
  ];


  const [formData, setFormData] = useState({

    fullName: "",

    email: "",

    phone: "",

    role: "",

    degree: "",

    department: "",

    graduationYear: "",

    currentYear: "",

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

    role: "",

    degree: "",

    department: "",

    graduationYear: "",

    currentYear: "",

    profession: "",

    company: "",

    city: "",

    password: "",

    confirmPassword: ""

  });


  const [loading, setLoading] = useState(false);


  const navigate = useNavigate();


  function handleChange(event) {

    const {
      name,
      value
    } = event.target;


    setFormData(previous => ({

      ...previous,

      [name]: value

    }));


    setErrors(previous => ({

      ...previous,

      [name]: ""

    }));

  }


  function handleRoleChange(role) {

    setFormData(previous => ({

      ...previous,

      role,

      graduationYear: "",

      currentYear: "",

      profession: ""

    }));


    setErrors(previous => ({

      ...previous,

      role: "",

      graduationYear: "",

      currentYear: "",

      profession: ""

    }));

  }


  function validateForm() {

    const newErrors = {};


    // =========================
    // FULL NAME
    // =========================

    if (
      formData.fullName.trim() === ""
    ) {

      newErrors.fullName =
        "Full Name is required.";

    }

    else if (
      formData.fullName.trim().length < 3
    ) {

      newErrors.fullName =
        "Full Name must be at least 3 characters.";

    }


    // =========================
    // EMAIL
    // =========================

    if (
      formData.email.trim() === ""
    ) {

      newErrors.email =
        "Email is required.";

    }

    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
        .test(formData.email)
    ) {

      newErrors.email =
        "Enter a valid email address.";

    }


    // =========================
    // PHONE
    // =========================

    if (
      formData.phone.trim() === ""
    ) {

      newErrors.phone =
        "Phone Number is required.";

    }

    else if (
      !/^[0-9]{10}$/.test(formData.phone)
    ) {

      newErrors.phone =
        "Phone Number must contain exactly 10 digits.";

    }


    // =========================
    // ROLE
    // =========================

    if (
      formData.role === ""
    ) {

      newErrors.role =
        "Please select whether you are a Student or Alumni.";

    }


    // =========================
    // DEGREE
    // =========================

    if (
      formData.degree.trim() === ""
    ) {

      newErrors.degree =
        "Degree is required.";

    }


    // =========================
    // DEPARTMENT
    // =========================

    if (
      formData.department.trim() === ""
    ) {

      newErrors.department =
        "Department is required.";

    }


    // =========================
    // STUDENT / ALUMNI EDUCATION
    // =========================

    if (
      formData.role === "student" &&
      formData.currentYear === ""
    ) {

      newErrors.currentYear =
        "Please select your current year.";

    }


    if (
      formData.role === "alumni" &&
      formData.graduationYear === ""
    ) {

      newErrors.graduationYear =
        "Please select your graduation year.";

    }


    // =========================
    // PROFESSION
    // =========================

    if (
      formData.role === "alumni" &&
      formData.profession.trim() === ""
    ) {

      newErrors.profession =
        "Profession is required for alumni.";

    }


    // =========================
    // CITY
    // =========================

    if (
      formData.city.trim() === ""
    ) {

      newErrors.city =
        "City is required.";

    }


    // =========================
    // PASSWORD
    // =========================

    if (
      formData.password === ""
    ) {

      newErrors.password =
        "Password is required.";

    }

    else if (
      formData.password.length < 8
    ) {

      newErrors.password =
        "Password must be at least 8 characters.";

    }


    // =========================
    // CONFIRM PASSWORD
    // =========================

    if (
      formData.confirmPassword === ""
    ) {

      newErrors.confirmPassword =
        "Please confirm your password.";

    }

    else if (
      formData.password !==
      formData.confirmPassword
    ) {

      newErrors.confirmPassword =
        "Passwords do not match.";

    }


    setErrors(newErrors);


    return (
      Object.keys(newErrors).length === 0
    );

  }


  async function handleSubmit(event) {

    event.preventDefault();


    if (
      !validateForm()
    ) {

      return;

    }


    setLoading(true);


    try {

      const userCredential =
        await createUserWithEmailAndPassword(

          auth,

          formData.email,

          formData.password

        );


      const user =
        userCredential.user;


      await setDoc(

        doc(
          db,
          "users",
          user.uid
        ),

        {

          uid: user.uid,

          fullName:
            formData.fullName.trim(),

          email:
            formData.email.trim(),

          phone:
            formData.phone.trim(),

          role:
            formData.role,

          degree:
            formData.degree.trim(),

          department:
            formData.department.trim(),

          graduationYear:
            formData.role === "alumni"
              ? Number(formData.graduationYear)
              : "",

          currentYear:
            formData.role === "student"
              ? formData.currentYear
              : "",

          profession:
            formData.profession.trim(),

          company:
            formData.company.trim(),

          city:
            formData.city.trim(),

          createdAt:
            new Date()

        }

      );


      toast.success(
        "Account Created Successfully!"
      );


      navigate("/login");

    }

    catch (error) {

      console.error(error);


      switch (
        error.code
      ) {

        case "auth/email-already-in-use":

          toast.error(
            "Email already registered."
          );

          break;


        case "auth/invalid-email":

          toast.error(
            "Invalid email address."
          );

          break;


        case "auth/weak-password":

          toast.error(
            "Password is too weak."
          );

          break;


        default:

          toast.error(
            "Something went wrong."
          );

      }

    }

    finally {

      setLoading(false);

    }

  }


  return (

    <div className="min-h-screen bg-slate-950 flex items-center justify-center py-12 px-5">


      <div className="w-full max-w-3xl rounded-3xl border border-cyan-400/20 bg-slate-900 shadow-2xl p-10">


        {/* LOGO */}

        <div className="flex justify-center items-center gap-3">

          <FaGraduationCap className="text-cyan-400 text-5xl" />

          <h1 className="text-5xl font-bold text-white">

            Alumni

            <span className="text-cyan-400">

              -Link

            </span>

          </h1>

        </div>


        {/* HEADING */}

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


          {/* FULL NAME */}

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

            </div>


            {errors.fullName && (

              <p className="text-red-400 text-sm mt-2">

                {errors.fullName}

              </p>

            )}

          </div>


          {/* EMAIL */}

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

            </div>


            {errors.email && (

              <p className="text-red-400 text-sm mt-2">

                {errors.email}

              </p>

            )}

          </div>


          {/* PHONE */}

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

            </div>


            {errors.phone && (

              <p className="text-red-400 text-sm mt-2">

                {errors.phone}

              </p>

            )}

          </div>


          {/* ============================= */}

          {/* ACCOUNT TYPE */}

          {/* ============================= */}


          <div className="mb-12">

            <label className="block text-slate-300 mb-2">

              I am a

            </label>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


              <button

                type="button"

                onClick={() =>
                  handleRoleChange("student")
                }

                className={`

                  py-4

                  rounded-xl

                  border

                  font-semibold

                  transition

                  ${

                    formData.role === "student"

                      ? "bg-cyan-400 text-slate-950 border-cyan-400"

                      : "bg-slate-800 text-slate-300 border-slate-700 hover:border-cyan-400"

                  }

                `}

              >

                🎓 Current Student

              </button>


              <button

                type="button"

                onClick={() =>
                  handleRoleChange("alumni")
                }

                className={`

                  py-4

                  rounded-xl

                  border

                  font-semibold

                  transition

                  ${

                    formData.role === "alumni"

                      ? "bg-cyan-400 text-slate-950 border-cyan-400"

                      : "bg-slate-800 text-slate-300 border-slate-700 hover:border-cyan-400"

                  }

                `}

              >

                🎓 Alumni

              </button>


            </div>


            {errors.role && (

              <p className="text-red-400 text-sm mt-2">

                {errors.role}

              </p>

            )}

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


          {/* DEGREE */}

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

            </div>


            {errors.degree && (

              <p className="text-red-400 text-sm mt-2">

                {errors.degree}

              </p>

            )}

          </div>


          {/* DEPARTMENT */}

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

            </div>


            {errors.department && (

              <p className="text-red-400 text-sm mt-2">

                {errors.department}

              </p>

            )}

          </div>


          {/* STUDENT CURRENT YEAR */}

          {formData.role === "student" && (

            <div className="mb-12">

              <label className="block text-slate-300 mb-2">

                Current Year

              </label>


              <div className="flex items-center bg-slate-800 rounded-xl border border-slate-700">

                <FaGraduationCap className="mx-4 text-slate-400" />


                <select

                  name="currentYear"

                  value={formData.currentYear}

                  onChange={handleChange}

                  className="w-full bg-transparent outline-none py-4 text-white"

                >

                  <option

                    value=""

                    disabled

                    className="bg-slate-900"

                  >

                    Select Current Year

                  </option>


                  {currentStudyYears.map(year => (

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


              {errors.currentYear && (

                <p className="text-red-400 text-sm mt-2">

                  {errors.currentYear}

                </p>

              )}

            </div>

          )}


          {/* ALUMNI GRADUATION YEAR */}

          {formData.role === "alumni" && (

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

                  <option

                    value=""

                    disabled

                    className="bg-slate-900"

                  >

                    Select Graduation Year

                  </option>


                  {graduationYears.map(year => (

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


              {errors.graduationYear && (

                <p className="text-red-400 text-sm mt-2">

                  {errors.graduationYear}

                </p>

              )}

            </div>

          )}


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


          {/* PROFESSION */}

          <div className="mb-6">

            <label className="block text-slate-300 mb-2">

              Profession

              {formData.role === "student" && (

                <span className="text-slate-500 text-sm ml-2">

                  (Optional)

                </span>

              )}

            </label>


            <div className="flex items-center bg-slate-800 rounded-xl border border-slate-700">

              <FaBriefcase className="mx-4 text-slate-400" />


              <input

                type="text"

                name="profession"

                placeholder={

                  formData.role === "student"

                    ? "Optional"

                    : "Software Engineer"

                }

                value={formData.profession}

                onChange={handleChange}

                className="w-full bg-transparent outline-none py-4 text-white"

              />

            </div>


            {errors.profession && (

              <p className="text-red-400 text-sm mt-2">

                {errors.profession}

              </p>

            )}

          </div>


          {/* COMPANY */}

          <div className="mb-6">

            <label className="block text-slate-300 mb-2">

              Company

              <span className="text-slate-500 text-sm ml-2">

                (Optional)

              </span>

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

            </div>

          </div>


          {/* CITY */}

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

            </div>


            {errors.city && (

              <p className="text-red-400 text-sm mt-2">

                {errors.city}

              </p>

            )}

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


          {/* PASSWORD */}

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

            </div>


            {errors.password && (

              <p className="text-red-400 text-sm mt-2">

                {errors.password}

              </p>

            )}

          </div>


          {/* CONFIRM PASSWORD */}

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

            </div>


            {errors.confirmPassword && (

              <p className="text-red-400 text-sm mt-2">

                {errors.confirmPassword}

              </p>

            )}

          </div>


          {/* CREATE ACCOUNT */}

          <button

            type="submit"

            disabled={loading}

            className="w-full bg-cyan-400 text-black py-3 rounded-lg font-semibold hover:bg-cyan-300 transition disabled:opacity-50 disabled:cursor-not-allowed"

          >

            {loading

              ? "Creating Account..."

              : "Create Account"

            }

          </button>


        </form>


        {/* LOGIN LINK */}

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