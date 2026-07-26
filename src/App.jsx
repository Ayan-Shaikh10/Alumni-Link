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

        <Route
          path="/events"
          element={<Events />}
        />

        <Route
          path="/directory"
          element={<Directory />}
        />

        <Route
          path="/about"
          element={<About />}
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