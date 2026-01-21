import { HeroSection } from "@/components/home/HeroSection";
import { ShiftSection } from "@/components/home/ShiftSection";
import { EngineeringSection } from "@/components/home/EngineeringSection";
import { DAIvidSection } from "@/components/home/DAIvidSection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { FutureSection } from "@/components/home/FutureSection";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ShiftSection />
      <EngineeringSection />
      <DAIvidSection />
      <ProductsSection />
      <FutureSection />
      <CTASection />
    </>
  );
}
