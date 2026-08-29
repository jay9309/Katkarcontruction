import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { createProject } from "../../services/projectService";


const AddProject = () => {

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
        useState(false);

    const [error, setError] =
        useState("");



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
            .map((item) => item.trim())
            .filter((item) => item !== "");

    };



    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("");

        setLoading(true);


        try {

            const projectData = {

                title: form.title,

                location: form.location,

                description:
                    form.description,

                status: form.status,

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


            await createProject(
                projectData,
                token
            );


            alert(
                "Project created successfully!"
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
                "Failed to create project."
            );

        } finally {

            setLoading(false);
        }
    };



    return (

        <div className="admin-form-page">


            <div className="admin-page-header">

                <div>

                    <h2>
                        Add New Project
                    </h2>

                    <p>
                        Add a new construction
                        project to your website.
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


                {/* PROJECT TITLE */}

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
                        placeholder="Example: Modern Villa"
                        required
                    />

                </div>



                {/* LOCATION */}

                <div className="form-group">

                    <label>
                        Location *
                    </label>

                    <input
                        type="text"
                        name="location"
                        value={form.location}
                        onChange={
                            handleChange
                        }
                        placeholder="Example: Pune, Maharashtra"
                        required
                    />

                </div>



                {/* STATUS */}

                <div className="form-group">

                    <label>
                        Project Status *
                    </label>

                    <select
                        name="status"
                        value={form.status}
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



                {/* DESCRIPTION */}

                <div className="form-group">

                    <label>
                        Description *
                    </label>

                    <textarea
                        name="description"
                        value={
                            form.description
                        }
                        onChange={
                            handleChange
                        }
                        placeholder="Describe the project..."
                        rows="6"
                        required
                    />

                </div>



                {/* PLANS */}

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
                        placeholder="Paste image URLs separated by commas"
                        rows="3"
                    />

                    <small>
                        Example:
                        https://image1.jpg,
                        https://image2.jpg
                    </small>

                </div>



                {/* 3D */}

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
                        placeholder="Paste 3D image URLs separated by commas"
                        rows="3"
                    />

                </div>



                {/* ELEVATION */}

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
                        placeholder="Paste elevation image URLs separated by commas"
                        rows="3"
                    />

                </div>



                {/* SITE IMAGES */}

                <div className="form-group">

                    <label>
                        Construction Site Image URLs
                    </label>

                    <textarea
                        name="siteImages"
                        value={
                            form.siteImages
                        }
                        onChange={
                            handleChange
                        }
                        placeholder="Paste site image URLs separated by commas"
                        rows="3"
                    />

                </div>



                {/* BUTTONS */}

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
                        disabled={loading}
                    >

                        {loading
                            ? "Creating..."
                            : "Create Project"}

                    </button>

                </div>


            </form>

        </div>
    );
};


export default AddProject;