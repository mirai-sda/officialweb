"use client";
import Link from "next/link";
import { portfolios } from "@/constants";
import { useLangStore } from "@/store/useLangStore";
import { FaArrowRight } from "react-icons/fa6";

const Portfolio = () => {
  const { lang } = useLangStore();

  return (
    <div className="flex flex-col gap-4 py-10 lg:py-16  bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-4 justify-center items-center max-w-2xl text-center mx-auto">
          <p className="text-lg font-bold text-secondary">
            {portfolios[lang].title}
          </p>
          <h2 className="text-4xl text-foreground font-bold">
            {portfolios[lang].subtitle}
          </h2>
          <p className="font-light text-foreground/70">
            {portfolios[lang].description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
          {portfolios[lang].listPortfolio?.map((portfolio) => (
            <div
              key={portfolio.id}
              className={`flex flex-col w-full mx-auto group gap-4 p-6 rounded-2xl bg-white/60 border border-foreground/10 hover:border-secondary hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex flex-col flex-1 gap-2">
                {portfolio.id !== 6 && (
                  <div className="p-2 bg-secondary/10 rounded-lg w-fit group-hover:bg-secondary group-hover:text-white transition-all duration-300 shadow">
                    <portfolio.icon className="text-2xl text-secondary group-hover:text-white transition-all duration-300" />
                  </div>
                )}

                <h3
                  className={`text-lg font-bold ${portfolio.id === 6 ? "text-secondary" : "text-foreground"}`}
                >
                  {portfolio.title}
                </h3>
                <p className="text-sm font-light text-foreground/60">
                  {portfolio.description}
                </p>
              </div>
              <Link
                href={portfolio.url}
                className="text-sm font-bold text-secondary group"
              >
                {portfolios[lang].learnMore}
                <FaArrowRight className="inline-block ml-2 group-hover:translate-x-2 transition-all duration-300" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
