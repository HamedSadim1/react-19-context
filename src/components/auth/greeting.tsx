import { Skeleton } from "@/components/ui";
import { AuthGuard } from "./auth-guard";
import { useAuth } from "@/context/auth-provider";
import { Sparkles } from "lucide-react";

export function Greeting() {
  const { user } = useAuth();
  const name = user ? `${user.firstName} ${user.lastName}` : "Guest";

  return (
    <AuthGuard
      loading={<Skeleton className="h-6 w-40" />}
      fallback={<GreetingContent name="Guest" />}
    >
      <GreetingContent name={name} />
    </AuthGuard>
  );
}

function GreetingContent({ name }: { name: string }) {
  return (
    <span className="flex items-center gap-2 text-lg font-semibold">
      <Sparkles className="text-primary h-4 w-4" />
      Hello, {name}!
    </span>
  );
}
