import { CaseStudies } from "@/components/modules/homepage/CaseStudies";
import { HeroSection } from "@/components/modules/homepage/HeroSection";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <HeroSection></HeroSection>
      <CaseStudies></CaseStudies>
    </div>
  );
}