import React, { useState } from "react";
import "./Contact.css"; 
const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can integrate with an email service or backend API
        setSubmitted(true);
    };

    return (
        <div className="contact-page">
            <h2>Contact Me</h2>
            <p>
                Interested in collaborating or have a question about my projects? Fill out the form below and I'll get back to you!
            </p>
            {submitted ? (
                <div className="thank-you">
                    <h3>Thank you for reaching out!</h3>
                    <p>I appreciate your message and will respond as soon as possible.</p>
                </div>
            ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Message:
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <button type="submit">Send Message</button>
                </form>
            )}
        </div>
    );
};

export default Contact;