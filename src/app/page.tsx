import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Principles } from "@/components/principles";
import { Toolbox } from "@/components/toolbox";
import { Work } from "@/components/work";

/**
 * Narrative order: who (Hero) → proof (Experience) → depth (Projects) →
 * how I think (Principles) → with what (Stack) → contact (footer, in layout).
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Work />
      <Principles />
      <Toolbox />
    </>
  );
}
