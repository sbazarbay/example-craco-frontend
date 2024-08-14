import { Form, useActionData, useNavigate } from "react-router-dom";
import "../css/Login.css";
import Layout from "./Layout";
import { createUser, getUserByUsername, User } from "../utils/userCR";
import { useAuth } from "./AuthProvider";
import { useEffect } from "react";

export async function action({ request }: { request: Request }) {
  const formData = await (request.formData() as any);
  const { username, password } = Object.fromEntries(formData);
  let user = null;
  if (username.length > 0 && password.length > 0) {
    user = await getUserByUsername(username);
    if (user === null) {
      user = await createUser(username, password);
    }
  }
  return { user };
}

// For demo purposes (to show simple "JWT" based auth), will use Login component for both Login/Signup functionality, instead of creating another component for Signup. Also will use user.id instead of a real JWT token
export default function Login() {
  const { setUser } = useAuth();
  const actionData: { user: User } = useActionData() as any;
  const navigate = useNavigate();

  useEffect(() => {
    // TODO: backend.com/api/auth/check HttpOnly -> JWT
    if (actionData !== undefined && actionData.user !== null) {
      setUser({ id: actionData.user.id! });
      navigate("/", { replace: true });
    }
  }, [actionData]);

  return (
    <Layout>
      <Form method="post" id="login-form">
        <div className="form-section">
          <span>Username</span>
          <input aria-label="Username" type="text" name="username" />
        </div>
        <div className="form-section">
          <span>Password</span>
          <input aria-label="Password" type="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </Form>
    </Layout>
  );
}
