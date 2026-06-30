import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/context/auth-provider";
import { Sparkles } from "lucide-react";

export function Greeting() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <Skeleton className="h-6 w-40" />;
  }

  return (
    <span className="flex items-center gap-2 text-lg font-semibold">
      <Sparkles className="text-primary h-4 w-4" />
      Hello, {user ? `${user.firstName} ${user.lastName}` : "Guest"}!
    </span>
  );
}
