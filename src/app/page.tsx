import Image from "next/image";


export default function Home() {

  return (
    <main className="pt-[80px]">
      {/* Hero Section */}
      <section className="hero py-[5rem] text-center bg-white">
        <div className="container-custom max-w-[800px] mx-auto">
          <div className="subtitle text-accent-primary font-semibold mb-4 text-[0.9rem] uppercase tracking-widest">
            For Marketing Agencies
          </div>
          <h1 className="text-[3.5rem] font-bold leading-[1.2] mb-6 tracking-tight max-md:text-[2.5rem]">
            Custom AI Agents Built For Your Agency
          </h1>
          <p className="hero-subtitle text-[1.25rem] text-text-secondary mb-[2.5rem] max-w-[600px] mx-auto max-md:text-[1.1rem]">
            We build custom AI agents designed for <strong>YOUR</strong> specific problems.
            Full turnkey deployment in 30 days or less.
          </p>
          <div className="cta-group flex gap-4 justify-center max-md:flex-col max-md:w-full">
            <a
              href="https://boostwithlaunchpad.com/contact"
              className="btn btn-primary px-[1.6rem] py-[0.8rem] rounded-[6px] font-semibold text-white no-underline max-md:w-full"
            >
              Schedule Discovery Call
            </a>
            <a
              href="/solutions"
              className="btn btn-outline px-[1.6rem] py-[0.8rem] rounded-[6px] font-semibold border border-border-strong no-underline max-md:w-full"
            >
              View Case Studies
            </a>
          </div>

          <div className="hero-stats flex justify-center gap-[4rem] mt-[4rem] pt-[3rem] border-t border-border-light max-md:flex-col max-md:gap-[2rem] max-md:mt-[2rem] max-md:pt-[2rem]">
            <div className="text-center">
              <h3 className="text-[1.5rem] font-bold">30 Days</h3>
              <p className="text-text-muted text-[0.9rem]">To Deployment</p>
            </div>
            <div className="text-center">
              <h3 className="text-[1.5rem] font-bold">100%</h3>
              <p className="text-text-muted text-[0.9rem]">Custom Built</p>
            </div>
            <div className="text-center">
              <h3 className="text-[1.5rem] font-bold">$750+</h3>
              <p className="text-text-muted text-[0.9rem]">Monthly Plans</p>
            </div>
            <div className="text-center">
              <h3 className="text-[1.5rem] font-bold">24/7</h3>
              <p className="text-text-muted text-[0.9rem]">Operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="bg-[#0e1015] py-[2rem]">
        <div className="container-custom">
          <p className="text-text-muted text-center text-[0.9rem] uppercase tracking-[2px] mb-8">
            Seamlessly Integrates With Your Stack
          </p>
          <div className="logo-grid flex flex-nowrap justify-center items-center gap-[3rem] opacity-60 overflow-x-hidden w-full max-md:flex-wrap max-md:gap-[1.5rem] max-md:py-[2rem]">
            <div className="logo-item font-space text-[1.1rem] text-text-muted flex items-center gap-[0.5rem] font-semibold whitespace-nowrap max-md:text-[0.95rem]">
              <i className="ph-bold ph-google-logo"></i> Google Workspace
            </div>
            <div className="logo-item font-space text-[1.1rem] text-text-muted flex items-center gap-[0.5rem] font-semibold whitespace-nowrap max-md:text-[0.95rem]">
              <i className="ph-bold ph-chat-circle-dots"></i> Slack
            </div>
            <div className="logo-item font-space text-[1.1rem] text-text-muted flex items-center gap-[0.5rem] font-semibold whitespace-nowrap max-md:text-[0.95rem]">
              <i className="ph-bold ph-users-three"></i> Salesforce
            </div>
            <div className="logo-item font-space text-[1.1rem] text-text-muted flex items-center gap-[0.5rem] font-semibold whitespace-nowrap max-md:text-[0.95rem]">
              <i className="ph-bold ph-chart-bar"></i> HubSpot
            </div>
            <div className="logo-item font-space text-[1.1rem] text-text-muted flex items-center gap-[0.5rem] font-semibold whitespace-nowrap max-md:text-[0.95rem]">
              <i className="ph-bold ph-envelope-simple"></i> Outlook
            </div>
            <div className="logo-item font-space text-[1.1rem] text-text-muted flex items-center gap-[0.5rem] font-semibold whitespace-nowrap max-md:text-[0.95rem]">
              <i className="ph-bold ph-square-logo"></i> Stripe
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-[5rem]">
        <div className="container-custom">
          <div className="text-center mb-[3rem]">
            <h2 className="text-[2.5rem] font-semibold">Discovery First, Solution Second</h2>
            <p className="text-text-secondary max-w-[600px] mx-auto mt-[1rem]">
              Most AI vendors try to sell you what they've already built. We don't do that. We are engineers who build what you actually need, not what we want to sell.
            </p>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[1.5rem] mt-[3rem]">
            {[
              { step: "1", title: "Discovery", desc: "<strong>Week 1:</strong> We identify YOUR specific pain points and revenue leaks. We perform a deep-dive audit of your current SOPs." },
              { step: "2", title: "Analysis", desc: "<strong>Week 1:</strong> We evaluate exactly what's possible with current AI models. We design the architecture and gain your approval before writing code." },
              { step: "3", title: "Custom Build", desc: "<strong>Week 2-3:</strong> We build your agent + custom analytics portal. We connect APIs, fine-tune models, and stress-test the system." },
              { step: "4", title: "Deploy", desc: "<strong>Week 4:</strong> We implement, train, and go live. We hold hand-off sessions with your team to ensure adoption." },
            ].map((item, i) => (
              <div key={i} className="process-card bg-white p-[2.5rem_2rem] border border-border-light rounded-main shadow-sm hover:translate-y-[-3px] hover:shadow-md hover:border-accent-primary transition-all flex flex-col h-full">
                <div className="step-number bg-bg-surface text-accent-primary w-[36px] h-[36px] flex items-center justify-center font-bold rounded-[8px] mb-[1.5rem] font-space text-[1.2rem]">
                  {item.step}
                </div>
                <h3 className="text-[1.5rem] font-semibold mb-2">{item.title}</h3>
                <p className="text-text-secondary mt-1" dangerouslySetInnerHTML={{ __html: item.desc }}></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="bg-bg-surface py-[5rem]">
        <div className="container-custom">
          <div className="flex flex-col gap-[3rem] mt-[2rem]">
            <div>
              <h2 className="text-[2.5rem] font-semibold">Why Work With Us?</h2>
              <p className="text-text-secondary mt-[1rem] mb-[2rem] max-w-[800px]">
                We run a marketing agency ourselves. We understand the pressure of client retention, the pain of manual processes, and the reality of running a service business. We build what we'd want if we were in your position. Because we are.
              </p>

              <div className="bg-white border-l-4 border-accent-primary p-[1.5rem] rounded-[0_8px_8px_0] my-[2rem]">
                <h4 className="text-accent-primary font-bold">The Difference</h4>
                <p className="text-text-secondary mt-1">
                  Generic tools give you generic results. Custom tools give you a competitive moat. Stop paying monthly for SaaS tools that don't talk to each other.
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-separate border-spacing-0 border border-border-strong rounded-main bg-bg-surface mt-0">
                <thead>
                  <tr>
                    <th className="p-[1.2rem] border-b border-border-light bg-white font-semibold text-center text-[0.95rem]">Feature</th>
                    <th className="p-[1.2rem] border-b border-border-light bg-white font-semibold text-center text-[0.95rem]">Most AI Companies</th>
                    <th className="p-[1.2rem] border-b border-border-light bg-white font-semibold text-center text-[0.95rem] text-accent-primary whitespace-nowrap">Launchpad Automation</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Product Strategy", "Sell pre-built products", "Build custom agents from scratch"],
                    ["Visibility", "Generic dashboards", "Custom portal for specific KPIs"],
                    ["Pricing Model", "One-size-fits-all", "Pricing based on complexity"],
                    ["Support", "Tickets and waiting", "Direct access to builder"],
                    ["Commitment", "Annual Contracts", "Month-to-month (cancel anytime)"],
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="p-[1.2rem] border-b border-border-light text-center text-[0.95rem]">{row[0]}</td>
                      <td className="p-[1.2rem] border-b border-border-light text-center text-[0.95rem]">{row[1]}</td>
                      <td className="p-[1.2rem] border-b border-border-light text-center text-[0.95rem] font-semibold text-accent-primary bg-[rgba(59,130,246,0.02)]">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-[4rem]">
        <div className="container-custom max-w-[800px] mx-auto">
          <h2 className="text-center mb-[3rem]">Common Questions</h2>
          <div className="border border-border-light rounded-[12px] overflow-hidden">
            {[
              { q: "Is this just a wrapper for ChatGPT?", a: "No. While we utilize LLMs for reasoning, our systems are complex software architectures that integrate directly with your database, CRM, and internal tools. They have memory, state, and specific permissions designed for your workflow." },
              { q: "How secure is my data?", a: "Extremely. We build single-tenant architectures. Your data does not commingle with other clients. We use industry-standard encryption and never use your data to train public models." },
              { q: "What happens if the AI makes a mistake?", a: "Our systems include \"Human-in-the-Loop\" (HITL) modes. For sensitive tasks, the agent drafts the work and waits for approval in your custom portal. As trust builds, you can increase autonomy." },
              { q: "Do I own the code?", a: "For Enterprise plans, yes. For our standard monthly plans, we grant you a perpetual usage license for the duration of the subscription, managing all hosting and maintenance for you." },
            ].map((faq, i) => (
              <div key={i} className={`border-b border-border-light bg-white last:border-0`}>
                <div className="p-[1.5rem] cursor-pointer flex justify-between font-semibold">
                  {faq.q}
                  <i className="ph ph-caret-down"></i>
                </div>
                <div className="px-[1.5rem] pb-[1.5rem] text-text-secondary">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-[#0A1628] text-white py-[80px] text-center w-full">
        <div className="container-custom">
          <div className="flex justify-center gap-[1.5rem] mb-[3rem] flex-wrap">
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-[0.75rem_1.5rem] rounded-main font-medium text-[0.95rem] flex items-center gap-2">
              <i className="ph ph-rocket-launch text-[1.2em]"></i>
              30 Days to Deploy
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-[0.75rem_1.5rem] rounded-main font-medium text-[0.95rem] flex items-center gap-2">
              <i className="ph ph-check-circle text-[1.2em]"></i>
              Live in Production
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-[0.75rem_1.5rem] rounded-main font-medium text-[0.95rem] flex items-center gap-2">
              <i className="ph ph-currency-dollar text-[1.2em]"></i>
              $750+/mo Starting Price
            </div>
          </div>

          <h2 className="text-white text-[2.5rem] font-bold mb-4">Ready to Build Your Custom AI Agent?</h2>
          <p className="text-[#94A3B8] text-[1.125rem] mb-[2.5rem] max-w-[600px] mx-auto">
            Schedule a 45-minute discovery call. We'll identify your highest-ROI problem and show you exactly what we'd build.
          </p>

          <a
            href="https://boostwithlaunchpad.com/contact"
            className="bg-white text-[#0A1628] font-bold py-[1rem] px-[2.5rem] rounded-main text-[1.1rem] hover:bg-bg-surface transition-all hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)] inline-block no-underline"
          >
            Schedule Discovery Call
          </a>
        </div>
      </section>
    </main>
  );
}
