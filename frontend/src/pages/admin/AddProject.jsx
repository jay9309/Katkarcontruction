import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProject } from "../../services/projectService";

const AddProject = () => {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        title: "",
        location: "",
        description: "",
        status: "ongoing"
    });

    const [plans, setPlans] = useState([]);
    const [threeD, setThreeD] = useState([]);
    const [elevation, setElevation] = useState([]);
    const [projection, setProjection] = useState([]);
    const [siteImages, setSiteImages] = useState([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    // ==========================
    // HANDLE TEXT INPUT
    // ==========================

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };


    // ==========================
    // HANDLE SUBMIT
    // ==========================

    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("");
        setLoading(true);

        try {

            const formData = new FormData();


            // TEXT DATA
            formData.append("title", form.title);
            formData.append("location", form.location);
            formData.append("description", form.description);
            formData.append("status", form.status);


            // IMAGES
            plans.forEach((file) => {
                formData.append("plans", file);
            });

            threeD.forEach((file) => {
                formData.append("threeD", file);
            });

            elevation.forEach((file) => {
                formData.append("elevation", file);
            });

            projection.forEach((file) => {
                formData.append("projection", file);
            });

            siteImages.forEach((file) => {
                formData.append("siteImages", file);
            });


            const token = localStorage.getItem("token");


            await createProject(
                formData,
                token
            );


            alert("Project created successfully!");


            navigate("/admin/projects");


        } catch (error) {

            console.error("ADD PROJECT ERROR:", error);

            setError(
                error.response?.data?.message ||
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
                        Add a new construction project to your website.
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        value={form.description}
                        onChange={handleChange}
                        placeholder="Describe the project..."
                        rows="6"
                        required
                    />

                </div>


                {/* PLANS */}

                <div className="form-group">

                    <label>
                        Plan Images
                    </label>

                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={(e) =>
                            setPlans(
                                Array.from(e.target.files)
                            )
                        }
                    />

                    <small>
                        You can select multiple plan images.
                    </small>

                </div>


                {/* 3D */}

                <div className="form-group">

                    <label>
                        3D Design Images
                    </label>

                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={(e) =>
                            setThreeD(
                                Array.from(e.target.files)
                            )
                        }
                    />

                    <small>
                        You can select multiple 3D images.
                    </small>

                </div>


                {/* ELEVATION */}

                <div className="form-group">

                    <label>
                        Elevation Images
                    </label>

                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={(e) =>
                            setElevation(
                                Array.from(e.target.files)
                            )
                        }
                    />

                </div>


                {/* PROJECTION */}

                <div className="form-group">

                    <label>
                        Projection Images
                    </label>

                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={(e) =>
                            setProjection(
                                Array.from(e.target.files)
                            )
                        }
                    />

                </div>


                {/* SITE IMAGES */}

                <div className="form-group">

                    <label>
                        Construction Site Images
                    </label>

                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={(e) =>
                            setSiteImages(
                                Array.from(e.target.files)
                            )
                        }
                    />

                    <small>
                        You can select multiple construction site images.
                    </small>

                </div>


                {/* BUTTONS */}

                <div className="form-buttons">

                    <button
                        type="button"
                        className="admin-secondary-button"
                        onClick={() =>
                            navigate("/admin/projects")
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
                            ? "Uploading..."
                            : "Create Project"}

                    </button>

                </div>


            </form>

        </div>

    );

};

export default AddProject;