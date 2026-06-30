import { LogOut } from "lucide-react";
import { Button, Skeleton } from "@/components/ui";
import { AuthGuard } from "./auth-guard";
import { useAuth } from "@/context/auth-provider";

export function SignOutButton() {
  const { onSignOut } = useAuth();

  return (
    <AuthGuard loading={<Skeleton className="h-9 w-24" />}>
      <Button onClick={onSignOut} variant="outline" size="sm">
        <LogOut className="h-4 w-4" />
        Sign Out
      </Button>
    </AuthGuard>
  );
}
