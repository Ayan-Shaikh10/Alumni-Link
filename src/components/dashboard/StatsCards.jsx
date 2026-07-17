import {

  FaUsers,

  FaCalendarAlt,

  FaEnvelope,

  FaUserFriends

} from "react-icons/fa";

import StatCard from "./StatCard";

function StatsCards() {

  return (

    <section className="max-w-7xl mx-auto px-8 mt-10">

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatCard

          title="Total Alumni"

          value="1,250+"

          subtitle="+12 this month"

          icon={<FaUsers />}

          iconBg="bg-cyan-500/20"

          iconColor="text-cyan-400"

        />

        <StatCard

          title="Upcoming Events"

          value="24"

          subtitle="3 this week"

          icon={<FaCalendarAlt />}

          iconBg="bg-purple-500/20"

          iconColor="text-purple-400"

        />

        <StatCard

          title="Connections"

          value="340"

          subtitle="+8 this month"

          icon={<FaUserFriends />}

          iconBg="bg-green-500/20"

          iconColor="text-green-400"

        />

        <StatCard

          title="Messages"

          value="18"

          subtitle="5 unread"

          icon={<FaEnvelope />}

          iconBg="bg-pink-500/20"

          iconColor="text-pink-400"

        />

      </div>

    </section>

  );

}

export default StatsCards;