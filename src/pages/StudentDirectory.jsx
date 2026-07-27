import { useEffect, useState } from "react";

import {
  FaSearch,
  FaUserGraduate,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaUniversity,
  FaCalendarAlt
} from "react-icons/fa";

import { useAuth } from "../contex/AuthContext";

import { toast } from "react-toastify";

import { getUsers } from "../services/userService";


function StudentDirectory() {

  const { currentUser } = useAuth();


  const [students, setStudents] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");


  /*
  |--------------------------------------------------------------------------
  | LOAD STUDENTS
  |--------------------------------------------------------------------------
  */

  async function loadStudents() {

    try {

      setLoading(true);


      const usersData = await getUsers();


      const studentUsers = usersData.filter(

        user =>

          user.role === "student" &&

          user.id !== currentUser?.uid

      );


      setStudents(studentUsers);


    } catch (error) {

      console.error(

        "Failed to load students:",

        error

      );


      toast.error(

        "Failed to load students."

      );


    } finally {

      setLoading(false);

    }

  }


  /*
  |--------------------------------------------------------------------------
  | LOAD WHEN USER IS AVAILABLE
  |--------------------------------------------------------------------------
  */

  useEffect(() => {

    loadStudents();

  }, [currentUser]);


  /*
  |--------------------------------------------------------------------------
  | SEARCH
  |--------------------------------------------------------------------------
  */

  const filteredStudents = students.filter(

    user => {

      const searchText =

        search.toLowerCase();


      return (

        user.fullName

          ?.toLowerCase()

          .includes(searchText) ||


        user.degree

          ?.toLowerCase()

          .includes(searchText) ||


        user.department

          ?.toLowerCase()

          .includes(searchText) ||


        user.city

          ?.toLowerCase()

          .includes(searchText)

      );

    }

  );


  return (

    <div className="w-full min-h-full py-12 px-5">


      <div className="max-w-7xl mx-auto">


        {/* ============================================================ */}

        {/* PAGE HEADER */}

        {/* ============================================================ */}


        <div className="text-center mb-10">


          <FaUserGraduate

            className="text-cyan-400 text-5xl mx-auto mb-4"

          />


          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">

            Student Directory

          </h1>


          <p className="text-slate-400 mt-4 text-base sm:text-lg">

            Discover and connect with students from your community.

          </p>


        </div>


        {/* ============================================================ */}

        {/* SEARCH */}

        {/* ============================================================ */}


        <div className="max-w-2xl mx-auto mb-10">


          <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 rounded-2xl px-4 sm:px-5 py-4 focus-within:border-cyan-400 transition">


            <FaSearch className="text-cyan-400 flex-shrink-0" />


            <input

              type="text"

              value={search}

              onChange={(event) =>

                setSearch(event.target.value)

              }

              placeholder="Search students..."

              className="w-full bg-transparent outline-none text-white placeholder:text-slate-500"

            />


          </div>


        </div>


        {/* ============================================================ */}

        {/* LOADING */}

        {/* ============================================================ */}


        {loading && (

          <div className="text-center py-16">


            <div className="w-10 h-10 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin mx-auto mb-4"></div>


            <p className="text-slate-400">

              Loading students...

            </p>


          </div>

        )}


        {/* ============================================================ */}

        {/* EMPTY */}

        {/* ============================================================ */}


        {!loading && filteredStudents.length === 0 && (

          <div className="text-center py-16">


            <FaUserGraduate className="text-slate-700 text-5xl mx-auto mb-5" />


            <p className="text-slate-400 text-lg">

              No students found.

            </p>


          </div>

        )}


        {/* ============================================================ */}

        {/* STUDENT CARDS */}

        {/* ============================================================ */}


        {!loading && filteredStudents.length > 0 && (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">


            {filteredStudents.map((user) => (

              <div

                key={user.id}

                className="

                  flex

                  flex-col

                  bg-slate-900

                  border

                  border-slate-800

                  rounded-2xl

                  p-5

                  sm:p-6

                  hover:border-cyan-400/40

                  hover:shadow-[0_0_25px_rgba(34,211,238,0.08)]

                  transition-all

                  duration-300

                "

              >


                {/* USER HEADER */}


                <div className="flex items-center gap-4 mb-6">


                  <div className="w-14 h-14 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center flex-shrink-0">


                    <FaUserGraduate className="text-cyan-400 text-xl" />


                  </div>


                  <div className="min-w-0">


                    <h2 className="text-lg sm:text-xl font-bold text-white truncate">


                      {user.fullName || "Unknown Student"}


                    </h2>


                    <p className="text-cyan-400 text-sm">


                      Current Student


                    </p>


                  </div>


                </div>


                {/* DETAILS */}


                <div className="space-y-3 text-sm flex-1">


                  {/* DEGREE */}


                  <p className="flex items-center gap-3 text-slate-400">


                    <FaGraduationCap className="text-cyan-400 flex-shrink-0" />


                    <span className="text-slate-200 truncate">


                      {user.degree || "Degree unavailable"}


                    </span>


                  </p>


                  {/* DEPARTMENT */}


                  <p className="flex items-center gap-3 text-slate-400">


                    <FaUniversity className="text-cyan-400 flex-shrink-0" />


                    <span className="text-slate-200 truncate">


                      {user.department || "Department unavailable"}


                    </span>


                  </p>


                  {/* CURRENT YEAR */}


                  <p className="flex items-center gap-3 text-slate-400">


                    <FaCalendarAlt className="text-cyan-400 flex-shrink-0" />


                    <span className="text-slate-200">


                      {user.graduationYear

                        ? user.graduationYear

                        : "Current year unavailable"

                      }

                    </span>


                  </p>


                  {/* CITY */}


                  <p className="flex items-center gap-3 text-slate-400">


                    <FaMapMarkerAlt className="text-cyan-400 flex-shrink-0" />


                    <span className="text-slate-200 truncate">


                      {user.city || "Location unavailable"}


                    </span>


                  </p>


                </div>


                {/* COMPANY/PROFESSION */}

                {user.profession && (

                  <div className="mt-5 pt-4 border-t border-slate-800">


                    <p className="text-sm text-slate-400">


                      Interested in{" "}


                      <span className="text-cyan-400 font-semibold">


                        {user.profession}


                      </span>


                    </p>


                  </div>

                )}


              </div>

            ))}


          </div>

        )}


      </div>


    </div>

  );

}


export default StudentDirectory;