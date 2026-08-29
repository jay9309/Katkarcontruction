import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";


import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import UpcomingProjects from "../pages/UpcomingProjects";
import OngoingProjects from "../pages/OngoingProjects";
import CompletedProjects from "../pages/CompletedProjects";
import ProjectDetails from "../pages/ProjectDetails";
import Contact from "../pages/Contact";


import AdminLayout from "../pages/admin/AdminLayout";
import AdminLogin from "../pages/admin/AdminLogin";
import Dashboard from "../pages/admin/Dashboard";
import ManageProjects from "../pages/admin/ManageProjects";
import AddProject from "../pages/admin/AddProject";
import EditProject from "../pages/admin/EditProject";
import ManageEnquiries from "../pages/admin/ManageEnquiries";
import Settings from "../pages/admin/Settings";


import ProtectedRoute
    from "../components/ProtectedRoute";


const AppRoutes = () => {

    return (

        <BrowserRouter>

            <Routes>

                {/* PUBLIC */}

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/about"
                    element={<About />}
                />

                <Route
                    path="/services"
                    element={<Services />}
                />

                <Route
                    path="/projects/upcoming"
                    element={<UpcomingProjects />}
                />

                <Route
                    path="/projects/ongoing"
                    element={<OngoingProjects />}
                />

                <Route
                    path="/projects/completed"
                    element={<CompletedProjects />}
                />

                <Route
                    path="/projects/:id"
                    element={<ProjectDetails />}
                />

                <Route
                    path="/contact"
                    element={<Contact />}
                />


                {/* ADMIN LOGIN */}

                <Route
                    path="/admin/login"
                    element={<AdminLogin />}
                />


                {/* PROTECTED ADMIN */}

                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute>
                            <AdminLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route
                        index
                        element={<Dashboard />}
                    />

                    <Route
                        path="dashboard"
                        element={<Dashboard />}
                    />

                    <Route
                        path="projects"
                        element={<ManageProjects />}
                    />

                    <Route
                        path="projects/add"
                        element={<AddProject />}
                    />

                    <Route
                        path="projects/edit/:id"
                        element={<EditProject />}
                    />

                    <Route
                        path="enquiries"
                        element={<ManageEnquiries />}
                    />

                    <Route
                        path="settings"
                        element={<Settings />}
                    />
                </Route>

            </Routes>

        </BrowserRouter>
    );
};


export default AppRoutes;