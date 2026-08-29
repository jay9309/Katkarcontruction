import { Navigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";


const ProtectedRoute = ({ children }) => {

    const {
        admin,
        loading
    } = useAuth();


    if (loading) {

        return <h2>Loading...</h2>;
    }


    if (!admin) {

        return (
            <Navigate
                to="/admin/login"
                replace
            />
        );
    }


    return children;
};


export default ProtectedRoute;   