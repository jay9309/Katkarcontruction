import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {

    const phoneNumber = "919876543210"; // CHANGE THIS NUMBER

    const message =
        "Hello Katkar Constructions, I am interested in your construction services.";

    const whatsappURL =
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-popup"
            aria-label="Contact us on WhatsApp"
        >
            <FaWhatsapp className="whatsapp-icon" />

            <span className="whatsapp-text">
                Chat on WhatsApp
            </span>
        </a>
    );
};

export default WhatsAppButton;