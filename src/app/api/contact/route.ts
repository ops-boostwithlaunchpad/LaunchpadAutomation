import { NextRequest, NextResponse } from "next/server";
import { getDataSource, ContactSubmission } from "@/lib/db";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, agency, message, timestamp } = body;

        const dataSource = await getDataSource();
        const contactRepo = dataSource.getRepository(ContactSubmission);

        const submission = contactRepo.create({
            name,
            email,
            agency,
            message,
            timestamp,
        });

        await contactRepo.save(submission);

        return NextResponse.json({ success: true, id: submission.id });
    } catch (error: any) {
        console.error("Contact submission error:", error);
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}
