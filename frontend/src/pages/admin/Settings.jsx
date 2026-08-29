import { useEffect, useState } from "react";

import api from "../../services/api";

import Loading from "../../components/Loading";


const Settings = () => {

    const [form, setForm] = useState({

        phone: "",

        whatsapp: "",

        email: "",

        instagram: "",

        facebook: "",

        address: ""

    });


    const [loading, setLoading] =
        useState(true);

    const [saving, setSaving] =
        useState(false);

    const [message, setMessage] =
        useState("");

    const [error, setError] =
        useState("");



    useEffect(() => {

        const fetchSettings = async () => {

            try {

                const response =
                    await api.get(
                        "/settings"
                    );


                setForm({

                    phone:
                        response.data.phone ||
                        "",

                    whatsapp:
                        response.data.whatsapp ||
                        "",

                    email:
                        response.data.email ||
                        "",

                    instagram:
                        response.data.instagram ||
                        "",

                    facebook:
                        response.data.facebook ||
                        "",

                    address:
                        response.data.address ||
                        ""

                });


            } catch (error) {

                console.error(error);

                setError(
                    "Unable to load settings."
                );

            } finally {

                setLoading(false);
            }
        };


        fetchSettings();

    }, []);



    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]:
                e.target.value

        });
    };



    const handleSubmit = async (e) => {

        e.preventDefault();

        setSaving(true);

        setMessage("");

        setError("");


        try {

            const token =
                localStorage.getItem("token");


            await api.put(
                "/settings",
                form,
                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }
            );


            setMessage(
                "Settings updated successfully!"
            );


        } catch (error) {

            console.error(error);

            setError(
                error.response
                    ?.data
                    ?.message ||
                "Failed to update settings."
            );

        } finally {

            setSaving(false);
        }
    };



    if (loading) {

        return <Loading />;
    }



    return (

        <div className="settings-page">


            <div className="admin-page-header">

                <div>

                    <h2>
                        Website Settings
                    </h2>

                    <p>
                        Manage your contact and
                        social media information.
                    </p>

                </div>

            </div>



            {message && (

                <div className="admin-success">
                    {message}
                </div>

            )}


            {error && (

                <div className="admin-error">
                    {error}
                </div>

            )}



            <form
                className="admin-form"
                onSubmit={handleSubmit}
            >


                {/* PHONE */}

                <div className="form-group">

                    <label>
                        Phone Number
                    </label>

                    <input
                        type="text"
                        name="phone"
                        value={form.phone}
                        onChange={
                            handleChange
                        }
                        placeholder="+91 9876543210"
                    />

                </div>



                {/* WHATSAPP */}

                <div className="form-group">

                    <label>
                        WhatsApp Number
                    </label>

                    <input
                        type="text"
                        name="whatsapp"
                        value={
                            form.whatsapp
                        }
                        onChange={
                            handleChange
                        }
                        placeholder="919876543210"
                    />

                    <small>
                        Enter country code
                        without + or spaces.
                    </small>

                </div>



                {/* EMAIL */}

                <div className="form-group">

                    <label>
                        Email Address
                    </label>

                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={
                            handleChange
                        }
                        placeholder="example@gmail.com"
                    />

                </div>



                {/* INSTAGRAM */}

                <div className="form-group">

                    <label>
                        Instagram URL
                    </label>

                    <input
                        type="url"
                        name="instagram"
                        value={
                            form.instagram
                        }
                        onChange={
                            handleChange
                        }
                        placeholder="https://instagram.com/..."
                    />

                </div>



                {/* FACEBOOK */}

                <div className="form-group">

                    <label>
                        Facebook URL
                    </label>

                    <input
                        type="url"
                        name="facebook"
                        value={
                            form.facebook
                        }
                        onChange={
                            handleChange
                        }
                        placeholder="https://facebook.com/..."
                    />

                </div>



                {/* ADDRESS */}

                <div className="form-group">

                    <label>
                        Office Address
                    </label>

                    <textarea
                        name="address"
                        value={
                            form.address
                        }
                        onChange={
                            handleChange
                        }
                        placeholder="Enter office address"
                        rows="4"
                    />

                </div>



                {/* SAVE */}

                <div className="form-buttons">

                    <button
                        type="submit"
                        className="admin-primary-button"
                        disabled={saving}
                    >

                        {saving
                            ? "Saving..."
                            : "Save Settings"}

                    </button>

                </div>


            </form>

        </div>
    );
};


export default Settings;