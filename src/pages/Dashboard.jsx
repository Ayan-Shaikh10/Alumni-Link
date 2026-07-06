import DashboardHero from "../components/dashboard/DashboardHero";
import StatsCards from "../components/dashboard/StatsCards";
import QuickActions from "../components/dashboard/QuickActions";
import UpcomingEvents from "../components/dashboard/UpcomingEvents";
import RecentAlumni from "../components/dashboard/RecentAlumni";
import ProfileProgress from "../components/dashboard/ProfileProgress";
import { useAuth } from "../contex/AuthContext";

// main function
function Dashboard() {


// states declarations
const {userData} = useAuth();




// states implimentations



// render parts
  return (

    <div className="min-h-screen bg-slate-950">

      <DashboardHero userData={userData} />

      <StatsCards />

      <ProfileProgress />


      <QuickActions />

      <UpcomingEvents />

      <RecentAlumni />

    </div>

  );

}

export default Dashboard;