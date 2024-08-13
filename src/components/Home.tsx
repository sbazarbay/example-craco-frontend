import { Link } from "react-router-dom";
import Layout from "./Layout";

export default function Home() {
  return (
    <Layout>
      <h1>This is Homepage</h1>
      <Link to="/user">Go to user</Link>
    </Layout>
  );
}
