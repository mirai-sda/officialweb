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
            title: "Services",
            url: "/services",
        },
        {
            id: 2,
            title: "Pricing",
            url: "/pricing",
        },
        {
            id: 3,
            title: "Testimonials",
            url: "/testimonials",
        },
        {
            id: 4,
            title: "About",
            url: "/about",
        }
    ],
    es: [
        {
            id: 1,
            title: "Servicios",
            url: "/services",
        },
        {
            id: 2,
            title: "Precios",
            url: "/pricing",
        },
        {
            id: 3,
            title: "Testimonios",
            url: "/testimonials",
        },
        {
            id: 4,
            title: "Sobre nosotros",
            url: "/about",
        }
    ],
};

export const contactLinks: Record<string, Link[]> = {
    en: [
        {
            id: 1,
            title: "Contact us",
            url: "/contact",
        },
        {
            id: 2,
            title: "Book Consultation",
            url: "/book-consultation",
        },

    ],
    es: [
        {
            id: 1,
            title: "Contáctanos",
            url: "/contact",
        },
        {
            id: 2,
            title: "Reservar Consulta",
            url: "/book-consultation",
        },

    ],
};
