import Certifications from "@/components/sections/Certifications";
import Educations from "@/components/sections/Educations";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Summary from "@/components/sections/Summary";

export default function HomePage() {
  return (
    <div className="mx-10 px-2">
      <Summary />
      <Experience />
      <Certifications />
      <Educations />
      <Skills />
    </div>
  );
}
