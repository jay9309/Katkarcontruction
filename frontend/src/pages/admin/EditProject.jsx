import { useEffect, useState } from "react";

import {
    useNavigate,
    useParams
} from "react-router-dom";

import {
    getProject,
    updateProject
} from "../../services/projectService";

import Loading from "../../components/Loading";


const EditProject = () => {

    const { id } = useParams();

    const navigate = useNavigate();


    const [form, setForm] = useState({

        title: "",

        location: "",

        description: "",

        status: "ongoing",

        plans: "",

        threeD: "",

        elevation: "",

        siteImages: ""

    });


    const [loading, setLoading] =
        useState(true);

    const [saving, setSaving] =
        useState(false);

    const [error, setError] =
        useState("");



    useEffect(() => {

        const fetchProject = async () => {

            try {

                const project =
                    await getProject(id);


                setForm({

                    title:
                        project.title || "",

                    location:
                        project.location || "",

                    description:
                        project.description || "",

                    status:
                        project.status ||
                        "ongoing",

                    plans:
                        project.plans
                            ?.join(", ") || "",

                    threeD:
                        project.threeD
                            ?.join(", ") || "",

                    elevation:
                        project.elevation
                            ?.join(", ") || "",

                    siteImages:
                        project.siteImages
                            ?.join(", ") || ""

                });


            } catch (error) {

                console.error(error);

                setError(
                    "Unable to load project."
                );

            } finally {

                setLoading(false);
            }
        };


        fetchProject();

    }, [id]);



    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]:
                e.target.value

        });
    };



    const convertToArray = (value) => {

        return value
            .split(",")
            .map((item) =>
                item.trim()
            )
            .filter(
                (item) => item !== ""
            );

    };



    const handleSubmit = async (e) => {

        e.preventDefault();

        setSaving(true);

        setError("");


        try {

            const projectData = {

                title: form.title,

                location:
                    form.location,

                description:
                    form.description,

                status:
                    form.status,

                plans:
                    convertToArray(
                        form.plans
                    ),

                threeD:
                    convertToArray(
                        form.threeD
                    ),

                elevation:
                    convertToArray(
                        form.elevation
                    ),

                siteImages:
                    convertToArray(
                        form.siteImages
                    )

            };


            const token =
                localStorage.getItem("token");


            await updateProject(
                id,
                projectData,
                token
            );


            alert(
                "Project updated successfully!"
            );


            navigate(
                "/admin/projects"
            );


        } catch (error) {

            console.error(error);

            setError(
                error.response
                    ?.data
                    ?.message ||
                "Failed to update project."
            );

        } finally {

            setSaving(false);
        }
    };



    if (loading) {

        return <Loading />;
    }



    return (

        <div className="admin-form-page">


            <div className="admin-page-header">

                <div>

                    <h2>
                        Edit Project
                    </h2>

                    <p>
                        Update project details.
                    </p>

                </div>

            </div>



            {error && (

                <div className="admin-error">
                    {error}
                </div>

            )}



            <form
                className="admin-form"
                onSubmit={handleSubmit}
            >


                <div className="form-group">

                    <label>
                        Project Name *
                    </label>

                    <input
                        type="text"
                        name="title"
                        value={form.title}
                        onChange={
                            handleChange
                        }
                        required
                    />

                </div>



                <div className="form-group">

                    <label>
                        Location *
                    </label>

                    <input
                        type="text"
                        name="location"
                        value={
                            form.location
                        }
                        onChange={
                            handleChange
                        }
                        required
                    />

                </div>



                <div className="form-group">

                    <label>
                        Project Status
                    </label>

                    <select
                        name="status"
                        value={
                            form.status
                        }
                        onChange={
                            handleChange
                        }
                    >

                        <option value="upcoming">
                            Upcoming
                        </option>

                        <option value="ongoing">
                            Ongoing
                        </option>

                        <option value="completed">
                            Completed
                        </option>

                    </select>

                </div>



                <div className="form-group">

                    <label>
                        Description
                    </label>

                    <textarea
                        name="description"
                        value={
                            form.description
                        }
                        onChange={
                            handleChange
                        }
                        rows="6"
                    />

                </div>



                <div className="form-group">

                    <label>
                        Plan Image URLs
                    </label>

                    <textarea
                        name="plans"
                        value={form.plans}
                        onChange={
                            handleChange
                        }
                        rows="3"
                    />

                </div>



                <div className="form-group">

                    <label>
                        3D Design Image URLs
                    </label>

                    <textarea
                        name="threeD"
                        value={form.threeD}
                        onChange={
                            handleChange
                        }
                        rows="3"
                    />

                </div>



                <div className="form-group">

                    <label>
                        Elevation Image URLs
                    </label>

                    <textarea
                        name="elevation"
                        value={
                            form.elevation
                        }
                        onChange={
                            handleChange
                        }
                        rows="3"
                    />

                </div>



                <div className="form-group">

                    <label>
                        Site Image URLs
                    </label>

                    <textarea
                        name="siteImages"
                        value={
                            form.siteImages
                        }
                        onChange={
                            handleChange
                        }
                        rows="3"
                    />

                </div>



                <div className="form-buttons">

                    <button
                        type="button"
                        className="admin-secondary-button"
                        onClick={() =>
                            navigate(
                                "/admin/projects"
                            )
                        }
                    >
                        Cancel
                    </button>


                    <button
                        type="submit"
                        className="admin-primary-button"
                        disabled={saving}
                    >

                        {saving
                            ? "Updating..."
                            : "Update Project"}

                    </button>

                </div>


            </form>

        </div>
    );
};


export default EditProject;