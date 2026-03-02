import "reflect-metadata";
import { DataSource, EntitySchema } from "typeorm";

// --- Entity Schemas ---

export interface IContactSubmission {
    id: number;
    name: string;
    email: string;
    agency: string;
    message: string;
    timestamp: string;
    createdAt: Date;
}

export const ContactSubmission = new EntitySchema<IContactSubmission>({
    name: "ContactSubmission",
    tableName: "contact_submissions",
    columns: {
        id: { type: "int", primary: true, generated: "increment" },
        name: { type: "varchar" },
        email: { type: "varchar" },
        agency: { type: "varchar" },
        message: { type: "text" },
        timestamp: { type: "varchar" },
        createdAt: { type: "timestamp", createDate: true },
    },
});

export interface IOnboardingProfile {
    id: number;
    businessName: string;
    category: string;
    description: string | null;
    phone: string | null;
    email: string;
    website: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip: string | null;
    keywords: string | null;
    authorized: boolean;
    status: string;
    createdAt: Date;
}

export const OnboardingProfile = new EntitySchema<IOnboardingProfile>({
    name: "OnboardingProfile",
    tableName: "onboarding_profiles",
    columns: {
        id: { type: "int", primary: true, generated: "increment" },
        businessName: { type: "varchar" },
        category: { type: "varchar" },
        description: { type: "text", nullable: true },
        phone: { type: "varchar", nullable: true },
        email: { type: "varchar" },
        website: { type: "varchar", nullable: true },
        address: { type: "varchar", nullable: true },
        city: { type: "varchar", nullable: true },
        state: { type: "varchar", nullable: true },
        zip: { type: "varchar", nullable: true },
        keywords: { type: "text", nullable: true },
        authorized: { type: "boolean", default: false },
        status: { type: "varchar", default: "active" },
        createdAt: { type: "timestamp", createDate: true },
    },
});

// --- DataSource Singleton ---

let dataSource: DataSource | null = null;

export async function getDataSource(): Promise<DataSource> {
    if (dataSource && dataSource.isInitialized) {
        return dataSource;
    }

    dataSource = new DataSource({
        type: "postgres",
        url: process.env.DATABASE_URL,
        entities: [ContactSubmission, OnboardingProfile],
        synchronize: true,
        ssl: { rejectUnauthorized: false },
    });

    await dataSource.initialize();
    return dataSource;
}
