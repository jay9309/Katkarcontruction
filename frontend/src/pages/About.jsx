import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";
import Footer from "../components/Footer";

const About = () => {
    return (
        <>
            <Navbar />

            <main>
                <section className="page-section">
                    <SectionTitle
                        subtitle="About us"
                        title="Building with trust and precision"
                        description="Katkar Constructions is a trusted name in residential, commercial, and institutional building projects. We focus on quality workmanship, timely delivery, and durable construction solutions for every client."
                    />
                </section>
            </main>

            <Footer />
        </>
    );
};

export default About;
