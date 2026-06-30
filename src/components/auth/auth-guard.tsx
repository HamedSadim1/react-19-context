"use client";

import { useAuth } from "@/context/auth-provider";
import type { ReactNode } from "react";

type AuthGuardProps = {
  loading: ReactNode;
  fallback?: ReactNode;
  children: ReactNode;
};

export function AuthGuard({
  loading,
  fallback = null,
  children,
}: AuthGuardProps) {
  const { user, isLoading } = useAuth();

  if (isLoading) return loading;
  if (!user) return fallback;
  return children;
}
