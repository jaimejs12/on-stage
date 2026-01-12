"use client";

import { LoginScreen } from "./components/login-screen";
import { HomeScreen } from "./components/home-screen";
import { useAuth } from "@/lib/hooks/use-auth";

export default function Home() {
  const { isAuthenticated, isLoading, user, logout } = useAuth();

  // Prevent hydration mismatch
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginScreen onLogin={() => { }} />;
  }

  return <HomeScreen />;
}
