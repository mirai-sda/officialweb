import Hero from "./(Home)/components/Hero";
import Services from "./(Home)/components/Services";
import Portfolio from "./(Home)/components/Portfolio";
import Pricing from "./(Home)/components/Pricing";

export default function Home() {
  return (
    <div className="flex flex-col py-10 lg:py-0">
      <Hero />
      <Services />
      <Portfolio />
      <Pricing />
    </div>
  );
}
