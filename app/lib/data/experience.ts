export type ExperienceEntry = {
    title: string;
    type: string;
    period: string;
    bullets?: string[];
    description?: string;
};

export const EXPERIENCE: ExperienceEntry[] = [
    {
        title: "Software Engineer",
        type: "Full-time",
        period: "2025 – Present",
        bullets: [
            "Building token-based multisite architecture for a pan-European student accommodation platform",
            "Working with headless CMS to deliver flexible, content-driven experiences across multiple regions",
            "Developing and maintaining multisite projects serving properties across the UK and Europe with localised content",
            "Contributing to a property management system used for listing properties for students and residents",
            "UI improvements for the resident-facing portal and mobile-first responsive layouts",
        ],
    },
    {
        title: "Frontend Developer Intern",
        type: "Internship",
        period: "2024",
        description: "Developed a full-featured e-commerce web application using React, focusing on product listings, cart functionality, and a seamless checkout experience.",
    },
];
