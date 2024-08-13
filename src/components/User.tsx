import { Link } from "react-router-dom";
import Layout from "./Layout";

export default function User() {
  // TODO: fetch user data using localforage

  return (
    <Layout>
      <h1>User info</h1>
      <Link to="/">Go to home</Link>
      <p>Username: </p>
      <p>Email: </p>
      <p>Phone: </p>
      <p>Address: </p>
    </Layout>
  );
}
