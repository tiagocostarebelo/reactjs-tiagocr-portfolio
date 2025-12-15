import { useState } from "react";

const ContactForm = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        projectType: "",
        message: ""
    });
    const [status, setStatus] = useState({
        loading: false,
        success: false,
        error: false
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        //basic validation
        if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim()) {
            alert('Please fill in all required fields');
            return;
        }

        setStatus({ loading: true, success: false, error: false });

        const encode = (data) =>
            Object.keys(data)
                .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
                .join("&");

        try {
            await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({
                    "form-name": "contact",
                    ...formData,
                }),
            });

            setStatus({ loading: false, success: true, error: false });

            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                projectType: "",
                message: ""
            });

        } catch (error) {
            console.error("Form submission error", error);
            setStatus({ loading: false, success: false, error: true });
        }
    }

    return (
        <section className="w-full h-auto py-24 bg-gray-light">
            {/* Success & error messages */}

            {status.success ? <></> : <h2 className="text-2xl md:text-3xl font-bold text-black-rich uppercase mb-6 tracking-tight leading-tight text-left">Fill in the form</h2>}
            {status.success ? (
                <>
                    <h3 className="font-bold text-2xl mt-2">Thanks for reaching out!</h3>
                    <p className="text-base mt-1">I’ve received your message. I’ll reply as soon as I can.</p>
                </>
            ) : (
                <div className="max-w-xl">
                    <form
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-6 mt-12">

                        <label htmlFor="firstName">First Name
                            <input
                                type="text"
                                value={formData.firstName}
                                name="firstName"
                                id="firstName"
                                onChange={handleChange}
                                className="border border-gray-300 bg-white rounded-lg px-4 py-3 w-full"
                                required
                            />
                        </label>

                        <label htmlFor="lastName">Last Name
                            <input
                                type="text"
                                value={formData.lastName}
                                name="lastName"
                                id="lastName"
                                onChange={handleChange}
                                className="border border-gray-300 bg-white rounded-lg px-4 py-3 w-full"
                                required
                            />
                        </label>

                        <label htmlFor="email">Email
                            <input
                                type="email"
                                value={formData.email}
                                name="email"
                                id="email"
                                onChange={handleChange}
                                className="border border-gray-300 bg-white rounded-lg px-4 py-3 w-full"
                                required
                            />
                        </label>

                        <label htmlFor="projectType">Project Type
                            <select
                                type="text"
                                value={formData.projectType}
                                name="projectType"
                                id="projectType"
                                onChange={handleChange}
                                defaultValue=""
                                className="border border-gray-300 bg-white rounded-lg px-4 py-3 w-full"

                                required
                            >
                                <option value=""></option>
                                <option value="brandDesign">Brand Design</option>
                                <option value="webDevelopment">Web Development</option>
                                <option value="emailDevelopment">Email Development</option>
                                <option value="other">Other</option>

                            </select>
                        </label>

                        <label htmlFor="message">Leave your message
                            <textarea
                                type="text"
                                id="message"
                                value={formData.message}
                                name="message"
                                onChange={handleChange}
                                rows={4} cols={40}
                                className="border border-gray-300 bg-white rounded-lg px-4 py-3 w-full"
                            />
                        </label>
                        <button
                            type="submit"
                            className="btn-secondary"
                            disabled={status.loading}>
                            {status.loading ? "Sending..." : "Submit"}
                        </button>
                    </form>
                    {status.error && (
                        <p className="text-red-600 mt-2">Something went wrong. Please try again.</p>
                    )}
                </div>

            )}
        </section>
    )
}

export default ContactForm