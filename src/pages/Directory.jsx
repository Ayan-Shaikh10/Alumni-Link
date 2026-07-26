import { useEffect, useState } from "react";
import { FaSearch, FaUserGraduate } from "react-icons/fa";
import { Link } from "react-router-dom";


import { getUsers } from "../services/userService";

function Directory() {

  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");


  useEffect(() => {

   async function loadUsers() {

  try {

    // 1. Get all users from Firestore
    const data = await getUsers();

    // 2. Keep only users whose role is alumni
    const alumni = data.filter(
      user => user.role === "alumni"
    );

    // 3. Store only alumni in state
    setUsers(alumni);

  } catch (error) {

    console.error("Failed to load alumni:", error);

  } finally {

    setLoading(false);

  }

}

    loadUsers();

  }, []);


  const filteredUsers = users.filter((user) => {

    const searchText = search.toLowerCase();

    return (

      user.fullName?.toLowerCase().includes(searchText) ||

      user.degree?.toLowerCase().includes(searchText) ||

      user.department?.toLowerCase().includes(searchText) ||

      user.profession?.toLowerCase().includes(searchText) ||

      user.company?.toLowerCase().includes(searchText) ||

      user.city?.toLowerCase().includes(searchText)

    );

  });


  return (

    <div className="min-h-screen bg-slate-950 py-12 px-5">

      <div className="max-w-7xl mx-auto">


        {/* PAGE HEADER */}

        <div className="text-center mb-12">

          <FaUserGraduate className="text-cyan-400 text-5xl mx-auto mb-4" />

          <h1 className="text-4xl md:text-5xl font-bold text-white">

            Alumni Directory

          </h1>

          <p className="text-slate-400 mt-4 text-lg">

            Discover and connect with alumni from your community.

          </p>

        </div>


        {/* SEARCH */}

        <div className="max-w-2xl mx-auto mb-12">

          <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 rounded-2xl px-5 py-4 focus-within:border-cyan-400">

            <FaSearch className="text-cyan-400" />

            <input

              type="text"

              value={search}

              onChange={(e) => setSearch(e.target.value)}

              placeholder="Search by name, degree, profession, company or city..."

              className="w-full bg-transparent outline-none text-white placeholder:text-slate-500"

            />

          </div>

        </div>


        {/* LOADING */}

        {loading && (

          <p className="text-center text-slate-400">

            Loading alumni...

          </p>

        )}


        {/* EMPTY */}

        {!loading && filteredUsers.length === 0 && (

          <div className="text-center py-16">

            <p className="text-slate-400 text-lg">

              No alumni found.

            </p>

          </div>

        )}


        {/* ALUMNI GRID */}

        {!loading && filteredUsers.length > 0 && (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredUsers.map((user) => (

              <div

                key={user.id}

                className="

                  bg-slate-900

                  border

                  border-slate-800

                  rounded-2xl

                  p-6

                  hover:border-cyan-400/40

                  hover:shadow-[0_0_25px_rgba(34,211,238,0.08)]

                  transition-all

                  duration-300

                "

              >

                {/* AVATAR */}

                <div className="flex items-center gap-4 mb-6">

                  <div className="w-14 h-14 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">

                    <FaUserGraduate className="text-cyan-400 text-xl" />

                  </div>

                  <div>

                    <h2 className="text-xl font-bold text-white">

                      {user.fullName}

                    </h2>

                    <p className="text-cyan-400 text-sm">

                      {user.profession}

                    </p>

                  </div>

                </div>


                {/* DETAILS */}

                <div className="space-y-3 text-sm">

                  <p className="text-slate-400">

                    🎓{" "}

                    <span className="text-slate-200">

                      {user.degree}

                    </span>

                  </p>

                  <p className="text-slate-400">

                    🏫{" "}

                    <span className="text-slate-200">

                      {user.department}

                    </span>

                  </p>

                  <p className="text-slate-400">

                    📅{" "}

                    <span className="text-slate-200">

                      Class of {user.graduationYear}

                    </span>

                  </p>

                  <p className="text-slate-400">

                    📍{" "}

                    <span className="text-slate-200">

                      {user.city}

                    </span>

                  </p>

                </div>


                {/* COMPANY */}

                {user.company && (

                  <div className="mt-5 pt-4 border-t border-slate-800">

                    <p className="text-sm text-slate-400">

                      Currently at{" "}

                      <span className="text-cyan-400 font-semibold">

                        {user.company}

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

export default Directory;