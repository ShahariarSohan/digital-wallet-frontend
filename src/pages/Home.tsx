import { CaseStudies } from "@/components/modules/homepage/CaseStudies";
import FeaturesSection from "@/components/modules/homepage/FeaturesSection";
import { HeroSection } from "@/components/modules/homepage/HeroSection";
import HowItWorksSection from "@/components/modules/homepage/HowItWorks";


export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <HeroSection/>
      <FeaturesSection />
      <HowItWorksSection/>
      <CaseStudies/>
    </div>
  );
}