"use client";
import Image from "next/image";
import { hero, heroimages } from "@/constants";
import { useLangStore } from "@/store/useLangStore";
import { PiSealCheckBold } from "react-icons/pi";
//max-w-7xl mx-auto px-4
const Hero = () => {
  const { lang } = useLangStore();

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 h-full w-full items-start lg:items-center lg:h-[calc(100vh-4rem)] justify-center bg-background/50">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-8 items-start mx-auto w-full lg:w-1/2">
          <div className="flex flex-col gap-4 items-start mx-auto w-full">
            <p className="bg-secondary/20 text-secondary text-sm px-2 font-semibold rounded-full ">
              {hero[lang].subtitle}
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
              {hero[lang].title}{" "}
              <span className="text-secondary">{hero[lang].title2}</span>
            </h1>
            <p className="text-base lg:text-lg text-gray-600">
              {hero[lang].description}
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 mx-auto w-full">
            <button className="text-white bg-secondary px-4 py-2 rounded-lg text-lg font-semibold shadow-lg shadow-secondary/20 hover:scale-110 transition-all duration-300">
              {hero[lang].button}
            </button>
            <button className="text-foreground bg-background border border-secondary/20 px-4 py-2 rounded-lg  font-semibold shadow-lg shadow-secondary/5 hover:scale-110 transition-all duration-300">
              {hero[lang].button2}
            </button>
          </div>
          <div className="flex gap-4 relative mx-auto w-full items-center">
            <div className="flex gap-2 relative w-16">
              <Image
                src={heroimages.person1}
                alt="Hero Person 1"
                width={100}
                height={100}
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <Image
                src={heroimages.person2}
                alt="Hero Person 2"
                width={100}
                height={100}
                className="w-8 h-8 rounded-full absolute top-0 left-5 -z-10 border-2 border-white"
              />
              <Image
                src={heroimages.person3}
                alt="Hero Person 3"
                width={100}
                height={100}
                className="w-8 h-8 rounded-full absolute top-0 left-10 -z-20 border-2 border-white"
              />
            </div>
            <p className="text-foreground/60 text-sm font-light">
              {hero[lang].references}
              <span className="text-secondary font-semibold">
                {hero[lang].referenceNumber}
              </span>
              {hero[lang].referenceEnd}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center relative">
          <Image
            src={heroimages.background}
            alt="Hero Background"
            width={1000}
            height={1000}
            className="w-full h-full max-h-[350px] max-w-[450px] md:max-h-[400px] md:max-w-[450px] lg:max-h-[350px] lg:max-w-[450px] mx-auto object-cover object-center rounded-lg border-4 border-secondary/50"
          />
          <div className="hidden md:flex items-center justify-center gap-2 absolute -bottom-5 left-8 w-[220px] h-[65px] bg-white rounded-lg border border-secondary/10 shadow-lg shadow-secondary/10">
            <div className="text-secondary text-3xl bg-secondary/10 rounded-full p-1">
              <PiSealCheckBold />
            </div>
            <div className="flex flex-col gap-1 text-sm">
              <p className="text-foreground/60">{hero[lang].checkText}</p>
              <p className="font-semibold text-foreground/90">
                {hero[lang].checkDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
