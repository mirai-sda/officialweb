/* IMAGES */
import logo from "../assets/images/logo.webp";
import spanish from "../assets/images/spanish.png";
import english from "../assets/images/english.png";
import { FooterData } from "@/types";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa6";
import heroBackground from "../assets/images/hero-image.webp";
import heroperson1 from "../assets/images/heroperson-01.webp";
import heroperson2 from "../assets/images/heroperson-02.webp";
import heroperson3 from "../assets/images/heroperson-03.webp";

import { FaCode, FaArrowRight, FaRobot, FaCloud, FaGlobe, FaGears } from "react-icons/fa6";

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

export const hero = {
    en: {
        title: "Your Vision, Built with",
        title2: "Precision.",
        subtitle: "Elite Software Engineering",
        description: "Custom software for small and medium-sized businesses. We create secure and scalable digital solutions that simplify processes and help your business grow.",
        button: "Tell us your idea",
        linkButton: "/book-consultation",
        button2: "Our portfolio",
        linkButton2: "/work",
        references: "More than ",
        referenceNumber: " 10+ ",
        referenceEnd: " companies trust us.",
        image: "/images/hero.png",
        checkText: "Stable platforms",
        checkDescription: "99% availability"
    },
    es: {
        title: "Tu Visión, Construida con",
        title2: "Precisión.",
        subtitle: "Ingeniería de Software de Élite",
        description: "Software a medida para pequeñas y medianas empresas. Creamos soluciones digitales seguras y escalables que simplifican procesos y ayudan a tu negocio a crecer.",
        button: "Contanos tu idea",
        linkButton: "/book-consultation",
        button2: "Nuestro portfolio",
        linkButton2: "/work",
        references: "Más de",
        referenceNumber: " 10+ ",
        referenceEnd: " empresas confían en nosotros.",
        image: "/images/hero.png",
        checkText: "Plataformas estables",
        checkDescription: "99% de disponibilidad"
    }
}

export const heroimages = {
    background: heroBackground,
    person1: heroperson1,
    person2: heroperson2,
    person3: heroperson3,
}


export const services = {
    en: {
        title: "Our services",
        subtitle: "Custom software solutions",
        description: "We support your company by combining best engineering practices with a real understanding of your business to create scalable, reliable software aligned with your objectives.",
        listServices: [
            {
                id: 1,
                title: "Custom Software Development",
                description: "Bespoke solutions engineered for your specific business logic and complex workflows. Built with clean, maintainable codebases.",
                url: "/services/development",
                icon: FaCode,
            },
            {
                id: 2,
                title: "Web Applications",
                description: "High-performance, responsive web platforms built with modern frameworks for seamless user experiences.",
                url: "/services/web",
                icon: FaGlobe,
            },
            {
                id: 3,
                title: "SaaS Solutions",
                description: "Scalable multi-tenant cloud architectures designed for rapid growth, robust security, and automated deployment pipelines.",
                url: "/services/saas",
                icon: FaCloud,
            },
            {
                id: 4,
                title: "Business Automations",
                description: "Streamline your operations with intelligent, automated workflow integrations that eliminate repetitive manual tasks.",
                url: "/services/automation",
                icon: FaGears,
            },
            {
                id: 5,
                title: "AI-Powered Chatbots",
                description: "Next-gen conversational AI to enhance customer engagement, support, and lead qualification using LLM technology.",
                url: "/services/chatbot",
                icon: FaRobot,
            },
            {
                id: 6,
                title: "Need something custom?",
                description: "Our architects are ready to design your specific solution.",
                button: "Talk to an expert",
                url: "/book-consultation",
                icon: FaArrowRight,
            },
        ],

    },
    es: {
        title: "Nuestros servicios",
        subtitle: "Soluciones de software a medida",
        description: "Acompañamos a tu empresa combinando buenas prácticas de ingeniería con un entendimiento real de tu negocio, para crear software escalable, confiable y alineado a tus objetivos.",
        listServices: [
            {
                id: 1,
                title: "Desarrollo de Software a Medida",
                description: "Soluciones a medida diseñadas para su lógica de negocio específica y flujos de trabajo complejos. Construidas con bases de código limpias y fáciles de mantener.",
                url: "/services/development",
                icon: FaCode,
            },
            {
                id: 2,
                title: "Aplicaciones Web",
                description: "Plataformas web de alto rendimiento y capacidad de respuesta, construidas con frameworks modernos para experiencias de usuario fluidas.",
                url: "/services/web",
                icon: FaGlobe,
            },
            {
                id: 3,
                title: "Soluciones SaaS",
                description: "Arquitecturas escalables en la nube multiusuario diseñadas para un rápido crecimiento, seguridad robusta y procesos de implementación automatizados.",
                url: "/services/saas",
                icon: FaCloud,
            },
            {
                id: 4,
                title: "Automatizaciones Empresariales",
                description: "Optimice sus operaciones con integraciones de flujo de trabajo inteligentes y automatizadas que eliminan tareas manuales repetitivas.",
                url: "/services/automation",
                icon: FaGears,
            },
            {
                id: 5,
                title: "Chatbots impulsados por IA",
                description: "IA conversacional de última generación para mejorar la interacción con el cliente, el soporte y la calificación de clientes potenciales mediante tecnología LLM.",
                url: "/services/chatbot",
                icon: FaRobot,
            },
            {
                id: 6,
                title: "¿Necesitas algo personalizado?",
                description: "Nuestros arquitectos están listos para diseñar su solución específica.",
                button: "Habla con un experto",
                url: "/book-consultation",
                icon: FaArrowRight,
            },  
        ],
    }
}

