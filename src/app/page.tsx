"use client";

import { LoginScreen } from "./components/login-screen";
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

  return (
    <div className="flex items-center justify-center min-h-screen flex-col gap-4">
      <p className="text-xl">Welcome, {user?.email}!</p>
      <button
        onClick={logout}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
}
