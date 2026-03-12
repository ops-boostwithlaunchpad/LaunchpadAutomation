export default function Solutions() {

    return (
        <main className="pt-[80px]">
            <section className="py-[5rem] text-center bg-white">
                <div className="container-custom max-w-[800px] mx-auto">
                    <h1 className="text-[3.5rem] font-bold leading-[1.2] mb-6 tracking-tight max-md:text-[2.5rem]">
                        Real Results for Modern Agencies
                    </h1>
                    <p className="text-[1.25rem] text-text-secondary mb-[2.5rem] max-md:text-[1.1rem]">
                        We don&apos;t just build bots. We build automated revenue engines. Explore how we solve specific agency bottlenecks.
                    </p>
                </div>
            </section>

            <section className="py-[5rem] bg-bg-surface">
                <div className="container-custom">
                    <div className="grid grid-cols-2 gap-[4rem] max-md:grid-cols-1 max-md:gap-[3rem]">
                        {[
                            {
                                title: "Lead Qualification Agent",
                                desc: "Stop wasting hours on discovery calls with unqualified leads. Our agents qualify every incoming inquiry based on your specific criteria before they ever reach your calendar.",
                                impact: "70% Reduction in manual vetting time",
                                tags: ["CRM Integration", "Natural Language", "Auto-Scheduling"]
                            },
                            {
                                title: "Client Onboarding Engine",
                                desc: "The first 24 hours of a client relationship are the most critical. Automate the entire intake process from contract signature to project kickoff.",
                                impact: "100% Consistency in client intake",
                                tags: ["Document Parsing", "SOP Automation", "Team Notifications"]
                            },
                            {
                                title: "Custom Reporting Portal",
                                desc: "Transparent, real-time reporting that keeps clients happy and reduces churn. No more manual monthly PDFs.",
                                impact: "3.2x Average increase in stickiness",
                                tags: ["Data Visualization", "Client View", "White-labeled"]
                            },
                            {
                                title: "Content Repurposing Agent",
                                desc: "Turn a single long-form video or blog post into 15+ social media assets across all platforms, perfectly formatted and scheduled.",
                                impact: "15hr/week Saved for creative teams",
                                tags: ["Multi-modal AI", "Auto-Formatting", "API Pipeline"]
                            }
                        ].map((sol, i) => (
                            <div key={i} className="bg-white p-[2.5rem] rounded-main border border-border-light shadow-sm hover:translate-y-[-4px] hover:border-accent-primary transition-all">
                                <h3 className="text-[1.5rem] font-semibold mb-4 text-[#0A1628]">{sol.title}</h3>
                                <p className="text-text-secondary mb-6 leading-relaxed">{sol.desc}</p>
                                <div className="bg-accent-primary/5 p-4 rounded-main border border-accent-primary/10 mb-6">
                                    <div className="text-accent-primary font-bold text-[0.9rem] uppercase tracking-wider mb-1">Impact</div>
                                    <div className="text-[#0A1628] font-bold text-[1.1rem]">{sol.impact}</div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {sol.tags.map((tag, j) => (
                                        <span key={j} className="bg-bg-surface px-3 py-1 rounded-full text-[0.75rem] font-semibold text-text-muted border border-border-light">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-[80px] text-center bg-[#0A1628] text-white">
                <div className="container-custom">
                    <h2 className="text-white text-[2.5rem] font-bold mb-4">Want to see a custom demo?</h2>
                    <p className="text-[#94A3B8] text-[1.125rem] mb-[2.5rem] max-w-[600px] mx-auto">
                        Book a discovery call and we&apos;ll show you how we can automate your specific workflow.
                    </p>
                    <a
                        href="https://boostwithlaunchpad.com/contact"
                        className="bg-white text-[#0A1628] font-bold py-[1rem] px-[2.5rem] rounded-main text-[1.1rem] hover:bg-bg-surface transition-all inline-block no-underline"
                    >
                        Schedule Discovery Call
                    </a>
                </div>
            </section>
        </main>
    );
}
