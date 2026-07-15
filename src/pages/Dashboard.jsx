import DashboardHero from "../components/dashboard/DashboardHero";
import StatsCards from "../components/dashboard/StatsCards";
import QuickActions from "../components/dashboard/QuickActions";
import UpcomingEvents from "../components/dashboard/UpcomingEvents";
import RecentAlumni from "../components/dashboard/RecentAlumni";
import ProfileProgress from "../components/dashboard/ProfileProgress";
import { useAuth } from "../contex/AuthContext";
import DashboardLayout from "../components/layout/DashboardLayout";

// main function
function Dashboard() {


// states declarations
const {userData} = useAuth();




// states implimentations



// render parts
return (

  <DashboardLayout>

    <div className="min-h-screen bg-slate-950">

      <DashboardHero userData={userData} />

      <StatsCards />

      <ProfileProgress />

      <QuickActions />

      <UpcomingEvents />

      <RecentAlumni />

    </div>

  </DashboardLayout>

);

}

export default Dashboard;