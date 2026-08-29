import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";


const AdminLogin = () => {

    const navigate = useNavigate();

    const { login } = useAuth();


    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [error, setError] = useState("");


    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("");


        try {

            await login(
                email,
                password
            );

            navigate("/admin/dashboard");

        } catch (error) {

            setError(
                error.response?.data?.message ||
                "Login failed"
            );
        }
    };


    return (

        <div className="admin-login-page">

            <div className="admin-login-card">

                <div className="admin-login-header">

                    <p className="admin-login-tag">Admin portal</p>
                    <h1>Welcome back</h1>
                    <p>Sign in to manage projects, enquiries and settings.</p>

                </div>

                <form
                    className="admin-login-form"
                    onSubmit={handleSubmit}
                >

                    <div className="form-group">

                        <label htmlFor="admin-email">
                            Email
                        </label>

                        <input
                            id="admin-email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            required
                        />

                    </div>


                    <div className="form-group">

                        <label htmlFor="admin-password">
                            Password
                        </label>

                        <input
                            id="admin-password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            required
                        />

                    </div>


                    {error && (
                        <p className="admin-error">
                            {error}
                        </p>
                    )}


                    <button
                        type="submit"
                        className="admin-primary-button"
                    >
                        Login
                    </button>

                </form>

            </div>

        </div>
    );
};


export default AdminLogin;