import { UserRound } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function UserProfileLoader() {
  return (
    <Card className="border-border/50 bg-card/50 mx-auto max-w-md backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <UserRound className="text-primary/40 h-5 w-5" />
          <Skeleton className="h-6 w-40" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="h-4 w-32" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4">
          <Skeleton className="h-16 w-16 shrink-0 rounded-full" />
          <div className="min-w-0 flex-1 space-y-2.5">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-4 w-44" />
            <Skeleton className="h-3 w-28" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
