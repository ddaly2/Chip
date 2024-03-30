import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/App";
import { FinancialToolsPage, CalculatorPage, RoutingErrorPage } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <RoutingErrorPage />,
  },
  {
    path: "/calculator",
    element: <CalculatorPage />,
    errorElement: <RoutingErrorPage />,
  },
  {
    path: "/tools",
    element: <FinancialToolsPage />,
    errorElement: <RoutingErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
