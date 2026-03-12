"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <header className="h-[80px] bg-white border-b border-[#E2E8F0] fixed top-0 left-0 w-full z-[1000] flex items-center transition-all">
                <div className="container-custom flex justify-between items-center w-full relative px-[40px] max-md:px-[20px]">
                    <Link href="/" className="logo flex items-center z-[20] no-underline">
                        <Image
                            src="/header-logo.png"
                            alt="Launchpad Automation"
                            width={180}
                            height={38}
                            className="h-[38px] w-auto block max-md:h-[32px]"
                        />
                    </Link>

                    <nav className="nav-center absolute left-1/2 -translate-x-1/2 flex gap-[16px] items-center max-md:hidden">
                        <Link href="/" className="text-[#475569] text-[0.95rem] font-medium hover:text-[#2563EB] transition-colors no-underline">Home</Link>
                        <Link href="/solutions" className="text-[#475569] text-[0.95rem] font-medium hover:text-[#2563EB] transition-colors no-underline">Solutions</Link>
                        <Link href="/portal" className="text-[#475569] text-[0.95rem] font-medium hover:text-[#2563EB] transition-colors no-underline">The Portal</Link>
                        <Link href="/pricing" className="text-[#475569] text-[0.95rem] font-medium hover:text-[#2563EB] transition-colors no-underline">Pricing</Link>
                        <Link href="/requests" className="text-[#475569] text-[0.95rem] font-medium hover:text-[#2563EB] transition-colors no-underline">Requests</Link>
                    </nav>

                    <div className="header-right flex items-center gap-4 z-[20]">
                        <a
                            href="https://boostwithlaunchpad.com/contact"
                            className="bg-[#2563EB] text-white px-[1.2rem] py-[0.6rem] rounded-[6px] font-semibold text-[0.95rem] hover:bg-[#3B82F6] transition-colors no-underline max-md:px-[1rem] max-md:py-[0.5rem] max-md:text-[0.9rem]"
                        >
                            Book Discovery
                        </a>
                        <button
                            className="hidden max-md:block bg-none border-none text-[1.5rem] text-[#0A1628] cursor-pointer"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <i className="ph ph-list"></i>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} fixed top-[80px] left-0 w-full bg-white border-b border-[#E2E8F0] p-4 flex-col gap-4 shadow-lg md:hidden`}>
                    <Link href="/" className="py-2 font-semibold text-accent-primary no-underline">Home</Link>
                    <Link href="/solutions" className="py-2 text-[#475569] no-underline">Solutions</Link>
                    <Link href="/portal" className="py-2 text-[#475569] no-underline">The Portal</Link>
                    <Link href="/pricing" className="py-2 text-[#475569] no-underline">Pricing</Link>
                    <Link href="/requests" className="py-2 text-[#475569] no-underline">Requests</Link>
                    <a
                        href="https://boostwithlaunchpad.com/contact"
                        className="btn-primary mt-4 py-4 text-center rounded-[6px] no-underline"
                    >
                        Book Discovery
                    </a>
                </div>
            </header>
        </>
    );
}
