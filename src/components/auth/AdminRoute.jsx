import { Navigate } from "react-router-dom";
import { useAuth } from "../../contex/AuthContext";

function AdminRoute ({ children }){
    const { currentUser, userData } = useAuth();

    if(!currentUser) {
        return <Navigate to="/login" replace />;

    }

    if(userData?.role !== "admin") {
        return <Navigate to="/dashboard" replace />
    }

    return children;
}

export default AdminRoute;