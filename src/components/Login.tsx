import { Form } from "react-router-dom";
import "../css/Login.css";
import Layout from "./Layout";

// For demo purposes (to show simple "JWT" based auth), will use Login component for both Login/Signup functionality, instead of creating another component for Signup
export default function Login() {
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
