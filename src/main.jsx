import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About";
import Layout from "./Layout.jsx";

/*  Start Bootstrap Importing Section */

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

/*  End Bootstrap Section */

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="*"
        element={
          <center className="mt-5">
            <h1>Page Not Found!!</h1>
          </center>
        }
      />
      <Route
        path="*"
        element={
          <center>
            <h1>Not Found!!</h1>
          </center>
        }
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
