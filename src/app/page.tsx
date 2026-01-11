"use client";

import { LoginScreen } from "./components/login-screen";
import { useState } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {!isLoggedIn ? (
        <LoginScreen onLogin={handleLogin} />
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-xl">Welcome!</p>
        </div>
      )}
    </>
  );
}
