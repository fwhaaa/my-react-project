import { lazy } from "react";
import Home from "../views/Home";
import { Navigate } from "react-router-dom";
import React from "react";

const Page1 = lazy(() => import("../views/page1"));
const Page2 = lazy(() => import("../views/page2"));
const Page301 = lazy(() => import("../views/page301"));

const withLoadingComponent = (comp: JSX.Element) => (
  <React.Suspense fallback={<div>Loading...</div>}>{comp}</React.Suspense>
);
const routes = [
  {
    path: "/",
    element: <Navigate to="/page1" />,
  },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/page1",
        element: withLoadingComponent(<Page1 />),
      },
      {
        path: "/page2",
        element: withLoadingComponent(<Page2 />),
      },
      {
        path: "/page3/page301",
        element: withLoadingComponent(<Page301 />),
      },
    ],
  },
  {
    Path: "*",
    element: <Navigate to="/page1"></Navigate>,
  },
];

export default routes;
