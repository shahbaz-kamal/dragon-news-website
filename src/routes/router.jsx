import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import DragonNewsHome from "../components/DragonNewsHome";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../components/Login";
import Register from "../components/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to={"/category/01"}></Navigate>,
      },
      {
        path: "/category/:id",
        element: <DragonNewsHome></DragonNewsHome>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  { path: "/news", element: <h1>News Layout layout</h1> },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  { path: "*", element: <h1>Error</h1> },
]);

export default router;
