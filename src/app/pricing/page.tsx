export default function Pricing() {

    return (
        <main className="pt-[80px]">
            <section className="py-[5rem] text-center bg-white">
                <div className="container-custom max-w-[800px] mx-auto">
                    <h1 className="text-[3.5rem] font-bold leading-[1.2] mb-6 tracking-tight max-md:text-[2.5rem]">
                        Simple, Performance-Based Pricing
                    </h1>
                    <p className="text-[1.25rem] text-text-secondary mb-[2.5rem] max-md:text-[1.1rem]">
                        No complex contracts. No hidden fees. Just engineering that pays for itself.
                    </p>
                </div>
            </section>

            <section className="py-[5rem] bg-bg-surface">
                <div className="container-custom">
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[2rem] max-w-[1000px] mx-auto">

                        {/* Standard Plan */}
                        <div className="bg-white p-[3rem_2.5rem] rounded-main border border-border-light shadow-sm flex flex-col h-full hover:border-accent-primary transition-all">
                            <div className="text-accent-primary font-bold text-[0.9rem] uppercase tracking-[2px] mb-4">The Engine</div>
                            <h3 className="text-[2rem] font-bold text-[#0A1628] mb-2">Custom Agent</h3>
                            <div className="flex items-baseline gap-1 my-6">
                                <span className="text-[3rem] font-bold text-[#0A1628] tracking-tight">$750</span>
                                <span className="text-text-muted text-[1.2rem]">/mo</span>
                            </div>
                            <p className="text-text-secondary mb-8">Perfect for agencies looking to automate a single high-impact workflow.</p>
                            <ul className="space-y-4 mb-10 grow">
                                <li className="flex items-center gap-3 text-text-secondary text-[0.95rem]">
                                    <i className="ph-fill ph-check-circle text-accent-primary text-[1.2rem]"></i>
                                    1 Custom AI Agent
                                </li>
                                <li className="flex items-center gap-3 text-text-secondary text-[0.95rem]">
                                    <i className="ph-fill ph-check-circle text-accent-primary text-[1.2rem]"></i>
                                    CRM & API Integration
                                </li>
                                <li className="flex items-center gap-3 text-text-secondary text-[0.95rem]">
                                    <i className="ph-fill ph-check-circle text-accent-primary text-[1.2rem]"></i>
                                    Standard Analytics Portal
                                </li>
                                <li className="flex items-center gap-3 text-text-secondary text-[0.95rem]">
                                    <i className="ph-fill ph-check-circle text-accent-primary text-[1.2rem]"></i>
                                    4-Week Deployment
                                </li>
                            </ul>
                            <a href="https://boostwithlaunchpad.com" className="btn btn-primary w-full py-4 rounded-[6px] font-bold no-underline">Get Started</a>
                        </div>

                        {/* Enterprise Plan */}
                        <div className="bg-[#0A1628] p-[3rem_2.5rem] rounded-main border border-accent-primary text-white shadow-lg flex flex-col h-full relative overflow-hidden">
                            <div className="absolute top-4 right-[-35px] bg-accent-primary text-white py-1 px-10 rotate-45 text-[0.7rem] font-bold uppercase tracking-widest">Growth</div>
                            <div className="text-accent-primary font-bold text-[0.9rem] uppercase tracking-[2px] mb-4">The Infrastructure</div>
                            <h3 className="text-[2rem] font-bold mb-2">Multi-Agent System</h3>
                            <div className="flex items-baseline gap-1 my-6">
                                <span className="text-[3rem] font-bold tracking-tight">Custom</span>
                            </div>
                            <p className="text-[#94A3B8] mb-8">For agencies needing full-scale automated operations and complex pipelines.</p>
                            <ul className="space-y-4 mb-10 grow">
                                <li className="flex items-center gap-3 text-[#E2E8F0] text-[0.95rem]">
                                    <i className="ph-fill ph-check-circle text-accent-primary text-[1.2rem]"></i>
                                    Unlimited AI Agents
                                </li>
                                <li className="flex items-center gap-3 text-[#E2E8F0] text-[0.95rem]">
                                    <i className="ph-fill ph-check-circle text-accent-primary text-[1.2rem]"></i>
                                    Deep Infrastructure Audit
                                </li>
                                <li className="flex items-center gap-3 text-[#E2E8F0] text-[0.95rem]">
                                    <i className="ph-fill ph-check-circle text-accent-primary text-[1.2rem]"></i>
                                    Custom KPI Dashboards
                                </li>
                                <li className="flex items-center gap-3 text-[#E2E8F0] text-[0.95rem]">
                                    <i className="ph-fill ph-check-circle text-accent-primary text-[1.2rem]"></i>
                                    24/7 Priority Support
                                </li>
                                <li className="flex items-center gap-3 text-[#E2E8F0] text-[0.95rem]">
                                    <i className="ph-fill ph-check-circle text-accent-primary text-[1.2rem]"></i>
                                    Dedicated Engineering Team
                                </li>
                            </ul>
                            <a href="https://boostwithlaunchpad.com" className="btn bg-white text-[#0A1628] w-full py-4 rounded-[6px] font-bold hover:bg-bg-surface no-underline">Contact Sales</a>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
