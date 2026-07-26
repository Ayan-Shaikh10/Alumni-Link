import { useEffect, useState } from "react";
import { FaUserGraduate, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contex/AuthContext";
import { toast } from "react-toastify";

import {
  sendConnectionRequest,
  getConnectionBetweenUsers,
  acceptConnectionRequest,
  withdrawConnectionRequest
} from "../../services/connectionService";

function RecentAlumniCard({ user }) {

  const { currentUser } = useAuth();

  const navigate = useNavigate();

  const [connection, setConnection] = useState(null);

  const [loading, setLoading] = useState(false);

  const [statusLoading, setStatusLoading] = useState(true);


  async function loadConnection() {

    if (!currentUser || !user?.id) {

      setStatusLoading(false);

      return;

    }

    try {

      const existingConnection =
        await getConnectionBetweenUsers(

          currentUser.uid,

          user.id

        );

      setConnection(existingConnection);

    } catch (error) {

      console.error(

        "Failed to load connection:",

        error

      );

    } finally {

      setStatusLoading(false);

    }

  }


  useEffect(() => {

    loadConnection();

  }, [currentUser, user?.id]);


  async function handleConnect() {

    if (!currentUser) {

      toast.error("Please login first.");

      return;

    }

    if (currentUser.uid === user.id) {

      toast.error("You cannot connect with yourself.");

      return;

    }

    try {

      setLoading(true);

      const newConnection =

        await sendConnectionRequest(

          currentUser.uid,

          user.id

        );

      setConnection(newConnection);

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

      setLoading(false);

    }

  }


  async function handleWithdraw() {

    if (!connection?.id) return;

    try {

      setLoading(true);

      await withdrawConnectionRequest(

        connection.id

      );

      setConnection({

        ...connection,

        status: "withdrawn"

      });

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

      setLoading(false);

    }

  }


  async function handleAccept() {

    if (!connection?.id) return;

    try {

      setLoading(true);

      await acceptConnectionRequest(

        connection.id

      );

      setConnection({

        ...connection,

        status: "accepted"

      });

      toast.success(

        "Connection request accepted!"

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

      setLoading(false);

    }

  }


  function handleMessage() {

    navigate("/dashboard/message");

  }


  function renderAction() {

    if (statusLoading) {

      return (

        <button

          disabled

          className="ml-4 flex-shrink-0 border border-slate-600 text-slate-500 px-4 py-2 rounded-lg text-sm font-semibold"

        >

          Loading...

        </button>

      );

    }


    if (!connection || connection.status === "withdrawn") {

      return (

        <button

          onClick={handleConnect}

          disabled={loading}

          className="ml-4 flex-shrink-0 border border-cyan-400/60 text-cyan-400 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-400 hover:text-slate-950 transition disabled:opacity-50 disabled:cursor-not-allowed"

        >

          {loading ? "Sending..." : "Connect"}

        </button>

      );

    }


    if (

      connection.status === "pending" &&

      connection.requesterId === currentUser?.uid

    ) {

      return (

        <button

          onClick={handleWithdraw}

          disabled={loading}

          className="ml-4 flex-shrink-0 border border-amber-400/60 text-amber-400 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-amber-400 hover:text-slate-950 transition disabled:opacity-50 disabled:cursor-not-allowed"

        >

          {loading ? "Processing..." : "Withdraw"}

        </button>

      );

    }


    if (

      connection.status === "pending" &&

      connection.receiverId === currentUser?.uid

    ) {

      return (

        <button

          onClick={handleAccept}

          disabled={loading}

          className="ml-4 flex-shrink-0 border border-emerald-400/60 text-emerald-400 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-400 hover:text-slate-950 transition disabled:opacity-50 disabled:cursor-not-allowed"

        >

          {loading ? "Accepting..." : "Accept"}

        </button>

      );

    }


    if (connection.status === "accepted") {

      return (

        <button

          onClick={handleMessage}

          className="ml-4 flex-shrink-0 border border-cyan-400/60 text-cyan-400 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-400 hover:text-slate-950 transition"

        >

          Message

        </button>

      );

    }


    return null;

  }


  return (

    <div className="w-full min-h-[130px] flex items-center justify-between bg-slate-800/60 border border-slate-700 rounded-xl p-4 hover:border-cyan-400/40 transition">

      <div className="flex items-center gap-4 min-w-0">

        <div className="w-14 h-14 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center flex-shrink-0">

          <FaUserGraduate className="text-cyan-400 text-xl" />

        </div>


        <div className="min-w-0">

          <h3 className="text-white font-semibold truncate">

            {user.fullName}

          </h3>

          <p className="text-cyan-400 text-sm truncate">

            {user.profession}

          </p>

          <p className="text-slate-400 text-xs flex items-center gap-1 mt-1">

            <FaMapMarkerAlt />

            {user.city}

          </p>

        </div>

      </div>


      {renderAction()}

    </div>

  );

}

export default RecentAlumniCard;