"use client";

import { Footer, Navbar } from "@/components/layout";
import { UserProfile } from "@/components/profile";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { Activity, Shield, Zap } from "lucide-react";

const stats = [
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

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 pt-24 pb-16">
          {/* Background Gradient */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--primary)/0.12,transparent)]" />
            <div className="via-border/50 absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent to-transparent" />
          </div>

          <div className="mx-auto max-w-4xl text-center">
            <div className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both duration-700">
              <span className="border-primary/20 bg-primary/5 text-primary mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
                <span className="bg-primary mr-1.5 inline-block h-1.5 w-1.5 animate-pulse rounded-full" />
                React 19 Context Tutorial
              </span>
            </div>

            <h1 className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both from-foreground via-foreground/90 to-foreground/60 mt-6 bg-gradient-to-br bg-clip-text text-4xl font-extrabold tracking-tight text-transparent duration-700 sm:text-5xl md:text-6xl">
              Modern State Management
              <br />
              <span className="from-primary bg-gradient-to-r to-purple-500 bg-clip-text text-transparent">
                with React Context
              </span>
            </h1>

            <p className="animate-in fade-in slide-in-from-bottom-5 fill-mode-both text-muted-foreground mx-auto mt-6 max-w-2xl text-lg text-pretty duration-700">
              Leer hoe je Context gebruikt in React 19 met de nieuwe{" "}
              <code className="bg-muted rounded-md px-1.5 py-0.5 font-mono text-sm">
                use()
              </code>{" "}
              hook. Een praktische tutorial door Coding in Flow.
            </p>

            <div className="animate-in fade-in slide-in-from-bottom-5 fill-mode-both mt-8 flex items-center justify-center gap-4 duration-700">
              <a
                href="#profile"
                className="bg-primary text-primary-foreground shadow-primary/25 hover:shadow-primary/30 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                Bekijk Profiel
              </a>
              <a
                href="https://react.dev/reference/react/use"
                target="_blank"
                rel="noopener noreferrer"
                className="border-border bg-background/50 hover:bg-accent inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-sm font-medium backdrop-blur-sm transition-all hover:scale-105"
              >
                React Docs
              </a>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="container mx-auto px-6 py-12">
          <div className="mx-auto mb-10 max-w-md text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Waarom React 19?
            </h2>
            <p className="text-muted-foreground mt-2">
              De nieuwste features die ontwikkeling sneller en leuker maken
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <Card
                key={stat.label}
                className="group border-border/50 bg-card/50 hover:border-primary/30 hover:shadow-primary/5 relative overflow-hidden backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />
                <CardHeader className="relative">
                  <div
                    className={`bg-background mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg ${stat.iconColor}`}
                  >
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{stat.value}</CardTitle>
                  <CardDescription>{stat.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative pt-0">
                  <span className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
                    {stat.label}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* User Profile Section */}
        <section id="profile" className="container mx-auto px-6 pt-8 pb-24">
          <div className="mx-auto mb-10 max-w-md text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Je Profiel
            </h2>
            <p className="text-muted-foreground mt-2">
              Je persoonlijke gegevens, geladen via de Context API
            </p>
          </div>
          <UserProfile />
        </section>
      </main>

      <Footer />
    </div>
  );
}
