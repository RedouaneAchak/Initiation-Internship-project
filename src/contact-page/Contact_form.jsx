import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import PhoneInput from "react-phone-input-2"; // Country phone selector
import "react-phone-input-2/lib/style.css"; // Import styles for phone input
import Swal from 'sweetalert2';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone_number: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handlePhoneChange = (value) => {
        setFormData({
            ...formData,
            phone_number: value
        });
    };
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_t3rx75j", // from EmailJS
                "template_f8rj8yg", // from EmailJS
                {
                    name: formData.name,
                    phone_number: formData.phone_number,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    time: new Date().toLocaleString() // will replace {{time}}
                },
                "CM_g0Zhog6F2Ta3Ln" // from EmailJS
            )
            .then(
                (result) => {
                    console.log("Email sent!", result.text);
                    Swal.fire({
                        title: "Email Envoyé!",
                        icon: "success",
                        draggable: true
                    });

                },
                (error) => {
                    console.error("Error sending email:", error);
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Quelque chose s'est mal passé!",
                        footer: '<h1>Essayer à nouveau!</h1>'
                    });

                }
            );
    };

    return (
        <div className="contact-div">
            <h2 className='Contact-us'>Contactez-nous</h2>
            <div className="contact-container">
                <form onSubmit={sendEmail}>
                    <h1 className="form-title">Envoyer un message</h1>
                    <p className="form-subtitle">Vous pouvez nous joindre à tout moment</p>

                    <input
                        type="text"
                        name="name"
                        placeholder="Votre Nom"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <PhoneInput
                        country={"ma"} // Morocco default
                        value={formData.phone_number}
                        onChange={handlePhoneChange}
                        inputClass="phone-input"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Votre Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Sujet"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Votre Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button type="submit">Envoyer</button>
                </form>
                <div className="location-section">
                    <div className="map-container">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d859.6762903042728!2d-8.885169730367096!3d30.472788154277684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDI4JzIyLjAiTiA4wrA1MycwNC4zIlc!5e0!3m2!1sen!2sma!4v1754583107844!5m2!1sen!2sma"
                            width="1100" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="contact-info">
                        <p className='infos'><strong> Address:</strong>  Av. 20 Août, Taroudant</p>
                        <p className='infos'><strong> Phone:</strong> +212 5 28 55 07 94</p>
                        <p className='infos'><strong> Email:</strong> noorpowersocial@gmail.com</p>
                        <p className='infos'><strong> Heures:</strong> Lun – Sam: 9:00 - 18:00</p>
                    </div>

                </div>
            </div>
        </div>

    );


}
