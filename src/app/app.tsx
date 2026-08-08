import { useState } from "react";

import { Footer } from "../components/layout/footer";
import { Header } from "../components/layout/header";
import { BookingSection } from "../components/sections/booking-section";
import { ConceptSection } from "../components/sections/concept-section";
import { DiningSection } from "../components/sections/dining-section";
import { ExperienceSection } from "../components/sections/experience-section";
import { HeroSection } from "../components/sections/hero-section";
import { LocationSection } from "../components/sections/location-section";
import { SpaSection } from "../components/sections/spa-section";
import { StaySection } from "../components/sections/stay-section";

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header menuOpen={menuOpen} onMenuOpenChange={setMenuOpen} />
      <main inert={menuOpen}>
        <HeroSection />
        <ConceptSection />
        <StaySection />
        <DiningSection />
        <ExperienceSection />
        <SpaSection />
        <LocationSection />
        <BookingSection />
      </main>
      <Footer inert={menuOpen} />
    </>
  );
}
