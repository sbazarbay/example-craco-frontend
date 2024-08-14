import { Link } from "react-router-dom";
import Layout from "./Layout";
import { getUser, User as UserType } from "../utils/userCR";
import { useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";

export default function User() {
  const { user } = useAuth();
  let [fullUser, setFullUser] = useState<UserType>({});

  useEffect(() => {
    async function getUserFromApi() {
      console.log(await getUser(user!.id));
      setFullUser((await getUser(user!.id))!);
    }

    getUserFromApi();
  }, []);

  return (
    <Layout>
      <h1>User info</h1>
      <Link to="/">Go to home</Link>
      <p>Username: {fullUser.username}</p>
      <p>Email: {fullUser.email}</p>
      <p>Phone: {fullUser.phone}</p>
      <p>Address: {fullUser.address}</p>
    </Layout>
  );
}
