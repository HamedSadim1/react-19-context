import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/context/auth-provider";

export function Greeting() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <Skeleton className="h-6 w-34" />;
  }

  return (
    <span className="text-lg font-medium">
      Hello, {user ? `${user.firstName} ${user.lastName}` : "Guest"}!
    </span>
  );
}
