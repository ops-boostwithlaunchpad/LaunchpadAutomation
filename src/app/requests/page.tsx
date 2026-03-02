export default function Requests() {
    return (
        <main className="pt-[80px]">
            <section className="py-[5rem] text-center bg-white">
                <div className="container-custom max-w-[800px] mx-auto">
                    <h1 className="text-[3.5rem] font-bold leading-[1.2] mb-6 tracking-tight max-md:text-[2.5rem]">
                        Service Requests
                    </h1>
                    <p className="text-[1.25rem] text-text-secondary mb-[2.5rem] max-md:text-[1.1rem]">
                        Manage your custom AI build and request new features or integrations.
                    </p>
                </div>
            </section>

            <section className="py-[5rem] bg-bg-surface">
                <div className="container-custom max-w-[800px] mx-auto text-center">
                    <div className="bg-white p-[4rem] rounded-main border border-border-light shadow-sm max-md:p-8">
                        <div className="w-[80px] h-[80px] bg-bg-surface rounded-full flex items-center justify-center mx-auto mb-6 text-text-muted">
                            <i className="ph ph-lock-key text-[2.5rem]"></i>
                        </div>
                        <h2 className="text-[2rem] font-bold mb-4 text-[#0A1628]">Client Login Required</h2>
                        <p className="text-text-secondary mb-8">
                            The Request Center is only available to active Launchpad Automation clients. Please log in to your portal to manage your build.
                        </p>
                        <div className="flex gap-4 justify-center max-md:flex-col">
                            <a href="/portal" className="btn btn-primary px-8 py-4 rounded-[6px] font-bold no-underline">Log in to Portal</a>
                            <a href="/contact" className="btn btn-outline px-8 py-4 rounded-[6px] font-bold no-underline">Become a Client</a>
                        </div>
                    </div>

                    <div className="mt-12 text-left bg-accent-primary/5 p-8 rounded-main border border-accent-primary/10">
                        <h4 className="text-[#0A1628] font-bold mb-4">What can you request in the center?</h4>
                        <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
                            <div className="flex gap-3">
                                <i className="ph-bold ph-plus-circle text-accent-primary shrink-0 mt-1"></i>
                                <span className="text-text-secondary text-[0.95rem]">New API integrations (Slack, CRM, etc.)</span>
                            </div>
                            <div className="flex gap-3">
                                <i className="ph-bold ph-plus-circle text-accent-primary shrink-0 mt-1"></i>
                                <span className="text-text-secondary text-[0.95rem]">Prompt engineering adjustments</span>
                            </div>
                            <div className="flex gap-3">
                                <i className="ph-bold ph-plus-circle text-accent-primary shrink-0 mt-1"></i>
                                <span className="text-text-secondary text-[0.95rem]">Custom reporting widget builds</span>
                            </div>
                            <div className="flex gap-3">
                                <i className="ph-bold ph-plus-circle text-accent-primary shrink-0 mt-1"></i>
                                <span className="text-text-secondary text-[0.95rem]">System scalability upgrades</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
