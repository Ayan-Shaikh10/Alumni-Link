import DashboardHero from "../components/dashboard/DashboardHero";
import StatsCards from "../components/dashboard/StatsCards";
import QuickActions from "../components/dashboard/QuickActions";
import UpcomingEvents from "../components/dashboard/UpcomingEvents";
import RecentAlumni from "../components/dashboard/RecentAlumni";
import ProfileProgress from "../components/dashboard/profileProgress";
import { useEffect, useState } from "react";

import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

import { getUser } from "../services/userService";

// main function
function Dashboard() {


// states declarations
  const [userData, setUserData] = useState(null);




// states implimentations
useEffect(() => {

  const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {

    console.log("Current User:", currentUser);

    if (!currentUser) return;

    const data = await getUser(currentUser.uid);

    console.log("Firestore Data:", data);

    setUserData(data);

  });

  return () => unsubscribe();

}, []);


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