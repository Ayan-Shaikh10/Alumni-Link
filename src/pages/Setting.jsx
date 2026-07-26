import { useState } from "react";

import { useAuth } from "../contex/AuthContext";
import { logoutUser, resetPassword } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
  FaBell,
  FaLock,
  FaTrash
} from "react-icons/fa";

import DashboardLayout from "../components/layout/DashboardLayout";

function Settings() {

  const { userData } = useAuth();

  const navigate = useNavigate();

  const [notifications, setNotifications] = useState({

    events: true,

    messages: true,

    alumniActivity: true

  });

  const handleLogout = async () => {

    try {

      await logoutUser();

      toast.success("Account Deleted successfully.");

      navigate("/");

    } catch (error) {

      console.error("Logout failed:", error);

      toast.error("Deletion failed. Please try again.");

    }

  };

  const handleChangePassword = async () => {

    try {

      if (!userData?.email) {

        toast.error("Email address not found.");

        return;

      }

      await resetPassword(userData.email);

      toast.success(

        "Password reset email sent successfully! Check your inbox."

      );

    } catch (error) {

      console.error("Password reset failed:", error);

      toast.error(

        "Failed to send password reset email. Please try again."

      );

    }

  };

  function toggleNotification(type) {

    setNotifications((previous) => ({

      ...previous,

      [type]: !previous[type]

    }));

  }

  function Toggle({ enabled, onClick }) {

    return (

      <button

        onClick={onClick}

        className={`

          relative

          w-12

          h-6

          rounded-full

          transition-all

          duration-300

          ${

            enabled

              ? "bg-emerald-400"

              : "bg-slate-700"

          }

        `}

      >

        <span

          className={`

            absolute

            top-1

            w-4

            h-4

            rounded-full

            bg-slate-950

            transition-all

            duration-300

            ${

              enabled

                ? "left-7"

                : "left-1"

            }

          `}

        />

      </button>

    );

  }

  return (

    <DashboardLayout>

      <div className="min-h-screen bg-slate-950">

        <div className="max-w-5xl mx-auto">

          <div className="mb-10">

            <h1 className="text-4xl font-bold text-white">

              Settings

            </h1>

            <p className="text-slate-400 mt-2">

              Manage your account preferences.

            </p>

          </div>

          <section className="mb-12">

            <div className="flex items-center gap-3 mb-5">

              <FaBell className="text-cyan-400 text-xl" />

              <h2 className="text-2xl font-bold text-white">

                Notifications

              </h2>

            </div>

            <div className="space-y-4">

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center justify-between gap-6">

                <div>

                  <h3 className="text-white font-semibold">

                    Event Notifications

                  </h3>

                  <p className="text-slate-400 text-sm mt-1">

                    Receive updates about upcoming events.

                  </p>

                </div>

                <div className="flex items-center gap-3">

                  <span

                    className={`text-sm font-semibold ${

                      notifications.events

                        ? "text-emerald-400"

                        : "text-slate-500"

                    }`}

                  >

                    {notifications.events ? "ON" : "OFF"}

                  </span>

                  <Toggle

                    enabled={notifications.events}

                    onClick={() => toggleNotification("events")}

                  />

                </div>

              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center justify-between gap-6">

                <div>

                  <h3 className="text-white font-semibold">

                    Message Notifications

                  </h3>

                  <p className="text-slate-400 text-sm mt-1">

                    Get notified when you receive new messages.

                  </p>

                </div>

                <div className="flex items-center gap-3">

                  <span

                    className={`text-sm font-semibold ${

                      notifications.messages

                        ? "text-emerald-400"

                        : "text-slate-500"

                    }`}

                  >

                    {notifications.messages ? "ON" : "OFF"}

                  </span>

                  <Toggle

                    enabled={notifications.messages}

                    onClick={() => toggleNotification("messages")}

                  />

                </div>

              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center justify-between gap-6">

                <div>

                  <h3 className="text-white font-semibold">

                    Alumni Activity Updates

                  </h3>

                  <p className="text-slate-400 text-sm mt-1">

                    Receive updates about alumni activity.

                  </p>

                </div>

                <div className="flex items-center gap-3">

                  <span

                    className={`text-sm font-semibold ${

                      notifications.alumniActivity

                        ? "text-emerald-400"

                        : "text-slate-500"

                    }`}

                  >

                    {notifications.alumniActivity

                      ? "ON"

                      : "OFF"

                    }

                  </span>

                  <Toggle

                    enabled={notifications.alumniActivity}

                    onClick={() => toggleNotification("alumniActivity")}

                  />

                </div>

              </div>

            </div>

          </section>

          <section className="mb-12">

            <div className="flex items-center gap-3 mb-5">

              <FaLock className="text-cyan-400 text-xl" />

              <h2 className="text-2xl font-bold text-white">

                Security

              </h2>

            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center justify-between gap-6">

              <div>

                <h3 className="text-white font-semibold">

                  Change Password

                </h3>

                <p className="text-slate-400 text-sm mt-1">

                  Update your account password securely.

                </p>

              </div>

              <button

                onClick={handleChangePassword}

                className="border border-cyan-400/60 text-cyan-400 px-5 py-2.5 rounded-xl font-semibold hover:bg-cyan-400 hover:text-slate-950 transition"

              >

                Change

              </button>

            </div>

          </section>

          <section className="pb-12">

            <div className="flex items-center gap-3 mb-5">

              <FaTrash className="text-red-400 text-xl" />

              <h2 className="text-2xl font-bold text-white">

                Danger Zone

              </h2>

            </div>

            <div className="bg-slate-900 border border-red-400/20 rounded-2xl p-6 flex items-center justify-between gap-6">

              <div>

                <h3 className="text-white font-semibold">

                  Delete Profile

                </h3>

                <p className="text-slate-400 text-sm mt-1">

                  Permanently delete your account and profile.

                </p>

              </div>

               <button
                     onClick={() => {
                     const confirmed = window.confirm(
                      "Are you sure you want to Delete The Profile?"
                        );

                       if (confirmed) {
                           logoutUser();
                          }
                     }}

                      className="border border-red-400/60 text-red-400 px-5 py-2.5 rounded-xl font-semibold hover:bg-red-400 hover:text-slate-950 transition" >

                      Delete Profile
                    
                    </button>

            </div>

          </section>

        </div>

      </div>

    </DashboardLayout>

  );

}

export default Settings;