"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { ANIM, EASE_OUT_CUBIC, VIEWPORT_ONCE } from "@/config/constants";

const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: ANIM.OFFSET_LARGE,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIM.FADE_IN_DURATION,
      ease: EASE_OUT_CUBIC,
    },
  },
};

const fadeInScale: Variants = {
  hidden: {
    opacity: 0,
    scale: ANIM.SCALE_START,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIM.FADE_IN_SCALE_DURATION,
      ease: EASE_OUT_CUBIC,
    },
  },
};

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "fadeInUp" | "fadeInScale";
};

export function AnimatedSection({
  children,
  className,
  delay = 0,
  variant = "fadeInUp",
}: AnimatedSectionProps) {
  const variants = variant === "fadeInScale" ? fadeInScale : fadeInUp;

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: ANIM.STAGGER_CHILDREN_DELAY,
      delayChildren: ANIM.STAGGER_INITIAL_DELAY,
    },
  },
};

const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: ANIM.OFFSET_SMALL,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIM.STAGGER_ITEM_DURATION,
      ease: EASE_OUT_CUBIC,
    },
  },
};

type StaggerContainerProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

function StaggerContainer({
  children,
  className,
  delay = 0,
}: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      transition={{ delayChildren: delay }}
    >
      {children}
    </motion.div>
  );
}

function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  );
}

export { StaggerContainer, StaggerItem };
