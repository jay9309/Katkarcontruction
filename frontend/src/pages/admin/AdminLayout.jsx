import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

import {
    FaTachometerAlt,
    FaBuilding,
    FaEnvelope,
    FaCog,
    FaSignOutAlt,
    FaBars
} from "react-icons/fa";

import { useAuth } from "../../context/AuthContext";

import { useState } from "react";


const AdminLayout = () => {

    const location = useLocation();

    const navigate = useNavigate();

    const { admin, logout } = useAuth();

    const [sidebarOpen, setSidebarOpen] = useState(false);


    const handleLogout = () => {

        logout();

        navigate("/admin/login");
    };


    const isActive = (path) => {

        return location.pathname === path;
    };


    return (

        <div className="admin-layout">


            {/* MOBILE MENU BUTTON */}

            <button
                className="mobile-menu-button"
                onClick={() =>
                    setSidebarOpen(!sidebarOpen)
                }
            >
                <FaBars />
            </button>



            {/* SIDEBAR */}

            <aside
                className={`admin-sidebar ${
                    sidebarOpen ? "sidebar-open" : ""
                }`}
            >

                <div className="admin-logo">

                    <h2>
                        Katkar
                    </h2>

                    <span>
                        ADMIN PANEL
                    </span>

                </div>


                {/* ADMIN INFORMATION */}

                <div className="admin-info">

                    <div className="admin-avatar">
                        {admin?.name
                            ?.charAt(0)
                            ?.toUpperCase()}
                    </div>

                    <div>

                        <strong>
                            {admin?.name || "Admin"}
                        </strong>

                        <small>
                            Administrator
                        </small>

                    </div>

                </div>



                {/* NAVIGATION */}

                <nav className="admin-navigation">

                    <Link
                        to="/admin/dashboard"
                        className={
                            isActive(
                                "/admin/dashboard"
                            )
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            setSidebarOpen(false)
                        }
                    >
                        <FaTachometerAlt />

                        <span>
                            Dashboard
                        </span>
                    </Link>


                    <Link
                        to="/admin/projects"
                        className={
                            isActive(
                                "/admin/projects"
                            )
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            setSidebarOpen(false)
                        }
                    >
                        <FaBuilding />

                        <span>
                            Manage Projects
                        </span>
                    </Link>


                    <Link
                        to="/admin/enquiries"
                        className={
                            isActive(
                                "/admin/enquiries"
                            )
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            setSidebarOpen(false)
                        }
                    >
                        <FaEnvelope />

                        <span>
                            Enquiries
                        </span>
                    </Link>


                    <Link
                        to="/admin/settings"
                        className={
                            isActive(
                                "/admin/settings"
                            )
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            setSidebarOpen(false)
                        }
                    >
                        <FaCog />

                        <span>
                            Settings
                        </span>
                    </Link>

                </nav>



                {/* LOGOUT */}

                <button
                    className="admin-logout"
                    onClick={handleLogout}
                >

                    <FaSignOutAlt />

                    <span>
                        Logout
                    </span>

                </button>

            </aside>



            {/* MAIN CONTENT */}

            <main className="admin-main">

                <header className="admin-topbar">

                    <div>

                        <h1>
                            Admin Panel
                        </h1>

                        <p>
                            Manage your construction
                            website
                        </p>

                    </div>

                </header>


                <div className="admin-content">

                    <Outlet />

                </div>

            </main>

        </div>
    );
};


export default AdminLayout;