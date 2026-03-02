import { NextRequest, NextResponse } from "next/server";
import { getDataSource, OnboardingProfile } from "@/lib/db";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const dataSource = await getDataSource();
        const onboardingRepo = dataSource.getRepository(OnboardingProfile);

        const profile = onboardingRepo.create({
            businessName: body.businessName,
            category: body.category,
            description: body.description,
            phone: body.phone,
            email: body.email,
            website: body.website,
            address: body.address,
            city: body.city,
            state: body.state,
            zip: body.zip,
            keywords: body.keywords,
            authorized: body.authorized === "on" || body.authorized === true,
            status: "active",
        });

        await onboardingRepo.save(profile);

        return NextResponse.json({ success: true, id: profile.id });
    } catch (error: any) {
        console.error("Onboarding submission error:", error);
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}
