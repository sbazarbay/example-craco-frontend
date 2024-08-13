import { createContext, PropsWithChildren, useContext, useState } from "react";

type User = { id: number };

type AuthProviderProps = PropsWithChildren & {
  isSignedIn?: boolean;
};

const AuthContext = createContext<User | null>(null);

export default function AuthProvider({
  children,
  isSignedIn,
}: AuthProviderProps) {
  const [user] = useState<User | null>(isSignedIn ? { id: 1 } : null);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
