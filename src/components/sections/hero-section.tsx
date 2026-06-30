"use client";

import { StaggerContainer, StaggerItem } from "@/components/animations";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pt-24 pb-16">
      {/* Background Gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--primary)/0.12,transparent)]" />
      </div>

      <StaggerContainer className="mx-auto max-w-4xl text-center">
        <StaggerItem>
          <span className="border-primary/20 bg-primary/5 text-primary mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
            <span className="bg-primary mr-1.5 inline-block h-1.5 w-1.5 animate-pulse rounded-full" />
            {siteConfig.name}
          </span>
        </StaggerItem>

        <StaggerItem>
          <h1 className="from-foreground via-foreground/90 to-foreground/60 mt-6 bg-gradient-to-br bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            Modern State Management
            <br />
            <span className="from-primary bg-gradient-to-r to-purple-500 bg-clip-text text-transparent">
              with React Context
            </span>
          </h1>
        </StaggerItem>

        <StaggerItem>
          <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg text-pretty">
            Leer hoe je Context gebruikt in React 19 met de nieuwe{" "}
            <code className="bg-muted rounded-md px-1.5 py-0.5 font-mono text-sm">
              use()
            </code>{" "}
            hook. Een praktische tutorial door {siteConfig.author}.
          </p>
        </StaggerItem>

        <StaggerItem>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="#profile"
              className="bg-primary text-primary-foreground shadow-primary/25 hover:shadow-primary/30 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              Bekijk Profiel
            </a>
            <a
              href={siteConfig.links.reactDocs}
              target="_blank"
              rel="noopener noreferrer"
              className="border-border bg-background/50 hover:bg-accent inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-sm font-medium backdrop-blur-sm transition-all hover:scale-105"
            >
              React Docs
            </a>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
}
