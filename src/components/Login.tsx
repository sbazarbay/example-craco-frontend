import { Form, useActionData, useNavigate } from "react-router-dom";
import "../css/Login.css";
import Layout from "./Layout";
import { createUser } from "../utils/userCR";
import { useAuth } from "./AuthProvider";
import { useEffect } from "react";

export async function action({ request }: { request: Request; params: any }) {
  const formData = await (request.formData() as any);
  const { username, password } = Object.fromEntries(formData);
  let user = null;
  if (username.length > 0 && password.length > 0) {
    // also check getUser
    user = await createUser(formData.username, formData.password);
  }
  return { user };
}

// For demo purposes (to show simple "JWT" based auth), will use Login component for both Login/Signup functionality, instead of creating another component for Signup. Also will use user.id instead of a real JWT token
export default function Login() {
  const { setUser } = useAuth();
  const actionData = useActionData();
  const navigate = useNavigate();

  useEffect(() => {
    // backend.com/api/auth/check HttpOnly -> idi naxyi
    if (actionData !== undefined) {
      setUser((actionData as any).user);
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
