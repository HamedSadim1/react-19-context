import { Greeting, SignOutButton } from "@/components/auth";
import { ThemeToggle } from "@/components/theme";
import { Container } from "./container";

export function Navbar() {
  return (
    <nav className="border-border/40 bg-background/70 supports-[backdrop-filter]:bg-background/50 sticky top-0 z-50 w-full border-b backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <Greeting />
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <SignOutButton />
        </div>
      </Container>
    </nav>
  );
}
