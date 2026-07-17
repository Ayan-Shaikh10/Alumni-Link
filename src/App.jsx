import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

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

function App() {
  return (
    <Routes>

      
      <Route path="/admin" element={<AdminDashboard />} />



      <Route element={<MainLayout />}>

        <Route path="/" element={<Home />} />

        <Route path="/events" element={<Events />} />

        <Route path="/directory" element={<Directory />} />

        <Route path="/about" element={<About />} />

        

      </Route>

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/profile" element={<Profile />} />

      <Route path="*" element={<NotFound />} />

      

    </Routes>
    
  );
}

export default App;