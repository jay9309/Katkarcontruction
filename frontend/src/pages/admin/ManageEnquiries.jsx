import { useEffect, useState } from "react";

import {
    FaTrash,
    FaEnvelope,
    FaPhone
} from "react-icons/fa";

import api from "../../services/api";

import Loading from "../../components/Loading";


const ManageEnquiries = () => {

    const [enquiries, setEnquiries] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState("");



    const fetchEnquiries = async () => {

        try {

            const token =
                localStorage.getItem("token");


            const response =
                await api.get(
                    "/enquiries",
                    {
                        headers: {
                            Authorization:
                                `Bearer ${token}`
                        }
                    }
                );


            setEnquiries(
                response.data
            );


        } catch (error) {

            console.error(error);

            setError(
                "Unable to load enquiries."
            );

        } finally {

            setLoading(false);
        }
    };



    useEffect(() => {

        fetchEnquiries();

    }, []);



    const handleDelete = async (id) => {

        const confirmDelete =
            window.confirm(
                "Delete this enquiry?"
            );


        if (!confirmDelete) {
            return;
        }


        try {

            const token =
                localStorage.getItem("token");


            await api.delete(
                `/enquiries/${id}`,
                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }
            );


            setEnquiries(
                enquiries.filter(
                    (item) =>
                        item._id !== id
                )
            );


        } catch (error) {

            console.error(error);

            alert(
                "Failed to delete enquiry."
            );
        }
    };



    if (loading) {

        return <Loading />;
    }



    return (

        <div className="manage-enquiries">


            <div className="admin-page-header">

                <div>

                    <h2>
                        Customer Enquiries
                    </h2>

                    <p>
                        View messages sent by
                        customers.
                    </p>

                </div>

            </div>



            {error && (

                <div className="admin-error">
                    {error}
                </div>

            )}



            {enquiries.length === 0 ? (

                <div className="empty-state">

                    <FaEnvelope />

                    <h3>
                        No Enquiries
                    </h3>

                    <p>
                        Customer enquiries will
                        appear here.
                    </p>

                </div>

            ) : (

                <div className="enquiries-list">

                    {enquiries.map(
                        (enquiry) => (

                            <div
                                className="enquiry-card"
                                key={
                                    enquiry._id
                                }
                            >

                                <div className="enquiry-header">

                                    <div>

                                        <h3>
                                            {
                                                enquiry.name
                                            }
                                        </h3>

                                        <span>
                                            {
                                                new Date(
                                                    enquiry.createdAt
                                                ).toLocaleDateString()
                                            }
                                        </span>

                                    </div>


                                    <button
                                        className="delete-button"
                                        onClick={() =>
                                            handleDelete(
                                                enquiry._id
                                            )
                                        }
                                    >
                                        <FaTrash />
                                    </button>

                                </div>



                                <div className="enquiry-contact">

                                    <a
                                        href={`mailto:${enquiry.email}`}
                                    >
                                        <FaEnvelope />

                                        {
                                            enquiry.email
                                        }
                                    </a>


                                    <a
                                        href={`tel:${enquiry.phone}`}
                                    >
                                        <FaPhone />

                                        {
                                            enquiry.phone
                                        }
                                    </a>

                                </div>



                                <div className="enquiry-message">

                                    <strong>
                                        Message
                                    </strong>

                                    <p>
                                        {
                                            enquiry.message
                                        }
                                    </p>

                                </div>

                            </div>

                        )
                    )}

                </div>

            )}

        </div>
    );
};


export default ManageEnquiries;