import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/context/auth-provider";

export function SignOutButton() {
  const { user, isLoading, onSignOut } = useAuth();
  if (isLoading) {
    return <Skeleton className="h-9 w-24" />;
  }

  if (!user) {
    return null;
  }

  return (
    <Button onClick={onSignOut} variant="outline" size="sm">
      <LogOut className="h-4 w-4" />
      Sign Out
    </Button>
  );
}
