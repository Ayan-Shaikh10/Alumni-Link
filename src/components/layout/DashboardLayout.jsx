import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function DashboardLayout({ children }) {

  return (

    <div className="min-h-screen bg-slate-950 flex">

      {/* Sidebar */}

      <Sidebar />

      {/* Right Side */}

      <div className="flex-1 flex flex-col">

        {/* Top Navigation */}

        <Topbar />

        {/* Page Content */}

        <main className="flex-1 overflow-y-auto p-8">

          {children}

        </main>

      </div>

    </div>

  );

}

export default DashboardLayout;