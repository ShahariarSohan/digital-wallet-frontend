import { CaseStudies } from "@/components/modules/homepage/CaseStudies";
import { HeroSection } from "@/components/modules/homepage/HeroSection";
import { PricingBlock } from "@/components/modules/homepage/PricingBlock";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <HeroSection></HeroSection>
      <CaseStudies></CaseStudies>
      <PricingBlock></PricingBlock>
    </div>
  );
}