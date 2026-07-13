import { useState } from "react";
import FadeIn from "../animation/FadeIn";

const inputClass =
    "font-body font-light text-sm text-black-rich bg-white border border-gray-dark/12 rounded-md px-4 py-3 w-full outline-none transition-all duration-200 placeholder:text-gray-dark/30 focus:border-teal focus:ring-2 focus:ring-teal/10 mt-2";

const labelClass =
    "font-body text-xs font-medium tracking-[0.12em] uppercase text-gray-dark/50";

const requiredFields = [
    "firstName",
    "lastName",
    "email",
    "business",
    "projectType",
    "message",
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        business: "",
        projectType: "",
        message: "",
        source: "",
        "bot-field": "",
    });

    const [status, setStatus] = useState({
        loading: false,
        success: false,
        error: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const hasEmptyField = requiredFields.some(
            (field) => !formData[field].trim()
        );

        if (hasEmptyField) {
            alert("Please fill in all required fields.");
            return;
        };

        if (!emailRegex.test(formData.email.trim())) {
            alert("Please enter a valid email address.");
            return;
        }

        if (formData.message.trim().length < 20) {
            alert("Please provide a little more information.");
            return;
        };

        setStatus({ loading: true, success: false, error: false });

        const encode = (data) =>
            Object.keys(data)
                .map(
                    (key) =>
                        encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
                )
                .join("&");

        try {
            const response = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact", ...formData }),
            });

            if (!response.ok) {
                throw new Error("Submission failed.");
            }

            setStatus({ loading: false, success: true, error: false });
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                business: "",
                projectType: "",
                message: "",
                source: "",
                "bot-field": "",
            });

        } catch (err) {
            console.error("Form submission error", err);
            setStatus({ loading: false, success: false, error: true });
        }
    };

    // Success state
    if (status.success) {
        return (
            <FadeIn>
                <div className="bg-gray-light rounded-lg p-10 flex flex-col gap-4">
                    <div className="w-11 h-0.5 bg-mustard" />
                    <h3
                        className="font-display font-bold uppercase text-black-rich"
                        style={{
                            fontSize: "clamp(28px, 3.5vw, 48px)",
                            letterSpacing: "-0.02em",
                            lineHeight: 0.95,
                        }}
                    >
                        Enquiry Received.
                    </h3>
                    <p className="font-light text-sm text-gray-dark/60 leading-loose max-w-lg">
                        I'll review your message and get back to you within two business
                        days. I'll send a short brief to understand the project properly.
                    </p>
                </div>
            </FadeIn>
        );
    }

    return (
        <FadeIn delay={160}>
            <div className="bg-gray-light rounded-lg p-10">
                <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    noValidate
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <p style={{ display: "none" }}>
                        <label>
                            Don't fill this out if you're human:
                            <input
                                name="bot-field"
                                value={formData["bot-field"]}
                                onChange={handleChange}
                            />
                        </label>
                    </p>

                    {/* First + Last name */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <label htmlFor="firstName" className={labelClass}>
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="Jane"

                                className={inputClass}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="lastName" className={labelClass}>
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Smith"

                                className={inputClass}
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                        <label htmlFor="email" className={labelClass}>
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="jane@yourbusiness.com"

                            className={inputClass}
                        />
                    </div>

                    {/* Business name */}
                    <div className="flex flex-col">
                        <label htmlFor="business" className={labelClass}>
                            Business Name
                        </label>
                        <input
                            type="text"
                            id="business"
                            name="business"
                            value={formData.business}
                            onChange={handleChange}
                            placeholder="Your business name"

                            className={inputClass}
                        />
                    </div>

                    {/* Project type */}
                    <div className="flex flex-col">
                        <label htmlFor="projectType" className={labelClass}>
                            What do you need?
                        </label>
                        <div className="relative mt-2">
                            <select
                                id="projectType"
                                name="projectType"
                                value={formData.projectType}
                                onChange={handleChange}

                                className={`${inputClass} mt-0 appearance-none cursor-pointer pr-9`}
                            >
                                <option value="" disabled>
                                    Select a project type
                                </option>
                                <option value="brand-identity">Brand Identity</option>
                                <option value="web-design-development">
                                    Web Design &amp; Development
                                </option>
                                <option value="brand-website">Brand + Website</option>
                                <option value="not-sure">Not sure yet</option>
                            </select>
                            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                                    <path
                                        d="M1 1l4 4 4-4"
                                        stroke="rgba(42,42,42,0.4)"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col">
                        <label htmlFor="message" className={labelClass}>
                            Tell me about your business and what you feel needs to change
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            placeholder="What does your business do, who do you serve, and what's not working about your current brand or website?"

                            className={`${inputClass} resize-y leading-loose`}
                        />
                    </div>

                    {/* Source */}
                    <div className="flex flex-col">
                        <label htmlFor="source" className={labelClass}>
                            How did you find me?
                        </label>
                        <div className="relative mt-2">
                            <select
                                id="source"
                                name="source"
                                value={formData.source}
                                onChange={handleChange}
                                className={`${inputClass} mt-0 appearance-none cursor-pointer pr-9`}
                            >
                                <option value="" disabled>
                                    Select an option
                                </option>
                                <option value="google">Google Search</option>
                                <option value="linkedin">LinkedIn</option>
                                <option value="behance">Behance</option>
                                <option value="instagram">Instagram</option>
                                <option value="referral">Referral</option>
                                <option value="other">Other</option>
                            </select>
                            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                                    <path
                                        d="M1 1l4 4 4-4"
                                        stroke="rgba(42,42,42,0.4)"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={status.loading}
                        className="btn-primary w-full mt-2"
                    >
                        {status.loading ? "Sending..." : "Submit"}
                    </button>



                    {status.error && (
                        <p className="text-red-600 text-xs text-center">
                            Something went wrong. Please try again.
                        </p>
                    )}
                </form>
            </div>
        </FadeIn>
    );
};

export default ContactForm;