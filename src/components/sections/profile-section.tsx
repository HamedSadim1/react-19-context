"use client";

import { AnimatedSection } from "@/components/animations";
import { SectionHeading } from "@/components/layout";
import { UserProfile } from "@/components/profile";
import { ANIM } from "@/config/constants";

export function ProfileSection() {
  return (
    <section id="profile" className="pt-8 pb-24">
      <SectionHeading
        title="Je Profiel"
        description="Je persoonlijke gegevens, geladen via de Context API"
      />
      <AnimatedSection delay={ANIM.PROFILE_SECTION_DELAY} variant="fadeInScale">
        <UserProfile />
      </AnimatedSection>
    </section>
  );
}
