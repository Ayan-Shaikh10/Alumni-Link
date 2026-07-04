import DashboardHero from "../components/dashboard/DashboardHero";
import StatsCards from "../components/dashboard/StatsCards";
import QuickActions from "../components/dashboard/QuickActions";
import UpcomingEvents from "../components/dashboard/UpcomingEvents";
import RecentAlumni from "../components/dashboard/RecentAlumni";

function Dashboard() {

  return (

    <div className="min-h-screen bg-slate-950">

      <DashboardHero />

      <StatsCards />

      <QuickActions />

      <UpcomingEvents />

      <RecentAlumni />

    </div>

  );

}

export default Dashboard;