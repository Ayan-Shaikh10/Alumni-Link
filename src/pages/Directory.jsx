import { useEffect, useState } from "react";
import {
  FaSearch,
  FaUserGraduate,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBuilding,
  FaCalendarAlt,
  FaPaperPlane,
  FaTimes,
  FaCheck,
  FaComments
} from "react-icons/fa";

import { useAuth } from "../contex/AuthContext";
import { toast } from "react-toastify";

import { getUsers } from "../services/userService";

import {
  getUserConnections,
  sendConnectionRequest,
  withdrawConnectionRequest
} from "../services/connectionService";


function Directory({ showConnectButton = false }) {

  const { currentUser } = useAuth();

  const [users, setUsers] = useState([]);

  const [connections, setConnections] = useState([]);

  const [loading, setLoading] = useState(true);

  const [actionLoading, setActionLoading] = useState(null);

  const [search, setSearch] = useState("");


  async function loadDirectory() {

    try {

      setLoading(true);


      const usersData = await getUsers();


      const alumni = usersData.filter(

        user => user.role === "alumni"

      );


      setUsers(alumni);


      if (showConnectButton && currentUser) {

        const connectionData = await getUserConnections(

          currentUser.uid

        );


        setConnections(connectionData);

      }

    } catch (error) {

      console.error(

        "Failed to load alumni directory:",

        error

      );

      toast.error(

        "Failed to load alumni."

      );

    } finally {

      setLoading(false);

    }

  }


  useEffect(() => {

    loadDirectory();

  }, [currentUser, showConnectButton]);


  function getConnectionForUser(userId) {

    if (!currentUser) {

      return null;

    }


    return connections.find(

      connection => (

        (

          connection.requesterId === currentUser.uid &&

          connection.receiverId === userId

        )

        ||

        (

          connection.receiverId === currentUser.uid &&

          connection.requesterId === userId

        )

      )

      &&

      (

        connection.status === "pending" ||

        connection.status === "accepted"

      )

    );

  }


  function getConnectionState(userId) {

    const connection = getConnectionForUser(userId);


    if (!connection) {

      return "none";

    }


    if (connection.status === "accepted") {

      return "accepted";

    }


    if (

      connection.status === "pending" &&

      connection.requesterId === currentUser.uid

    ) {

      return "sent";

    }


    if (

      connection.status === "pending" &&

      connection.receiverId === currentUser.uid

    ) {

      return "received";

    }


    return "none";

  }


  async function handleConnect(user) {

    if (!currentUser) {

      toast.error(

        "Please login first."

      );

      return;

    }


    if (currentUser.uid === user.id) {

      toast.error(

        "You cannot connect with yourself."

      );

      return;

    }


    const currentState = getConnectionState(

      user.id

    );


    if (

      currentState === "sent" ||

      currentState === "accepted"

    ) {

      return;

    }


    try {

      setActionLoading(user.id);


      await sendConnectionRequest(

        currentUser.uid,

        user.id

      );


      const connectionData = await getUserConnections(

        currentUser.uid

      );


      setConnections(connectionData);


      toast.success(

        `Connection request sent to ${user.fullName}!`

      );

    } catch (error) {

      console.error(

        "Failed to send connection request:",

        error

      );

      toast.error(

        "Failed to send connection request."

      );

    } finally {

      setActionLoading(null);

    }

  }


  async function handleWithdraw(user) {

    const connection = getConnectionForUser(

      user.id

    );


    if (!connection) {

      return;

    }


    try {

      setActionLoading(user.id);


      await withdrawConnectionRequest(

        connection.id

      );


      setConnections(previous =>

        previous.filter(

          item => item.id !== connection.id

        )

      );


      toast.success(

        "Connection request withdrawn."

      );

    } catch (error) {

      console.error(

        "Failed to withdraw connection request:",

        error

      );

      toast.error(

        "Failed to withdraw connection request."

      );

    } finally {

      setActionLoading(null);

    }

  }


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

    <div className="w-full min-h-full py-12 px-5">

      <div className="max-w-7xl mx-auto">


        <div className="text-center mb-10">

          <FaUserGraduate className="text-cyan-400 text-5xl mx-auto mb-4" />


          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">

            Alumni Directory

          </h1>


          <p className="text-slate-400 mt-4 text-base sm:text-lg">

            Discover and connect with alumni from your community.

          </p>

        </div>


        <div className="max-w-2xl mx-auto mb-10">

          <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 rounded-2xl px-4 sm:px-5 py-4 focus-within:border-cyan-400 transition">

            <FaSearch className="text-cyan-400 flex-shrink-0" />


            <input

              type="text"

              value={search}

              onChange={(event) =>

                setSearch(event.target.value)

              }

              placeholder="Search alumni..."

              className="w-full bg-transparent outline-none text-white placeholder:text-slate-500"

            />

          </div>

        </div>


        {loading && (

          <div className="text-center py-16">

            <div className="w-10 h-10 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin mx-auto mb-4"></div>


            <p className="text-slate-400">

              Loading alumni...

            </p>

          </div>

        )}


        {!loading && filteredUsers.length === 0 && (

          <div className="text-center py-16">

            <p className="text-slate-400 text-lg">

              No alumni found.

            </p>

          </div>

        )}


        {!loading && filteredUsers.length > 0 && (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

            {filteredUsers.map((user) => {

              const connectionState =

                getConnectionState(user.id);


              const isActionLoading =

                actionLoading === user.id;


              return (

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

                  <div className="flex items-center gap-4 mb-6">

                    <div className="w-14 h-14 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center flex-shrink-0">

                      <FaUserGraduate className="text-cyan-400 text-xl" />

                    </div>


                    <div className="min-w-0">

                      <h2 className="text-lg sm:text-xl font-bold text-white truncate">

                        {user.fullName || "Unknown User"}

                      </h2>


                      <p className="text-cyan-400 text-sm truncate">

                        {user.profession || "Alumni Member"}

                      </p>

                    </div>

                  </div>


                  <div className="space-y-3 text-sm flex-1">

                    <p className="flex items-center gap-3 text-slate-400">

                      <FaGraduationCap className="text-cyan-400 flex-shrink-0" />

                      <span className="text-slate-200 truncate">

                        {user.degree || "Degree unavailable"}

                      </span>

                    </p>


                    <p className="flex items-center gap-3 text-slate-400">

                      <FaBuilding className="text-cyan-400 flex-shrink-0" />

                      <span className="text-slate-200 truncate">

                        {user.department || "Department unavailable"}

                      </span>

                    </p>


                    <p className="flex items-center gap-3 text-slate-400">

                      <FaCalendarAlt className="text-cyan-400 flex-shrink-0" />

                      <span className="text-slate-200">

                        {user.graduationYear

                          ? `Class of ${user.graduationYear}`

                          : "Graduation year unavailable"

                        }

                      </span>

                    </p>


                    <p className="flex items-center gap-3 text-slate-400">

                      <FaMapMarkerAlt className="text-cyan-400 flex-shrink-0" />

                      <span className="text-slate-200 truncate">

                        {user.city || "Location unavailable"}

                      </span>

                    </p>

                  </div>


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


                  {showConnectButton && (

                    <div className="mt-6 pt-5 border-t border-slate-800">

                      {connectionState === "none" && (

                        <button

                          onClick={() =>

                            handleConnect(user)

                          }

                          disabled={isActionLoading}

                          className="w-full flex items-center justify-center gap-2 bg-cyan-400 text-slate-950 px-4 py-3 rounded-xl text-sm font-semibold hover:bg-cyan-300 transition disabled:opacity-50 disabled:cursor-not-allowed"

                        >

                          <FaPaperPlane />


                          {isActionLoading

                            ? "Sending..."

                            : "Connect"

                          }

                        </button>

                      )}


                      {connectionState === "sent" && (

                        <div className="flex flex-col sm:flex-row items-stretch gap-3">

                          <div className="flex-1 flex items-center justify-center gap-2 bg-slate-800 text-slate-300 px-4 py-3 rounded-xl text-sm font-semibold">

                            <FaPaperPlane className="text-cyan-400" />

                            Request Sent

                          </div>


                          <button

                            onClick={() =>

                              handleWithdraw(user)

                            }

                            disabled={isActionLoading}

                            className="flex items-center justify-center gap-2 border border-red-400/50 text-red-400 px-4 py-3 rounded-xl text-sm font-semibold hover:bg-red-400 hover:text-slate-950 transition disabled:opacity-50"

                          >

                            <FaTimes />


                            {isActionLoading

                              ? "..."

                              : "Withdraw"

                            }

                          </button>

                        </div>

                      )}


                      {connectionState === "received" && (

                        <div className="flex items-center justify-center gap-2 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 px-4 py-3 rounded-xl text-sm font-semibold">

                          Request Received

                        </div>

                      )}


                      {connectionState === "accepted" && (

                        <div className="flex items-center justify-center gap-2 bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 px-4 py-3 rounded-xl text-sm font-semibold">

                          <FaCheck />

                          Connected

                        </div>

                      )}

                    </div>

                  )}

                </div>

              );

            })}

          </div>

        )}

      </div>

    </div>

  );

}


export default Directory;