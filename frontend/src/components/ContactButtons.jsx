import {
    FaWhatsapp,
    FaInstagram,
    FaFacebook,
    FaEnvelope,
    FaPhone
} from "react-icons/fa";


const ContactButtons = ({
    phone,
    whatsapp,
    email,
    instagram,
    facebook
}) => {

    return (

        <div className="contact-buttons">

            <a
                href={`tel:${phone}`}
                title="Call"
            >
                <FaPhone />
            </a>


            <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noreferrer"
                title="WhatsApp"
            >
                <FaWhatsapp />
            </a>


            <a
                href={`mailto:${email}`}
                title="Email"
            >
                <FaEnvelope />
            </a>


            <a
                href={instagram}
                target="_blank"
                rel="noreferrer"
                title="Instagram"
            >
                <FaInstagram />
            </a>


            <a
                href={facebook}
                target="_blank"
                rel="noreferrer"
                title="Facebook"
            >
                <FaFacebook />
            </a>

        </div>
    );
};


export default ContactButtons;