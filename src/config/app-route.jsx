import React from "react";
import Home from "./../pages/Home.js";
import Login from "./../pages/login-v3.js";

const routes = [
  {
    path: "/",
    exact: true,
    title: "Home",
    component: () => <Home />,
  },
  {
    path: "/login",
    exact: true,
    title: "Login",
    component: () => <Login />,
  },
];

export default routes;
