import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Form } from "react-router-dom";
import "../css/Login.css";

function Login() {
  const authContext = useContext(AuthContext);
  return (
    <div>
      <Form method="post" id="login-form" className="login-form">
        <div className="form-section">
          <span>Login</span>
          <input aria-label="Login" type="text" name="login" />
        </div>
        <div className="form-section">
          <span>Password</span>
          <input aria-label="Password" type="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </Form>
    </div>
  );
}

export default Login;
