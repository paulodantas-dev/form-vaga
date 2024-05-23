import { createBrowserRouter } from "react-router-dom";
import { Home } from "@/pages/Home";
import { Opportunity } from "@/pages/Opportunity";
import { Layout } from "@/Layout";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "new-opportunity",
        element: <Opportunity />,
      },
    ],
  },
]);
