import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import {
    FaPlus,
    FaEdit,
    FaTrash,
    FaEye
} from "react-icons/fa";

import {
    getProjects,
    deleteProject
} from "../../services/projectService";

import Loading from "../../components/Loading";


const ManageProjects = () => {

    const [projects, setProjects] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");


    const fetchProjects = async () => {

        try {

            setLoading(true);

            const data = await getProjects();

            setProjects(data);

        } catch (error) {

            console.error(error);

            setError(
                "Unable to load projects."
            );

        } finally {

            setLoading(false);
        }
    };


    useEffect(() => {

        fetchProjects();

    }, []);



    const handleDelete = async (id) => {

        const confirmDelete =
            window.confirm(
                "Are you sure you want to delete this project?"
            );


        if (!confirmDelete) {
            return;
        }


        try {

            const token =
                localStorage.getItem("token");


            await deleteProject(
                id,
                token
            );


            setProjects(
                projects.filter(
                    (project) =>
                        project._id !== id
                )
            );


        } catch (error) {

            console.error(error);

            alert(
                "Failed to delete project."
            );
        }
    };



    if (loading) {

        return <Loading />;
    }


    return (

        <div className="manage-projects">


            {/* PAGE HEADER */}

            <div className="admin-page-header">

                <div>

                    <h2>
                        Manage Projects
                    </h2>

                    <p>
                        Add and manage your
                        construction projects.
                    </p>

                </div>


                <Link
                    to="/admin/projects/add"
                    className="admin-primary-button"
                >
                    <FaPlus />

                    Add Project
                </Link>

            </div>



            {/* ERROR */}

            {error && (

                <div className="admin-error">
                    {error}
                </div>

            )}



            {/* NO PROJECTS */}

            {projects.length === 0 ? (

                <div className="empty-state">

                    <h3>
                        No Projects Found
                    </h3>

                    <p>
                        Start by adding your
                        first project.
                    </p>

                    <Link
                        to="/admin/projects/add"
                        className="admin-primary-button"
                    >
                        Add Project
                    </Link>

                </div>

            ) : (


                /* PROJECT TABLE */

                <div className="admin-table-container">

                    <table className="admin-table">

                        <thead>

                            <tr>

                                <th>
                                    Image
                                </th>

                                <th>
                                    Project
                                </th>

                                <th>
                                    Location
                                </th>

                                <th>
                                    Status
                                </th>

                                <th>
                                    Actions
                                </th>

                            </tr>

                        </thead>


                        <tbody>

                            {projects.map(
                                (project) => (

                                    <tr
                                        key={
                                            project._id
                                        }
                                    >

                                        {/* IMAGE */}

                                        <td>

                                            {project.siteImages
                                                ?.length >
                                            0 ? (

                                                <img
                                                    src={
                                                        project.siteImages[0]
                                                    }
                                                    alt={
                                                        project.title
                                                    }
                                                    className="project-table-image"
                                                />

                                            ) : (

                                                <div className="no-image">
                                                    No Image
                                                </div>

                                            )}

                                        </td>


                                        {/* NAME */}

                                        <td>

                                            <strong>
                                                {
                                                    project.title
                                                }
                                            </strong>

                                        </td>


                                        {/* LOCATION */}

                                        <td>
                                            {
                                                project.location
                                            }
                                        </td>


                                        {/* STATUS */}

                                        <td>

                                            <span
                                                className={`status-badge ${project.status}`}
                                            >
                                                {
                                                    project.status
                                                }
                                            </span>

                                        </td>


                                        {/* ACTIONS */}

                                        <td>

                                            <div className="project-actions">


                                                <Link
                                                    to={`/projects/${project._id}`}
                                                    className="view-button"
                                                    title="View"
                                                >
                                                    <FaEye />
                                                </Link>


                                                <Link
                                                    to={`/admin/projects/edit/${project._id}`}
                                                    className="edit-button"
                                                    title="Edit"
                                                >
                                                    <FaEdit />
                                                </Link>


                                                <button
                                                    onClick={() =>
                                                        handleDelete(
                                                            project._id
                                                        )
                                                    }
                                                    className="delete-button"
                                                    title="Delete"
                                                >
                                                    <FaTrash />
                                                </button>


                                            </div>

                                        </td>

                                    </tr>

                                )
                            )}

                        </tbody>

                    </table>

                </div>

            )}

        </div>
    );
};


export default ManageProjects;