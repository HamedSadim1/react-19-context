import { Heart } from "lucide-react";
import { Container } from "./container";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-border/40 bg-muted/30 border-t">
      <Container className="flex flex-col items-center gap-3 py-8 sm:flex-row sm:justify-between">
        <p className="text-muted-foreground flex items-center gap-1.5 text-sm">
          Gemaakt met{" "}
          <Heart className="inline h-3.5 w-3.5 fill-red-500 text-red-500" />{" "}
          door{" "}
          <span className="text-foreground font-semibold">
            {siteConfig.author}
          </span>
        </p>
        <p className="text-muted-foreground text-sm">
          {siteConfig.name} &copy; {new Date().getFullYear()}
        </p>
      </Container>
    </footer>
  );
}
