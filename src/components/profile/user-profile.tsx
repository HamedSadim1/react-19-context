import { UserRound } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { AuthGuard } from "@/components/auth";
import { useAuth } from "@/context/auth-provider";
import type { User } from "@/lib/auth";
import { UserInfo } from "./user-info";
import { UserProfileLoader } from "./user-profile-loader";
import { EmptyUserProfile } from "./empty-user-profile";

export function UserProfile() {
  return (
    <AuthGuard loading={<UserProfileLoader />} fallback={<EmptyUserProfile />}>
      <ProfileCard user={useAuth().user!} />
    </AuthGuard>
  );
}

function ProfileCard({ user }: { user: User }) {
  return (
    <Card variant="glass" className="mx-auto max-w-md">
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
