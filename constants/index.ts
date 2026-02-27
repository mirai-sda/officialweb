/* IMAGES */
import logo from "../assets/images/logo.webp";
import spanish from "../assets/images/spanish.png";
import english from "../assets/images/english.png";
import { FooterData } from "@/types";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa6";
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

export const footer: FooterData = {
    socials: [
        {
            id: 1,
            icon: FaInstagram,
            url: "#",
        },
        {
            id: 2,
            icon: FaLinkedin,
            url: "#",
        },
        {
            id: 3,
            icon: FaWhatsapp,
            url: "#",
        },
    ],
    en: {
        description: "Engineering high-end custom software solutions for the world's most ambitious companies. Secure, scalable, and superior.",
        services: "Services",
        linkService: [
            {
                id: 1,
                title: "Custom Software Development",
                url: "/services/development",
            },
            {
                id: 2,
                title: "SaaS Platforms",
                url: "/services/saas",
            },
            {
                id: 3,
                title: "AI & Machine Learning",
                url: "/services/ai",
            },
            {
                id: 4,
                title: "Cloud Infrastructure",
                url: "/services/cloud",
            },
        ],
        company: "Company",
        linkCompany: [
            {
                id: 1,
                title: "About Us",
                url: "/about",
            },
            {
                id: 2,
                title: "Case Studies",
                url: "/case-studies",
            },
            {
                id: 3,
                title: "Testimonials",
                url: "/testimonials",
            },
            {
                id: 4,
                title: "Book Consultation",
                url: "/book-consultation",
            },
            {
                id: 5,
                title: "Contact Us",
                url: "/contact",
            },
        ],
        newsletter: "Stay updated",
        title: "Subscribe to our newsletter for tech insights.",
        placeholder: "Email",
        button: "Subscribe",
        linkNewsletter: "/subscribe",
        linkLegal: [
            {
                id: 1,
                title: "Privacy Policy",
                url: "/privacy-policy",
            },
            {
                id: 2,
                title: "Terms of Service",
                url: "/terms-of-service",
            },
        ],
        copyright: "© 2026 Mirai. All rights reserved.",


    },
    es: {
        description: "Ingeniería de soluciones de software personalizadas y de alta gama para las empresas más ambiciosas del mundo. Seguras, escalables y de alta calidad.",
        services: "Servicios",
        linkService: [
            {
                id: 1,
                title: "Desarrollo de Software a Medida",
                url: "/services/development",
            },
            {
                id: 2,
                title: "Plataformas SaaS",
                url: "/services/saas",
            },
            {
                id: 3,
                title: "IA y Aprendizaje Automático",
                url: "/services/ai",
            },
            {
                id: 4,
                title: "Infraestructura en la Nube",
                url: "/services/cloud",
            },
        ],
        company: "Compañía",
        linkCompany: [
            {
                id: 1,
                title: "Sobre Nosotros",
                url: "/about",
            },
            {
                id: 2,
                title: "Estudios de Caso",
                url: "/case-studies",
            },
            {
                id: 3,
                title: "Testimonios",
                url: "/testimonials",
            },
            {
                id: 4,
                title: "Reservar Consulta",
                url: "/book-consultation",
            },
            {
                id: 5,
                title: "Contáctanos",
                url: "/contact",
            },
        ],
        newsletter: "Mantente actualizado",
        title: "Suscríbete a nuestro boletín para obtener información sobre tecnología.",
        placeholder: "Correo electrónico",
        button: "Suscribirse",
        linkNewsletter: "/subscribe",
        linkLegal: [
            {
                id: 1,
                title: "Política de Privacidad",
                url: "/privacy-policy",
            },
            {
                id: 2,
                title: "Términos de Servicio",
                url: "/terms-of-service",
            },
        ],
        copyright: "© 2026 Mirai. Todos los derechos reservados.",
    }
}
