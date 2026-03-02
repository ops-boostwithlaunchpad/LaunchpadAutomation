import Link from "next/link";

export default function Success() {
    return (
        <main className="pt-[160px] pb-[100px] text-center bg-white min-h-screen">
            <div className="container-custom max-w-[600px] mx-auto">
                <div className="w-[100px] h-[100px] bg-[#DCFCE7] text-[#166534] rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
                    <i className="ph-fill ph-check-circle text-[4rem]"></i>
                </div>
                <h1 className="text-[3rem] font-bold mb-4 tracking-tight">Message Received!</h1>
                <p className="text-[1.25rem] text-text-secondary mb-12 max-md:text-[1.1rem]">
                    Thank you for reaching out. We&apos;ve received your request and one of our engineers will be in touch within 24 hours.
                </p>
                <div className="bg-bg-surface p-[2rem] rounded-main border border-border-light mb-12 text-left">
                    <h3 className="text-[1.25rem] font-semibold mb-4">What happens next?</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary shrink-0 mt-0.5 font-bold text-xs">1</div>
                            <p className="text-text-secondary">We review your agency profile and pain points.</p>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary shrink-0 mt-0.5 font-bold text-xs">2</div>
                            <p className="text-text-secondary">We&apos;ll email you to confirm a meeting time if you didn&apos;t book one yet.</p>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary shrink-0 mt-0.5 font-bold text-xs">3</div>
                            <p className="text-text-secondary">We prepare a custom AI automation demo for our call.</p>
                        </li>
                    </ul>
                </div>
                <Link href="/" className="btn btn-primary px-8 py-4 rounded-[6px] font-bold shadow-md hover:shadow-lg transition-all no-underline">
                    Return to Home
                </Link>
            </div>
        </main>
    );
}
