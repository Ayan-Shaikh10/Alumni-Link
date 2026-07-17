import {
  FaUser,
  FaCalendarAlt,
  FaBriefcase,
  FaComments,
  FaUsers
} from "react-icons/fa";

import QuickActionCard from "./QuickActionCard";

function QuickActions() {

  return (

    <section className="max-w-7xl mx-auto px-8 mt-12">

      {/* Heading */}

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-3xl font-bold text-white">

            Quick Actions

          </h2>

          <p className="text-slate-400 mt-1">

            Quickly access the most important features.

          </p>

        </div>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">

        <QuickActionCard
          title="Profile"
          to="/profile"
          icon={<FaUser />}
          iconBg="bg-cyan-500/20"
          iconColor="text-cyan-400"
        />

        <QuickActionCard
          title="Events"
          to="/events"
          icon={<FaCalendarAlt />}
          iconBg="bg-purple-500/20"
          iconColor="text-purple-400"
        />

        <QuickActionCard
          title="Jobs"
          to="/jobs"
          icon={<FaBriefcase />}
          iconBg="bg-green-500/20"
          iconColor="text-green-400"
        />

        <QuickActionCard
          title="Messages"
          to="/messages"
          icon={<FaComments />}
          iconBg="bg-pink-500/20"
          iconColor="text-pink-400"
        />

        <QuickActionCard
          title="Directory"
          to="/directory"
          icon={<FaUsers />}
          iconBg="bg-orange-500/20"
          iconColor="text-orange-400"
        />

      </div>

    </section>

  );

}

export default QuickActions;