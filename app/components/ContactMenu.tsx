import Link from "next/link";
import { contactLinks } from "@/constants";
import { useLangStore } from "@/store/useLangStore";

const ContactMenu = () => {
  const { lang } = useLangStore();
  return (
    <div className="flex flex-col lg:flex-row text-center lg:text-left gap-6">
      {contactLinks[lang].map((link) => (
        <Link
          key={link.id}
          href={link.url}
          className={`${link.url === "/contact" ? "bg-primary/5" : "bg-primary text-white"} text-lg px-4 py-2 rounded-lg shadow-md hover:scale-110 transition-all duration-200`}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default ContactMenu;
