"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Contact() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        agency: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    timestamp: new Date().toISOString(),
                }),
            });

            if (response.ok) {
                router.push("/success");
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="pt-[80px]">
            {/* Hero */}
            <section className="hero py-[5rem] pb-[2rem] text-center bg-white">
                <div className="container-custom max-w-[800px] mx-auto">
                    <h1 className="text-[3.5rem] font-bold leading-[1.2] mb-6 tracking-tight max-md:text-[2.5rem]">
                        Let&apos;s Build Your Custom AI Agent
                    </h1>
                    <p className="hero-subtitle text-[1.25rem] text-text-secondary mb-[2.5rem] max-md:text-[1.1rem]">
                        Ready to automate? Schedule a 45-minute discovery call to discuss your agency&apos;s specific bottlenecks.
                    </p>
                </div>
            </section>

            {/* Split Content */}
            <section className="py-[2rem] pb-[5rem]">
                <div className="container-custom grid grid-cols-2 gap-[4rem] max-md:grid-cols-1 max-md:gap-[3rem]">

                    {/* Left Column: Info */}
                    <div>
                        <h2 className="text-[2rem] font-semibold mb-[2rem] text-[#0A1628]">Get In Touch</h2>

                        <div className="contact-card bg-white border border-border-light rounded-main p-[1.5rem] mb-4 flex items-center gap-4 hover:translate-y-[-2px] hover:border-accent-primary transition-all shadow-sm">
                            <i className="ph-fill ph-envelope-simple text-accent-primary text-[1.5rem]"></i>
                            <div>
                                <div className="text-text-muted text-[0.9rem]">Email</div>
                                <div className="font-medium">hello@launchpadautomation.com</div>
                            </div>
                        </div>

                        <div className="contact-card bg-white border border-border-light rounded-main p-[1.5rem] mb-4 flex items-center gap-4 hover:translate-y-[-2px] hover:border-accent-primary transition-all shadow-sm">
                            <i className="ph-fill ph-map-pin text-accent-primary text-[1.5rem]"></i>
                            <div>
                                <div className="text-text-muted text-[0.9rem]">Location</div>
                                <div className="font-medium">Palm Beach, USA</div>
                            </div>
                        </div>

                        <div className="contact-card bg-white border border-border-light rounded-main p-[1.5rem] mb-4 flex items-center gap-4 hover:translate-y-[-2px] hover:border-accent-primary transition-all shadow-sm">
                            <i className="ph-fill ph-clock text-accent-primary text-[1.5rem]"></i>
                            <div>
                                <div className="text-text-muted text-[0.9rem]">Response Time</div>
                                <div className="font-medium">Within 24 hours</div>
                            </div>
                        </div>

                        <div className="gray-box bg-bg-surface p-[2rem] rounded-main border border-border-light mt-[3rem]">
                            <h3 className="text-[1.25rem] font-semibold mb-[1.5rem] text-[#0A1628]">What Happens Next</h3>
                            <ol className="pl-[1.2rem] text-text-secondary leading-[2] font-medium list-decimal">
                                <li>Email us or schedule a call</li>
                                <li>45-min discovery session</li>
                                <li>Custom proposal within 5 days</li>
                                <li>Start building in Week 1</li>
                            </ol>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div>
                        <div className="form-container border-2 border-accent-primary bg-[rgba(124,58,237,0.05)] p-[2rem] text-center mb-8 rounded-main">
                            <h3 className="mb-2 text-[#0A1628] font-semibold">Prefer a live discovery call?</h3>
                            <p className="text-text-muted mb-6">Skip the form and book a 45-minute discovery call directly with our team.</p>
                            <a
                                href="https://boostwithlaunchpad.com/contact"
                                className="btn btn-primary w-full p-4 text-[1.1rem] rounded-[6px] font-bold no-underline"
                            >
                                Book a Discovery Call
                            </a>
                        </div>

                        <div className="form-container bg-white p-[2.5rem] border border-border-light rounded-main shadow-sm max-md:p-[1.5rem]">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-6">
                                    <label className="block mb-2 text-[#0A1628] font-semibold">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full p-4 border border-border-strong rounded-[6px] font-inter focus:border-accent-primary outline-none transition-colors"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>

                                <div className="mb-6">
                                    <label className="block mb-2 text-[#0A1628] font-semibold">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full p-4 border border-border-strong rounded-[6px] font-inter focus:border-accent-primary outline-none transition-colors"
                                        placeholder="you@agency.com"
                                        required
                                    />
                                </div>

                                <div className="mb-6">
                                    <label className="block mb-2 text-[#0A1628] font-semibold">Agency Name</label>
                                    <input
                                        type="text"
                                        name="agency"
                                        value={formData.agency}
                                        onChange={handleChange}
                                        className="w-full p-4 border border-border-strong rounded-[6px] font-inter focus:border-accent-primary outline-none transition-colors"
                                        placeholder="Agency Name"
                                        required
                                    />
                                </div>

                                <div className="mb-8">
                                    <label className="block mb-2 text-[#0A1628] font-semibold">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full p-4 border border-border-strong rounded-[6px] min-h-[120px] font-inter focus:border-accent-primary outline-none transition-colors"
                                        placeholder="How can we help?"
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn btn-primary w-full p-4 text-[1.1rem] rounded-[6px] font-bold disabled:opacity-70"
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
