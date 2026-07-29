import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import ProtectedRoute from "./components/auth/ProtectedRoute";


import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Events from "./pages/Events";
import Directory from "./pages/Directory";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AlumniDashboard from "./pages/AlumniDashboard";
import AdminRoute from "./components/auth/AdminRoute";

import EventsDashboard from "./pages/EventDashboard";
import Messages from "./pages/Messaage";
import Settings from "./pages/Setting";
import DashboardLayout from "./components/layout/DashboardLayout";
import CommunityFeed from "./pages/CommunityFeed";
import Jobs from "./pages/Jobs";
import StudentDirectory from "./pages/StudentDirectory";
import PublicEvents from "./components/publicPages/PublicEvents";
import PublicAlumni from "./components/publicPages/PublicAlumni";
import PublicAbout from "./components/publicPages/PublicAbout";

function App() {
  return (
    <Routes>

      {/* ADMIN */}

      <Route
        path="/admin"
        element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        }
      />


      {/* PUBLIC WEBSITE */}

      <Route element={<MainLayout />}>

        <Route
          path="/"
          element={<Home />}
        />

       

      </Route>


      {/* AUTHENTICATION */}

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />


      {/* LOGGED-IN USER */}

      <Route
        path="/jobs"
        element={
          <DashboardLayout>
            <ProtectedRoute>
              <Jobs />
           </ProtectedRoute>
          </DashboardLayout>
        }
        
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
        
      />

      <Route
        path="/dashboard/alumni"
        element={
          <ProtectedRoute>
            <AlumniDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard/student"
        element={
          <DashboardLayout>
            <ProtectedRoute>
              <StudentDirectory />
           </ProtectedRoute>
          </DashboardLayout>
        }
        
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
        
      />

      
      <Route
        path="/dashboard/events"
        element={
          <ProtectedRoute>
            <EventsDashboard />
          </ProtectedRoute>
        }
        
      />

      <Route
        path="/dashboard/feed"
        element={
          <DashboardLayout>
            <ProtectedRoute>
              <CommunityFeed />
           </ProtectedRoute>
          </DashboardLayout>
        }
        
      />

      <Route
        path="/dashboard/message"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Messages />
            </DashboardLayout>
          </ProtectedRoute>
        }
        
      />

      

      <Route
        path="/dashboard/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
        
      />


      {/* NOT FOUND */}

      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>
  );
}

export default App;