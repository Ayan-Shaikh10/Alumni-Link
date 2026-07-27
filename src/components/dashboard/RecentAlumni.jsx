import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import RecentAlumniCard from "./RecentAlumniCard";

import { getUsers } from "../../services/userService";
import { useAuth } from "../../contex/AuthContext";


function RecentAlumni() {

  const [alumni, setAlumni] = useState([]);

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const { currentUser } = useAuth();



  async function loadAlumni() {

    try {

      const users = await getUsers();


      // Keep only alumni and show the first 4

      const alumniUsers = users

        .filter(

          user => user.role === "alumni" && user.id !== currentUser?.uid

        )

        .slice(0, 4);


      setAlumni(alumniUsers);


    } catch (error) {

      console.error(

        "Failed to load alumni:",

        error

      );

    } finally {

      setLoading(false);

    }

  }


  useEffect(() => {

    loadAlumni();

  }, [currentUser]);


  return (

    <section className="max-w-7xl mx-auto px-8 mt-10">


      {/* SECTION HEADER */}

      <div className="flex items-center justify-between mb-6">


        <div>

          <h2 className="text-3xl text-white font-bold">

            Recent Alumni

          </h2>


          <p className="text-slate-400 mt-1">

            Connect with members of your alumni community.

          </p>

        </div>


        {/* VIEW ALL */}

        <button

          onClick={() => navigate("/dashboard/alumni")}

          className="text-cyan-400 font-semibold hover:text-cyan-300 transition"

        >

          View All →

        </button>


      </div>


      {/* LOADING */}

      {loading && (

        <div className="text-slate-400 py-8">

          Loading alumni...

        </div>

      )}


      {/* EMPTY */}

      {!loading && alumni.length === 0 && (

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">

          <h3 className="text-white text-xl font-semibold">

            No Alumni Found

          </h3>


          <p className="text-slate-400 mt-2">

            Alumni will appear here once they register.

          </p>

        </div>

      )}


      {/* ALUMNI LIST */}

      {!loading && alumni.length > 0 && (

        <div className="grid grid-cols-1 gap-4">

          {alumni.map((user) => (

            <RecentAlumniCard

              key={user.id}

              user={user}

            />

          ))}

        </div>

      )}


    </section>

  );

}


export default RecentAlumni;