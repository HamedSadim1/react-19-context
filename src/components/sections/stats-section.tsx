"use client";

import { StaggerContainer, StaggerItem } from "@/components/animations";
import { SectionHeading } from "@/components/layout";
import { Activity, Shield, Zap } from "lucide-react";
import { StatCard, StatCardData } from "./stat-card";

const stats: StatCardData[] = [
  {
    icon: Zap,
    label: "React 19",
    value: "use() Hook",
    description: "Nieuwe Context API met promise support",
    gradient: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-500",
  },
  {
    icon: Shield,
    label: "TypeScript",
    value: "Type-Safe",
    description: "Volledige type veiligheid door de hele stack",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500",
  },
  {
    icon: Activity,
    label: "Next.js",
    value: "Server Components",
    description: "Server-side rendering met streaming",
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-500",
  },
];

export function StatsSection() {
  return (
    <section className="py-12">
      <SectionHeading
        title="Waarom React 19?"
        description="De nieuwste features die ontwikkeling sneller en leuker maken"
      />

      <StaggerContainer className="mx-auto grid max-w-5xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <StaggerItem key={stat.label}>
            <StatCard stat={stat} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
