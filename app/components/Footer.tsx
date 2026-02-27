"use client";
import Link from "next/link";
import Image from "next/image";
import { images } from "@/constants";
import { footer } from "@/constants";
import { useLangStore } from "@/store/useLangStore";

const Footer = () => {
  const { lang } = useLangStore();

  return (
    <div className="bg-primary text-background p-4">
      <div className="flex flex-col max-w-7xl mx-auto gap-8">
        <div className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Image src={images.logo} alt="Logo" width={40} height={40} />
              <div className="flex flex-col">
                <p className="text-2xl font-bold">Mirai</p>
                <p className="text-xs">Software & IA Solutions</p>
              </div>
            </div>
            <p className="text-background/70">{footer[lang].description}</p>
            <div className="flex gap-4">
              {footer.socials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  className="text-lg bg-background/10 rounded-full p-2"
                  target="_blank"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-lg font-bold">{footer[lang].services}</p>
            <div className="flex flex-col gap-2">
              {footer[lang].linkService.map((service) => (
                <Link
                  key={service.id}
                  href={service.url}
                  className="text-background/70 text-sm"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-lg font-bold">{footer[lang].company}</p>
            <div className="flex flex-col gap-2">
              {footer[lang].linkCompany.map((company) => (
                <a
                  key={company.id}
                  href={company.url}
                  className="text-background/70 text-sm"
                >
                  {company.title}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-lg font-bold">{footer[lang].newsletter}</p>
            <p className="text-background/70 text-sm">{footer[lang].title}</p>
            <div className="flex flex-col xl:flex-row gap-2">
              <input
                type="email"
                placeholder={footer[lang].placeholder}
                className="border border-background/10 rounded-lg py-1 px-2 bg-background/10"
              />
              <button className="bg-background text-primary rounded-lg py-1 px-2 text-sm">
                {footer[lang].button}
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 text-background/70 text-xs border-t border-background/10 pt-4">
          <p>{footer[lang].copyright}</p>
          <div className="flex gap-2">
            {footer[lang].linkLegal.map((policy) => (
              <Link key={policy.id} href={policy.url}>
                {policy.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
