import { Greeting } from "@/components/auth/greeting";
import { SignOutButton } from "@/components/auth/sign-out-button";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export function Navbar() {
  return (
    <nav className="border-border/40 bg-background/70 supports-[backdrop-filter]:bg-background/50 sticky top-0 z-50 w-full border-b backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Greeting />
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <SignOutButton />
        </div>
      </div>
    </nav>
  );
}
