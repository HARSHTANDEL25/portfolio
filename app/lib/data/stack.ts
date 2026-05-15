import {
    SiCss,
    SiExpress,
    SiFigma,
    SiGit,
    SiHtml5,
    SiJavascript,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiPostman,
    SiPrisma,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiVercel,
} from "react-icons/si";
import { IconType } from "react-icons";

export type StackGroup = {
    category: string;
    items: { name: string; icon: IconType }[];
};

export const STACK: StackGroup[] = [
    {
        category: "Frontend",
        items: [
            { name: "Next.js", icon: SiNextdotjs },
            { name: "React", icon: SiReact },
            { name: "TypeScript", icon: SiTypescript },
            { name: "JavaScript", icon: SiJavascript },
            { name: "HTML5", icon: SiHtml5 },
            { name: "CSS3", icon: SiCss },
            { name: "Tailwind", icon: SiTailwindcss },
        ],
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Express.js", icon: SiExpress },
        ],
    },
    {
        category: "Database & ORM",
        items: [
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "MongoDB", icon: SiMongodb },
            { name: "Prisma", icon: SiPrisma },
        ],
    },
    {
        category: "Tools",
        items: [
            { name: "Git", icon: SiGit },
            { name: "Figma", icon: SiFigma },
            { name: "Postman", icon: SiPostman },
            { name: "Vercel", icon: SiVercel },
        ],
    },
];
