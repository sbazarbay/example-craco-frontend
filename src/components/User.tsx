import { useContext } from "react";
import "../css/User.css";
import { AuthContext } from "./AuthContext";

export default function User() {
  const authContext = useContext(AuthContext);

  // TODO: fetch user data using localforage

  if (authContext.length === 0) {
    // TODO: redirect to login
    console.error("wait u shouldnt be here");
  }

  return (
    <div className="user">
      <section>
        <h1>User info</h1>

        <p>Username: </p>
        <p>Email: </p>
        <p>Phone: </p>
        <p>Address: </p>
      </section>
      {/* TODO: add logout functionality */}
      <button>Logout</button>
    </div>
  );
}
