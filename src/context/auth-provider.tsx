"use client";

import { getCurrentUser, signOut, User } from "@/lib/auth";
import { createContext, FC, ReactNode, use, useEffect, useState } from "react";

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  onSignOut: () => Promise<void>;
}
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

interface AuthProviderProps {
  children: ReactNode;
  user?: User;
}

export const AuthProvider: FC<AuthProviderProps> = ({
  children,
  user: InitialUser,
}) => {
  const [user, setUser] = useState<User | null>(InitialUser || null);
  const [isLoading, setUserLoading] = useState(!InitialUser);

  async function handleSignOut() {
    await signOut();
    setUser(null);
  }

  useEffect(() => {
    async function fetchUser() {
      const userData = await getCurrentUser();
      setUser(userData);
      setUserLoading(false);
    }

    if (!InitialUser) {
      fetchUser();
    }
  }, [InitialUser]);
  const value: AuthContextType = {
    user,
    isLoading,
    onSignOut: handleSignOut,
  };
  return <AuthContext value={value}>{children}</AuthContext>;
};

export function useAuth() {
  const context = use(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
