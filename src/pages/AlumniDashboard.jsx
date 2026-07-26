import DashboardLayout from "../components/layout/DashboardLayout";
import Directory from "./Directory";

function AlumniDashboard(){
    return (
        <DashboardLayout>
            <Directory showConnectButton = {true} />
        </DashboardLayout>
    );
}

export default AlumniDashboard;