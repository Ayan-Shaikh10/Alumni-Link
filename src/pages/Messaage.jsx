import { useEffect, useState } from "react";

import MsgChatScreen from "./MsgChatScreen";

import {
  FaSearch,
  FaUserGraduate,
  FaMapMarkerAlt,
  FaCheck,
  FaTimes,
  FaComments,
  FaClock,
  FaChevronRight,
  FaUserFriends
} from "react-icons/fa";

import { useAuth } from "../contex/AuthContext";

import {
  getUserConnections,
  acceptConnectionRequest,
  withdrawConnectionRequest
} from "../services/connectionService";

import { getUsers } from "../services/userService";

import { toast } from "react-toastify";


function Messages() {

  const { currentUser } = useAuth();


  const [connections, setConnections] = useState([]);

  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);

  const [actionLoading, setActionLoading] = useState(null);

  const [search, setSearch] = useState("");

  const [activeChat, setActiveChat] = useState(null);

  const [activeConnection, setActiveConnection] = useState(null);


  async function loadMessages() {

    if (!currentUser) {

      setLoading(false);

      return;

    }


    try {

      setLoading(true);


      const allConnections =
        await getUserConnections(
          currentUser.uid
        );


      const connectionData =
        allConnections.filter(

          connection =>

            connection.status === "pending" ||

            connection.status === "accepted"

        );


      const connectedUserIds = [

        ...new Set(

          connectionData.map(

            connection =>

              connection.requesterId ===
              currentUser.uid

                ? connection.receiverId

                : connection.requesterId

          )

        )

      ];


      const usersData =
        await getUsers();


      const relatedUsers =
        usersData.filter(

          user =>

            connectedUserIds.includes(
              user.id
            )

        );


      setConnections(
        connectionData
      );

      setUsers(
        relatedUsers
      );


    } catch (error) {

      console.error(
        "Failed to load messages:",
        error
      );

      toast.error(
        "Failed to load connections."
      );


    } finally {

      setLoading(false);

    }

  }


  useEffect(() => {

    loadMessages();

  }, [currentUser]);


  function getOtherUser(connection) {

    if (!currentUser) {

      return null;

    }


    const otherUserId =

      connection.requesterId ===
      currentUser.uid

        ? connection.receiverId

        : connection.requesterId;


    return users.find(

      user =>

        user.id ===
        otherUserId

    );

  }


  function isRequestSent(connection) {

    return (

      connection.requesterId ===
      currentUser.uid &&

      connection.status ===
      "pending"

    );

  }


  function isRequestReceived(connection) {

    return (

      connection.receiverId ===
      currentUser.uid &&

      connection.status ===
      "pending"

    );

  }


  function isAccepted(connection) {

    return (

      connection.status ===
      "accepted"

    );

  }


  async function handleAccept(connection) {

    try {

      setActionLoading(
        connection.id
      );


      await acceptConnectionRequest(
        connection.id
      );


      setConnections(

        previous =>

          previous.map(

            item =>

              item.id ===
              connection.id

                ? {

                    ...item,

                    status:
                      "accepted",

                    acceptedAt:
                      new Date()

                  }

                : item

          )

      );


      toast.success(
        "Connection accepted! 🎉"
      );


    } catch (error) {

      console.error(
        "Failed to accept connection:",
        error
      );

      toast.error(
        "Failed to accept connection."
      );


    } finally {

      setActionLoading(
        null
      );

    }

  }


  async function handleWithdraw(connection) {

    try {

      setActionLoading(
        connection.id
      );


      await withdrawConnectionRequest(
        connection.id
      );


      setConnections(

        previous =>

          previous.filter(

            item =>

              item.id !==
              connection.id

          )

      );


      toast.success(
        "Connection request withdrawn."
      );


    } catch (error) {

      console.error(
        "Failed to withdraw connection:",
        error
      );

      toast.error(
        "Failed to withdraw connection."
      );


    } finally {

      setActionLoading(
        null
      );

    }

  }


  function openChat(
    user,
    connection
  ) {

    setActiveChat(
      user
    );

    setActiveConnection(
      connection
    );

  }


  function closeChat() {

    setActiveChat(
      null
    );

    setActiveConnection(
      null
    );

  }


  const filteredConnections =
    connections.filter(

      connection => {

        const user =
          getOtherUser(
            connection
          );


        if (!user) {

          return false;

        }


        const searchText =
          search.toLowerCase();


        return (

          user.fullName
            ?.toLowerCase()
            .includes(
              searchText
            ) ||

          user.profession
            ?.toLowerCase()
            .includes(
              searchText
            ) ||

          user.city
            ?.toLowerCase()
            .includes(
              searchText
            )

        );

      }

    );


  const pendingConnections =
    filteredConnections.filter(

      connection =>

        connection.status ===
        "pending"

    );


  const acceptedConnections =
    filteredConnections

      .filter(

        connection =>

          connection.status ===
          "accepted"

      )

      .sort(

        (a, b) => {

          const dateA =

            a.acceptedAt?.toDate?.() ||

            new Date(0);


          const dateB =

            b.acceptedAt?.toDate?.() ||

            new Date(0);


          return dateB - dateA;

        }

      );


  function renderUserCard(
    connection
  ) {

    const user =
      getOtherUser(
        connection
      );


    if (!user) {

      return null;

    }


    const sent =
      isRequestSent(
        connection
      );


    const received =
      isRequestReceived(
        connection
      );


    const accepted =
      isAccepted(
        connection
      );


    return (

      <div

        key={
          connection.id
        }

        className={`

          group

          w-full

          min-h-[150px]

          flex

          items-center

          justify-between

          gap-6

          px-8

          py-7

          border-b

          border-slate-800/80

          transition-all

          duration-200

          ${

            accepted

              ? "hover:bg-slate-800/50"

              : "hover:bg-slate-800/30"

          }

        `}

      >

        <div className="flex items-center gap-5 min-w-0">

          <div className="relative flex-shrink-0">

            <div className="w-16 h-16 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">

              <FaUserGraduate className="text-cyan-400 text-2xl" />

            </div>


            {accepted && (

              <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-400 border-2 border-slate-900"></span>

            )}

          </div>


          <div className="min-w-0">

            <h3 className="text-white text-lg font-semibold truncate">

              {user.fullName ||
                "Unknown User"}

            </h3>


            <p className="text-cyan-400 text-sm truncate mt-1">

              {user.profession ||
                "Alumni Member"}

            </p>


            <p className="text-slate-500 text-sm flex items-center gap-2 mt-2">

              <FaMapMarkerAlt />

              {user.city ||
                "Location unavailable"}

            </p>


            {sent && (

              <p className="text-slate-500 text-sm flex items-center gap-2 mt-3">

                <FaClock />

                Request sent

              </p>

            )}


            {received && (

              <p className="text-yellow-400 text-sm mt-3">

                Wants to connect with you

              </p>

            )}


            {accepted && (

              <p className="text-emerald-400/80 text-sm mt-3">

                Connected · Ready to chat

              </p>

            )}

          </div>

        </div>


        <div className="flex items-center gap-4 flex-shrink-0">


          {sent && (

            <button

              onClick={() =>
                handleWithdraw(
                  connection
                )

              }

              disabled={

                actionLoading ===
                connection.id

              }

              className="flex items-center gap-2 border border-red-400/50 text-red-400 px-5 py-3 rounded-xl text-sm font-semibold hover:bg-red-400 hover:text-slate-950 transition disabled:opacity-50"

            >

              <FaTimes />

              {actionLoading ===
              connection.id

                ? "..."

                : "Withdraw"

              }

            </button>

          )}


          {received && (

            <button

              onClick={() =>
                handleAccept(
                  connection
                )

              }

              disabled={

                actionLoading ===
                connection.id

              }

              className="flex items-center gap-2 bg-emerald-400 text-slate-950 px-5 py-3 rounded-xl text-sm font-semibold hover:bg-emerald-300 transition disabled:opacity-50"

            >

              <FaCheck />

              {actionLoading ===
              connection.id

                ? "..."

                : "Accept"

              }

            </button>

          )}


          {accepted && (

            <button

              onClick={() =>

                openChat(

                  user,

                  connection

                )

              }

              className="flex items-center gap-3 text-emerald-400 text-sm font-semibold hover:text-emerald-300 transition"

            >

              <span>
                Open Chat
              </span>

              <FaChevronRight className="text-xs transition-transform group-hover:translate-x-1" />

            </button>

          )}

        </div>

      </div>

    );

  }


  if (activeChat) {

    return (

      <MsgChatScreen

        user={
          activeChat
        }

        connection={
          activeConnection
        }

        currentUser={
          currentUser
        }

        onBack={
          closeChat
        }

      />

    );

  }


  return (

    <div className="w-full max-w-7xl mx-auto">


      <div className="mb-8">

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">

            <FaComments className="text-cyan-400 text-2xl" />

          </div>


          <div>

            <h1 className="text-4xl font-bold text-white">

              Messages

            </h1>


            <p className="text-slate-400 mt-1">

              Connect and communicate with your alumni community.

            </p>

          </div>

        </div>

      </div>


      <div className="relative mb-8">

        <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500" />


        <input

          type="text"

          placeholder="Search connections..."

          value={search}

          onChange={event =>
            setSearch(
              event.target.value
            )

          }

          className="w-full bg-slate-900/80 border border-slate-800 rounded-2xl py-5 pl-14 pr-5 text-white placeholder:text-slate-500 outline-none focus:border-cyan-400/60 transition"

        />

      </div>


      {loading && (

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl py-24 text-center">

          <div className="w-12 h-12 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin mx-auto mb-5"></div>


          <p className="text-slate-400 text-lg">

            Loading connections...

          </p>

        </div>

      )}


      {!loading && (

        <div className="space-y-8">


          {/* PENDING REQUESTS */}

          <section className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">


            <div className="px-8 py-7 border-b border-slate-800 flex items-center justify-between">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center">

                  <FaClock className="text-yellow-400 text-xl" />

                </div>


                <div>

                  <h2 className="text-2xl font-semibold text-white">

                    Connection Requests

                  </h2>


                  <p className="text-slate-500 text-sm mt-1">

                    Pending requests waiting for action

                  </p>

                </div>

              </div>


              <span className="px-4 py-2 rounded-full bg-yellow-400/10 text-yellow-400 text-sm font-semibold">

                {
                  pendingConnections.length
                }

              </span>

            </div>


            {pendingConnections.length === 0 && (

              <div className="py-16 text-center px-6">

                <FaClock className="text-slate-700 text-4xl mx-auto mb-4" />

                <h3 className="text-lg font-semibold text-white">

                  No pending requests

                </h3>


                <p className="text-slate-500 mt-2">

                  New connection requests will appear here.

                </p>

              </div>

            )}


            {pendingConnections.length > 0 && (

              <div>

                {pendingConnections.map(

                  connection =>

                    renderUserCard(
                      connection
                    )

                )}

              </div>

            )}

          </section>


          {/* CONNECTED ALUMNI */}

          <section className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">


            <div className="px-8 py-7 border-b border-slate-800 flex items-center justify-between">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-emerald-400/10 flex items-center justify-center">

                  <FaUserFriends className="text-emerald-400 text-xl" />

                </div>


                <div>

                  <h2 className="text-2xl font-semibold text-white">

                    Connected Alumni

                  </h2>


                  <p className="text-slate-500 text-sm mt-1">

                    Your active alumni connections

                  </p>

                </div>

              </div>


              <span className="px-4 py-2 rounded-full bg-emerald-400/10 text-emerald-400 text-sm font-semibold">

                {
                  acceptedConnections.length
                }

              </span>

            </div>


            {acceptedConnections.length === 0 && (

              <div className="py-16 text-center px-6">

                <FaUserFriends className="text-slate-700 text-4xl mx-auto mb-4" />

                <h3 className="text-lg font-semibold text-white">

                  No connected alumni yet

                </h3>


                <p className="text-slate-500 mt-2">

                  Accepted connections will appear here.

                </p>

              </div>

            )}


            {acceptedConnections.length > 0 && (

              <div>

                {acceptedConnections.map(

                  connection =>

                    renderUserCard(
                      connection
                    )

                )}

              </div>

            )}

          </section>

        </div>

      )}

    </div>

  );

}


export default Messages;