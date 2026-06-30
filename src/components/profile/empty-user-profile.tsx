import { UserRound } from "lucide-react";
import { Card, CardContent } from "@/components/ui";

export function EmptyUserProfile() {
  return (
    <Card variant="glass" className="mx-auto max-w-md">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center gap-3 py-8">
          <div className="bg-muted flex h-12 w-12 items-center justify-center rounded-full">
            <UserRound className="text-muted-foreground h-6 w-6" />
          </div>
          <p className="text-muted-foreground text-center">
            Geen gebruiker gevonden
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
