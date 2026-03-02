"use client";

import Link from "next/link";


export default function Footer() {
    const openCalendly = (e: React.MouseEvent) => {
        e.preventDefault();
        const url = process.env.NEXT_PUBLIC_CALENDLY_URL;
        if ((window as any).Calendly && url) {
            (window as any).Calendly.initPopupWidget({ url });
        }
    };

    return (
        <footer className="bg-[#1E293B] py-[60px] text-[#F8FAFC]">
            <div className="container-custom">
                <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-[3rem] mb-[4rem] max-md:grid-cols-1">
                    <div className="footer-col">
                        <h4 className="text-white text-[1.1rem] font-bold mb-[1.5rem] font-inter">Launchpad Automation</h4>
                        <p className="text-[#94A3B8] leading-[1.6] text-[0.95rem]">
                            We run a marketing agency ourselves. We understand the pressure of client
                            retention and manual processes. We build what we'd want.
                        </p>
                    </div>
                    <div className="footer-col">
                        <h4 className="text-white text-[1.1rem] font-bold mb-[1.5rem] font-inter">Sitemap</h4>
                        <Link href="/" className="text-[#94A3B8] block mb-[12px] text-[0.95rem] hover:text-white transition-colors no-underline">Home</Link>
                        <Link href="/solutions" className="text-[#94A3B8] block mb-[12px] text-[0.95rem] hover:text-white transition-colors no-underline">Solutions</Link>
                        <Link href="/portal" className="text-[#94A3B8] block mb-[12px] text-[0.95rem] hover:text-white transition-colors no-underline">The Portal</Link>
                        <Link href="/pricing" className="text-[#94A3B8] block mb-[12px] text-[0.95rem] hover:text-white transition-colors no-underline">Pricing</Link>
                    </div>
                    <div className="footer-col">
                        <h4 className="text-white text-[1.1rem] font-bold mb-[1.5rem] font-inter">Legal</h4>
                        <Link href="/privacy" className="text-[#94A3B8] block mb-[12px] text-[0.95rem] hover:text-white transition-colors no-underline">Privacy Policy</Link>
                        <Link href="/terms" className="text-[#94A3B8] block mb-[12px] text-[0.95rem] hover:text-white transition-colors no-underline">Terms of Service</Link>
                    </div>
                    <div className="footer-col">
                        <h4 className="text-white text-[1.1rem] font-bold mb-[1.5rem] font-inter">Contact</h4>
                        <a
                            href="#"
                            onClick={openCalendly}
                            className="text-[#94A3B8] block mb-[12px] text-[0.95rem] hover:text-white transition-colors no-underline"
                        >
                            Schedule Call
                        </a>
                        <p className="text-[#94A3B8] mt-[12px] text-[0.95rem]">Palm Beach, USA</p>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-[2rem] text-center text-[#64748B] text-[0.85rem]">
                    &copy; {new Date().getFullYear()} Launchpad Automation. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
