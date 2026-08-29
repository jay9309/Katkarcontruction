import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";
import Footer from "../components/Footer";

const Services = () => {
    return (
        <>
            <Navbar />

            <main>
                <section className="service-section">
                    <SectionTitle
                        subtitle="Our services"
                        title="End-to-end construction solutions"
                    />
                    <ul>
                        <li>Residential Construction</li>
                        <li>Commercial Projects</li>
                        <li>Renovation & Remodeling</li>
                        <li>Interior Finishing</li>
                    </ul>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Services;
