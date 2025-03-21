import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./postcodeSearch";
import reportWebVitals from "./reportWebVitals";
import LandingPage from "./LandingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Postcode from "./postcodeSearch";
import PayrollSearch from "./payrollSearch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/payroll",
    element: <PayrollSearch />,
  },
  {
    path: "/postcode",
    element: <Postcode />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
