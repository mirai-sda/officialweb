"use client";
import Link from "next/link";
import { services } from "@/constants";
import { useLangStore } from "@/store/useLangStore";

const Services = () => {
  const { lang } = useLangStore();

  return (
    <div className="flex flex-col gap-4 py-10 lg:py-4  bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-4 justify-center items-center max-w-2xl text-center mx-auto">
          <p className="text-lg font-bold text-secondary">
            {services[lang].title}
          </p>
          <h2 className="text-4xl text-foreground font-bold">
            {services[lang].subtitle}
          </h2>
          <p className="font-light text-foreground/70">
            {services[lang].description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
          {services[lang].listServices?.map((service) => (
            <div
              key={service.id}
              className={`flex flex-col w-full mx-auto group gap-4 p-6 rounded-2xl  ${service.id === 6 ? "text-center bg-secondary/10 border-2 border-dashed border-secondary/30" : "bg-white/60 border border-foreground/10"} hover:scale-105 hover:shadow-lg transition-all duration-300`}
            >
              {service.id !== 6 && (
                <div className="p-2 bg-secondary/10 rounded-lg w-fit group-hover:bg-secondary group-hover:text-white transition-all duration-300 shadow">
                  <service.icon className="text-2xl text-secondary group-hover:text-white transition-all duration-300" />
                </div>
              )}

              <h3
                className={`text-lg font-bold ${service.id === 6 ? "text-secondary" : "text-foreground"}`}
              >
                {service.title}
              </h3>
              <p className="text-sm font-light text-foreground/60">
                {service.description}
              </p>
              {service.id === 6 && (
                <Link
                  href={service.url}
                  className="flex gap-2 items-center  justify-center text-secondary font-bold px-4 py-2"
                >
                  {service.button}
                  <service.icon className="text-lg text-secondary" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
