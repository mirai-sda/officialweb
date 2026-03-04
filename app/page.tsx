import Hero from "./(Home)/components/Hero";
import Services from "./(Home)/components/Services";

export default function Home() {
  return (
    <div className="flex flex-col py-10 lg:py-0">
      <Hero />
      <Services />
    </div>
  );
}
