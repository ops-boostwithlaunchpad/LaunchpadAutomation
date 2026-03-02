"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Onboarding() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 6;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [keywords, setKeywords] = useState<string[]>([]);
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    const [formData, setFormData] = useState({
        businessName: "",
        category: "",
        description: "",
        phone: "",
        email: "",
        website: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        authorized: false,
    });

    const titles = ["Business Setup", "Contact Details", "Location", "Business Hours", "Target Keywords", "Authorization"];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    const nextStep = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    useEffect(() => {
        if (currentStep === 5) {
            setIsAnalyzing(true);
            setTimeout(() => {
                const category = formData.category || "Business";
                const city = formData.city || "Local";
                setKeywords([
                    `${category} near me`,
                    `best ${category} in ${city}`,
                    `${category} services ${city}`,
                    `top rated ${category}`,
                    `${city} ${category} experts`
                ]);
                setIsAnalyzing(false);
            }, 1500);
        }
    }, [currentStep, formData.category, formData.city]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/onboarding", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    keywords: keywords.join(", "),
                }),
            });

            if (response.ok) {
                setIsSuccess(true);
                window.scrollTo(0, 0);
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

    if (isSuccess) {
        return (
            <main className="pt-[100px] bg-bg-surface min-h-screen">
                <div className="container-custom max-w-[600px] mx-auto bg-white p-[2.5rem] rounded-main shadow-sm text-center">
                    <div className="w-[80px] h-[80px] bg-[#DCFCE7] text-[#166534] rounded-full flex items-center justify-center mx-auto mb-6">
                        <i className="ph-fill ph-check text-[3rem]"></i>
                    </div>
                    <h2 className="text-[2rem] font-bold mb-4">Setup Complete!</h2>
                    <p className="text-text-muted mb-8">
                        Your business profile has been created. Our automated engine has already started optimizing your Google Business Profile.
                    </p>
                    <div className="bg-bg-surface p-[1.5rem] rounded-main mb-8 text-left">
                        <p className="font-bold mb-2">Next Steps:</p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2"><i className="ph-fill ph-check-circle text-accent-primary"></i> Check your email for login details</li>
                            <li className="flex items-center gap-2"><i className="ph-fill ph-check-circle text-accent-primary"></i> We will request manager access via email</li>
                            <li className="flex items-center gap-2"><i className="ph-fill ph-check-circle text-accent-primary"></i> First rank report arrives in 24 hours</li>
                        </ul>
                    </div>
                    <button onClick={() => router.push("/")} className="btn btn-primary w-full p-4 rounded-[6px] font-bold">Go to Dashboard (Simulation)</button>
                </div>
            </main>
        );
    }

    return (
        <main className="pt-[100px] bg-bg-surface min-h-screen">
            <div className="container-custom max-w-[700px] mx-auto">

                {/* Progress Bar */}
                <div className="progress-container mb-8">
                    <div className="h-2 bg-white rounded-full overflow-hidden mb-2">
                        <div
                            className="h-full bg-accent-primary transition-all duration-500"
                            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                        ></div>
                    </div>
                    <div className="flex justify-between text-[0.9rem] font-medium">
                        <span className="text-text-muted">Step {currentStep} of {totalSteps}</span>
                        <span className="text-accent-primary">{titles[currentStep - 1]}</span>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="bg-white p-[2.5rem] rounded-main shadow-sm max-md:p-[1.5rem]">

                    {/* Step 1: Basic Info */}
                    {currentStep === 1 && (
                        <div className="form-step">
                            <h2 className="text-[1.5rem] font-bold mb-6">Tell us about your business</h2>
                            <div className="mb-4">
                                <label className="block mb-2 font-semibold">Business Name</label>
                                <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} className="w-full p-4 border border-border-strong rounded-[6px] outline-none focus:border-accent-primary" placeholder="e.g. Joe's Plumbing" required />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 font-semibold">Primary Category</label>
                                <input type="text" name="category" value={formData.category} onChange={handleChange} className="w-full p-4 border border-border-strong rounded-[6px] outline-none focus:border-accent-primary" placeholder="e.g. Plumber, Dentist, Lawyer" required />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 font-semibold">Description</label>
                                <textarea name="description" value={formData.description} onChange={handleChange} className="w-full p-4 border border-border-strong rounded-[6px] outline-none focus:border-accent-primary min-h-[100px]" placeholder="Briefly describe what you do..."></textarea>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Contact Info */}
                    {currentStep === 2 && (
                        <div className="form-step">
                            <h2 className="text-[1.5rem] font-bold mb-6">Contact Details</h2>
                            <div className="grid grid-cols-2 gap-4 mb-4 max-md:grid-cols-1">
                                <div>
                                    <label className="block mb-2 font-semibold">Primary Phone</label>
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-4 border border-border-strong rounded-[6px] outline-none focus:border-accent-primary" required />
                                </div>
                                <div>
                                    <label className="block mb-2 font-semibold">Email Address</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-4 border border-border-strong rounded-[6px] outline-none focus:border-accent-primary" required />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 font-semibold">Website</label>
                                <input type="url" name="website" value={formData.website} onChange={handleChange} className="w-full p-4 border border-border-strong rounded-[6px] outline-none focus:border-accent-primary" placeholder="https://" />
                            </div>
                        </div>
                    )}

                    {/* Step 3: Location */}
                    {currentStep === 3 && (
                        <div className="form-step">
                            <h2 className="text-[1.5rem] font-bold mb-6">Location</h2>
                            <div className="mb-4">
                                <label className="block mb-2 font-semibold">Street Address</label>
                                <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full p-4 border border-border-strong rounded-[6px] outline-none focus:border-accent-primary" required />
                            </div>
                            <div className="grid grid-cols-3 gap-4 mb-4 max-md:grid-cols-1">
                                <div>
                                    <label className="block mb-2 font-semibold">City</label>
                                    <input type="text" name="city" value={formData.city} onChange={handleChange} className="w-full p-4 border border-border-strong rounded-[6px] outline-none focus:border-accent-primary" required />
                                </div>
                                <div>
                                    <label className="block mb-2 font-semibold">State</label>
                                    <input type="text" name="state" value={formData.state} onChange={handleChange} className="w-full p-4 border border-border-strong rounded-[6px] outline-none focus:border-accent-primary" required />
                                </div>
                                <div>
                                    <label className="block mb-2 font-semibold">Zip Code</label>
                                    <input type="text" name="zip" value={formData.zip} onChange={handleChange} className="w-full p-4 border border-border-strong rounded-[6px] outline-none focus:border-accent-primary" required />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 4: Hours */}
                    {currentStep === 4 && (
                        <div className="form-step">
                            <h2 className="text-[1.5rem] font-bold mb-6">Business Hours</h2>
                            <p className="text-text-secondary mb-4">Standard hours (9 AM - 5 PM) applied. You can edit this later.</p>
                            <div className="p-4 bg-bg-surface rounded-[6px] flex justify-between font-medium">
                                <span>Monday - Friday</span>
                                <span>09:00 - 17:00</span>
                            </div>
                        </div>
                    )}

                    {/* Step 5: Keywords */}
                    {currentStep === 5 && (
                        <div className="form-step">
                            <h2 className="text-[1.5rem] font-bold mb-6">Target Keywords</h2>
                            <p className="text-text-secondary mb-6">Our AI recommends these keywords based on your category and city.</p>

                            {isAnalyzing ? (
                                <div className="text-center py-8">
                                    <i className="ph-bold ph-spinner ph-spin text-accent-primary text-[2rem]"></i>
                                    <p className="mt-2 font-medium">Analyzing search volume...</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-2 gap-2 max-md:grid-cols-1">
                                    {keywords.map((kw, i) => (
                                        <div key={i} className="bg-[rgba(124,58,237,0.05)] border border-accent-primary/20 p-3 rounded-[6px] text-[0.85rem] flex items-center gap-2">
                                            <i className="ph-fill ph-check-circle text-accent-primary"></i>
                                            <span>{kw}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Step 6: Authorization */}
                    {currentStep === 6 && (
                        <div className="form-step">
                            <h2 className="text-[1.5rem] font-bold mb-6">Final Step: Authorization</h2>
                            <p className="text-text-secondary mb-6">To optimize your profile, we need manager access.</p>
                            <div className="bg-[rgba(124,58,237,0.05)] border border-accent-secondary p-6 rounded-main mb-6">
                                <label className="flex gap-4 items-start cursor-pointer">
                                    <input type="checkbox" name="authorized" checked={formData.authorized} onChange={handleChange} required className="mt-1" />
                                    <span className="text-[0.95rem] leading-[1.5] font-medium">
                                        I authorize Launchpad Automation to manage my Google Business Profile listings.
                                    </span>
                                </label>
                            </div>
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="mt-8 pt-6 border-t border-border-light flex justify-between">
                        {currentStep > 1 && (
                            <button type="button" onClick={prevStep} className="btn btn-outline">Back</button>
                        )}
                        {currentStep < totalSteps ? (
                            <button type="button" onClick={nextStep} className="btn btn-primary ml-auto">Next Step</button>
                        ) : (
                            <button type="submit" disabled={isSubmitting} className="btn btn-primary ml-auto flex items-center gap-2">
                                {isSubmitting ? <i className="ph-bold ph-spinner ph-spin"></i> : null}
                                Complete Setup
                            </button>
                        )}
                    </div>

                </form>
            </div>
        </main>
    );
}
