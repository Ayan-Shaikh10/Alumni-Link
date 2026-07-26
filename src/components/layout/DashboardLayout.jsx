import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function DashboardLayout({ children }) {

  return (

    <div className="h-screen overflow-hidden bg-slate-950 flex">

      {/* Sidebar */}

      <Sidebar />

      {/* Right Side */}

      <div className="flex-1 min-w-0 min-h-0 relative">

        {/* Scrollable Content */}

        <main className="h-full overflow-y-auto pt-40 px-8 pb-8">

          {children}

        </main>

        {/* Glassy Topbar */}

        <div className="absolute top-0 left-0 right-0 z-50">

          <Topbar />

        </div>

      </div>

    </div>

  );

}

export default DashboardLayout;