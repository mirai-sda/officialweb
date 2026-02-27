import { IconType } from "react-icons";

export interface FooterLink {
    id: number;
    title: string;
    url: string;
}

export interface FooterSocial {
    id: number;
    icon: IconType;
    url: string;
}

export interface FooterLocale {
    description: string;

    services: string;
    linkService: FooterLink[];

    company: string;
    linkCompany: FooterLink[];

    newsletter: string;
    title: string;
    placeholder: string;
    button: string;
    linkNewsletter: string;

    linkLegal: FooterLink[];

    copyright: string;
}

export interface FooterData {
    socials: FooterSocial[];
    en: FooterLocale;
    es: FooterLocale;
}

export type Language = "en" | "es";
