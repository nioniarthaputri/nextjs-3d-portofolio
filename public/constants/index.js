import { kzmulia, mahad, sid, ysppl, smk, bara, rf } from "../assets/images";
import {
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    nextjs,
    react,
    sass,
    tailwindcss,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Frontend Web Developer",
        company_name: "Sekolahan.id Collaborated With 123rf, Malaysia",
        icon: sid,
        iconBg: "#1A76D2",
        date: "June 2021 - Current",
        points: [
            "Working with microservice architecture.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Build new main feature 123rf contributor use Nextjs",
            "Worked in Agile Scrum team environment with high-tempo production cadence.",
        ],
    },
    {
        title: "YSPPL Singapore",
        company_name: "Freelance",
        icon: ysppl,
        iconBg: "#fff",
        date: "Feb 2021 - October 2021",
        points: [
            "Delivered high-quality website content exceeding client expectations.",
            "Built user-friendly profile company and visually stunning website.",
            "Developed and configured website using CodeIgniter 3 and HMVC.",
        ],
    },
    {
        title: "YayasanBissa",
        company_name: "Freelance",
        icon: mahad,
        iconBg: "#fff",
        date: "Feb 2021 - October 2021",
        points: [
            "As part of the handover process, I need to prepare a fully functional set up the server and domain to ensure that everything is ready to go."
        ],
    },
    {
        title: "Kzmulia Logistic Web Application",
        company_name: "Freelance",
        icon: kzmulia,
        iconBg: "#fff",
        date: "Feb 2021 - October 2021",
        points: [
            "Created system documentation for handover project kzmulia logistic web application",
            "Reviewed code, debugged problems, and corrected issues on project kzmulia logistic web application",
            "Config OpenLiteSpeed HTTP server",
        ],
    },
    {
        title: "Web Developer",
        company_name: "SMKN 2 Cimahi",
        icon: smk,
        iconBg: "#fff",
        date: "March 2021 - April 2021",
        points: [
            "Created \"Tuition Manager For School\" web applications.",
            "Use laravel framework & blade template",
            "Managed user authentication and authorization for servers and various environments.",
        ],
    },
    {
        title: "Android Developer Intern",
        company_name: "Bara Enterprise Bandung, Indonesia",
        icon: bara,
        iconBg: "#2D2E29",
        date: "Feb 2020 - October 2020",
        points: [
            "Designed, developed, modified and debugged \"Temanlapak\" & \"MBA\" (labor manager) android application",
            "Use MVP & MVVM concept",
            "Wrote code on Android platform using Android Studio.",
        ],
    },
    {
        title: "Android Developer Intern",
        company_name: "Bara Enterprise Bandung, Indonesia",
        icon: bara,
        iconBg: "#2D2E29",
        date: "Sep 2019 - Dec 2019",
        points: [
            "Created management task mobile applications using native technologies.",
            "Implemented Gitlab for version control.",
            "Designed, developed, modified and debugged programs.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/nioniarthaputri',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/nioni/',
    }
];

export const projects = [
    {
        iconUrl: rf,
        theme: 'btn-back-black',
        name: '123rf Contributor',
        description: 'Developed a web application for contributors 123rf uploading their photos, and videos.',
        link: 'https://www.123rf.com/contributors/dashboard',
    },
    {
        iconUrl: ysppl,
        theme: 'btn-back-black',
        name: 'YSPPL Singapore',
        description: 'Built user-friendly profile company and visually stunning website.',
        link: 'https://ysppl.com.sg/',
    },
    {
        iconUrl: kzmulia,
        theme: 'btn-back-black',
        name: 'Kzmulia Logistic Web Application',
        description: 'Reviewed code, debugged problems, and corrected issues on project kzmulia logistic web application',
        link: 'https://mydatalogistic.kzmulia.com/',
    },
    {
        iconUrl: smk,
        theme: 'btn-back-black',
        name: 'Tuition Manager For School',
        description: 'Created \"Tuition Manager For School\" web applications.',
        link: 'https://github.com/nioniarthaputri/tuition-manager/tree/dev',
    },
];