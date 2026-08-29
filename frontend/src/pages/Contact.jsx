import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";

import {
    sendEnquiry
} from "../services/enquiryService";


const Contact = () => {

    const [form, setForm] = useState({

        name: "",
        email: "",
        phone: "",
        message: ""
    });


    const [message, setMessage] =
        useState("");


    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]:
                e.target.value
        });
    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        setMessage("");


        try {

            await sendEnquiry(form);

            setMessage(
                "Thank you! Your enquiry has been submitted."
            );


            setForm({

                name: "",
                email: "",
                phone: "",
                message: ""
            });

        } catch (error) {

            setMessage(
                "Failed to send enquiry."
            );
        }
    };


    return (
        <>
            <Navbar />

            <main>
                <section className="contact-section">
                    <SectionTitle
                        subtitle="Contact"
                        title="Let’s discuss your project"
                        description="Tell us about your vision and we’ll guide you through the right construction solution."
                    />

                    <form onSubmit={handleSubmit}>

                        <input
                            name="name"
                            placeholder="Your Name"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />


                        <input
                            name="email"
                            type="email"
                            placeholder="Your Email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />


                        <input
                            name="phone"
                            placeholder="Phone Number"
                            value={form.phone}
                            onChange={handleChange}
                            required
                        />


                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={form.message}
                            onChange={handleChange}
                            required
                        />


                        <button type="submit">
                            Send Enquiry
                        </button>

                    </form>


                    {message && (
                        <p>{message}</p>
                    )}

                </section>
            </main>

            <Footer />
        </>
    );
};


export default Contact;