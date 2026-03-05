"use client";
import Link from "next/link";
import { pricings } from "@/constants";
import { useLangStore } from "@/store/useLangStore";
import { FaRegCircleCheck } from "react-icons/fa6";

const Pricing = () => {
  const { lang } = useLangStore();

  return (
    <div className="flex flex-col gap-4 py-10 lg:py-16  bg-slate-50 ">
      <div className="flex flex-col gap-8 max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-8 justify-center items-center max-w-2xl text-center mx-auto">
          <p className=" text-4xl font-bold text-foreground">
            {pricings[lang].title}
          </p>
          <p className="font-light text-foreground/70">
            {pricings[lang].description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-4">
          {pricings[lang].listPricing?.map((pricing) => (
            <div
              key={pricing.title}
              className={`relative flex flex-col w-full mx-auto group gap-8 p-8 rounded-2xl bg-white/60 border hover:border-secondary hover:shadow-lg transition-all duration-300 ${pricing.id === 2 ? "border-secondary shadow-2xl shadow-secondary/10 scale-105" : "border-foreground/10"}`}
            >
              {pricing.id === 2 && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 uppercase font-bold text-sm bg-secondary text-white px-4 py-0.5 rounded-full">
                  {pricing.popular}
                </div>
              )}
              <div className="flex flex-col flex-1 gap-2">
                <h3 className="text-lg font-bold text-foreground">
                  {pricing.title}
                </h3>
                <div className="flex items-end gap-2">
                  <p className="text-4xl font-bold text-foreground">
                    {pricing.price}
                  </p>
                  {pricing.id !== 3 && (
                    <span className="text-foreground/50">
                      {pricing.project}
                    </span>
                  )}
                </div>
                <p className="font-light text-foreground/40">
                  {pricing.subtitle}
                </p>
              </div>
              <ul className="flex flex-col gap-2">
                {pricing.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <FaRegCircleCheck className="text-sm text-secondary" />
                    <p className="text-sm capitalize font-light text-foreground/60">
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>
              <Link
                href={pricing.url}
                className={`w-full py-2 text-center rounded-lg font-bold ${pricing.id === 2 ? "bg-secondary text-white" : "bg-white border border-gray-200 text-foreground"}`}
              >
                {pricing.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
