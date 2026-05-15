import { MdEmail } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { IconType } from "react-icons";

export type ContactLink = {
    icon: IconType;
    label: string;
    value: string;
    href: string;
};

export const CONTACT_LINKS: ContactLink[] = [
    {
        icon: MdEmail,
        label: "Email",
        value: "harshtandel2508@gmail.com",
        href: "mailto:harshtandel2508@gmail.com",
    },
    {
        icon: SiGithub,
        label: "GitHub",
        value: "github.com/HARSHTANDEL25",
        href: "https://github.com/HARSHTANDEL25",
    },
];
