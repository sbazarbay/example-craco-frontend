import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./components/Login";
import reportWebVitals from "./utils/reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthContext } from "./components/AuthContext";
import User from "./components/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/user",
    element: <User />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <AuthContext.Provider value={""}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
