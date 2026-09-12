import { Hero } from "../sections/Hero/Hero";
import { About } from "../sections/About/About";
import { Technologies } from "../sections/Technologies/Technologies";

export function Home() {
  return (
    <main className="w-full min-h-screen px-4 flex flex-col">
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="technologies">
        <Technologies />
      </section>
    </main>
  );
}
