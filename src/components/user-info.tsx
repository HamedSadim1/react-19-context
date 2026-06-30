import Image from "next/image";
import { User } from "@/lib/auth";

interface UserInfoProps {
  user: User;
}

export function UserInfo({ user }: UserInfoProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="relative shrink-0">
        <Image
          src={user.avatar}
          alt={`${user.firstName} ${user.lastName}`}
          width={64}
          height={64}
          className="ring-primary/20 hover:ring-primary/50 rounded-full object-cover ring-2 transition-all duration-300 hover:scale-105"
          priority
        />
        <span className="border-card absolute -right-0.5 -bottom-0.5 h-3.5 w-3.5 rounded-full border-2 bg-emerald-500" />
      </div>
      <div className="min-w-0 space-y-1">
        <h3 className="truncate text-lg font-semibold">
          {user.firstName} {user.lastName}
        </h3>
        <p className="text-muted-foreground truncate text-sm">{user.email}</p>
        <p className="text-muted-foreground text-xs">
          Member since {user.createdAt.toDateString()}
        </p>
      </div>
    </div>
  );
}
