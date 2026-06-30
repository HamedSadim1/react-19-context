"use client";

import { Footer, Navbar } from "@/components/layout";
import {
  HeroSection,
  ProfileSection,
  StatsSection,
} from "@/components/sections";
import { ANIM } from "@/config/constants";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="flex min-h-screen flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: ANIM.PAGE_TRANSITION_DURATION }}
    >
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <ProfileSection />
      </main>

      <Footer />
    </motion.div>
  );
}
