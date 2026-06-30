import { AnimatedSection } from "@/components/animations";

type SectionHeadingProps = {
  title: string;
  description: string;
};

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <AnimatedSection className="mx-auto mb-10 max-w-md text-center">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      <p className="text-muted-foreground mt-2">{description}</p>
    </AnimatedSection>
  );
}
