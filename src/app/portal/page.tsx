export default function Portal() {
    return (
        <main className="pt-[80px]">
            <section className="py-[5rem] text-center bg-white">
                <div className="container-custom max-w-[800px] mx-auto">
                    <h1 className="text-[3.5rem] font-bold leading-[1.2] mb-6 tracking-tight max-md:text-[2.5rem]">
                        The Visibility Portal
                    </h1>
                    <p className="text-[1.25rem] text-text-secondary mb-[2.5rem] max-md:text-[1.1rem]">
                        AI shouldn&apos;t be a black box. See exactly what your agents are doing, how much revenue they&apos;re generating, and where the bottlenecks are.
                    </p>
                </div>
            </section>

            <section className="py-[5rem] bg-bg-surface overflow-hidden">
                <div className="container-custom">
                    <div className="grid grid-cols-2 gap-[4rem] items-center max-md:grid-cols-1 max-md:gap-[3rem]">
                        <div>
                            <h2 className="text-[2.5rem] font-bold mb-6 text-[#0A1628]">Real-Time Decision Intelligence</h2>
                            <p className="text-text-secondary text-[1.1rem] leading-relaxed mb-8">
                                Our custom portals give you a single source of truth for all automated operations. Monitor lead flow, track conversion rates, and manage human-in-the-loop approvals from a central dashboard.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { title: "Revenue Attribution", desc: "Track exactly which dollars came from automated flows." },
                                    { title: "Agent Performance", desc: "Monitor success rates and processing times per agent." },
                                    { title: "Approval Queue", desc: "Review sensitive agent drafts before they go live." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary shrink-0">
                                            <i className="ph-bold ph-check"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#0A1628]">{item.title}</h4>
                                            <p className="text-text-secondary text-[0.95rem]">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-[#0A1628] rounded-[16px] p-2 shadow-2xl relative z-10 border border-white/10">
                                <div className="bg-[#1E293B] rounded-[12px] p-6 text-white min-h-[400px]">
                                    <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                            <span className="ml-4 font-mono text-xs opacity-50">v2.4.0_STABLE</span>
                                        </div>
                                        <div className="text-accent-primary font-bold tracking-widest text-xs">PORTAL LIVE</div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mb-8">
                                        <div className="bg-white/5 p-4 rounded-[8px] border border-white/5">
                                            <div className="text-[0.7rem] uppercase tracking-wider opacity-50 mb-1">Weekly Leads</div>
                                            <div className="text-[1.5rem] font-bold">142</div>
                                            <div className="text-[#22c55e] text-[0.7rem] font-bold">+14% vs LW</div>
                                        </div>
                                        <div className="bg-white/5 p-4 rounded-[8px] border border-white/5">
                                            <div className="text-[0.7rem] uppercase tracking-wider opacity-50 mb-1">ROI Multiplier</div>
                                            <div className="text-[1.5rem] font-bold">4.2x</div>
                                            <div className="text-accent-primary text-[0.7rem] font-bold">Projected 5.1x</div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="text-[0.8rem] font-bold opacity-70 uppercase tracking-widest mb-4">Active Pipeline</div>
                                        <div className="flex justify-between items-center p-3 bg-white/5 rounded-[6px] text-xs">
                                            <span>Lead Scoring Agent</span>
                                            <span className="text-[#22c55e]">RUNNING</span>
                                        </div>
                                        <div className="flex justify-between items-center p-3 bg-white/5 rounded-[6px] text-xs">
                                            <span>Contract Draftsman</span>
                                            <span className="text-yellow-500">PENDING APPROVAL</span>
                                        </div>
                                        <div className="flex justify-between items-center p-3 bg-white/5 rounded-[6px] text-xs">
                                            <span>Data Enrichment Flow</span>
                                            <span className="text-[#22c55e]">RUNNING</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-[-20px] left-[-20px] w-full h-full bg-accent-primary/20 rounded-[16px] z-0"></div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
