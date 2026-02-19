/* IMAGES */
import logo from "../assets/images/logo.webp";
import spanish from "../assets/images/spanish.png";
import english from "../assets/images/english.png";

interface Link {
    id: number;
    title: string;
    url: string;
}

export const images = {
    logo,
};

export const languages = {
    es: {
        name: "Spanish",
        image: spanish,
    },
    en: {
        name: "English",
        image: english,
    },
};

export const links: Record<string, Link[]> = {
    en: [
        {
            id: 1,
            title: "Home",
            url: "/",
        },
        {
            id: 2,
            title: "Portfolio",
            url: "/portfolio",
        },
        {
            id: 3,
            title: "Experience",
            url: "/experience",
        }
    ],
    es: [
        {
            id: 1,
            title: "Inicio",
            url: "/",
        },
        {
            id: 2,
            title: "Portafolio",
            url: "/portfolio",
        },
        {
            id: 3,
            title: "Experiencia",
            url: "/experience",
        }
    ],
};
