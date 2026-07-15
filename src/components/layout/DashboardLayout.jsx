import Sidebar from "./Sidebar";

function DashboardLayout({ children }) {

  return (

    <div className="min-h-screen bg-slate-950 flex">

      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <main className="flex-1 overflow-y-auto">

        {children}

      </main>

    </div>

  );

}

export default DashboardLayout;