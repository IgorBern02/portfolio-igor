import { Hero } from "../sections/Hero/Hero";
import { About } from "../sections/About/About";
import { Technologies } from "../sections/Technologies/Technologies";
import { Projects } from "../sections/Projects/Projects";
import { Contact } from "../sections/Contact/Contact";

export function Home() {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </main>
  );
}
