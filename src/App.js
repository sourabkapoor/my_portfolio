import React from "react"
import './App.scss';
import { routes } from "./routes/MainRoutes";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import { Page404 } from "./components/page404/Page404";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <Page404 />,
      children: routes
    }
  ]);

  return (
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  );
}

export default App;
