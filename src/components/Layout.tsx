import { PropsWithChildren } from "react";
import "../css/Layout.css";
import { Form } from "react-router-dom";
import { useAuth } from "./AuthProvider";

type LayoutProps = PropsWithChildren;

export default function Layout({ children }: LayoutProps) {
  const { user, setUser } = useAuth();

  return (
    <div className="container">
      <section className="section">{children}</section>
      {user !== null && (
        <button
          onClick={() => {
            setUser(null);
          }}
        >
          Logout
        </button>
      )}
    </div>
  );
}
