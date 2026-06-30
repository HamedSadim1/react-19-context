import { UserRound } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { useAuth } from "@/context/auth-provider";
import { UserInfo } from "./user-info";
import { UserProfileLoader } from "./user-profile-loader";

export function UserProfile() {
  const { isLoading, user } = useAuth();

  if (isLoading) {
    return <UserProfileLoader />;
  }

  if (!user) {
    return (
      <Card className="mx-auto max-w-md">
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

  return (
    <Card className="border-border/50 bg-card/50 hover:border-primary/30 hover:shadow-primary/5 mx-auto max-w-md backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <UserRound className="text-primary h-5 w-5" />
          Gebruikersprofiel
        </CardTitle>
        <CardDescription>Je persoonlijke account informatie</CardDescription>
      </CardHeader>
      <CardContent>
        <UserInfo user={user} />
      </CardContent>
    </Card>
  );
}
