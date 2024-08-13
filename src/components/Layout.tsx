import { PropsWithChildren } from "react";
import "../css/Layout.css";

type LayoutProps = PropsWithChildren;

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="container">
      <section>{children}</section>
      {/* TODO: add logout functionality */}
      <button>Logout</button>
    </div>
  );
}
