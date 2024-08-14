import { createContext, PropsWithChildren, useContext, useState } from "react";
import React from "react";

type User = { id: string } | null;

type AuthProviderProps = PropsWithChildren & {
  isSignedIn?: boolean;
};

const AuthContext = createContext<{
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}>({ user: { id: "" }, setUser: () => {} });

export default function AuthProvider({
  children,
  isSignedIn,
}: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
