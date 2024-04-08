import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { BGWrapper } from "./background/BGWrapper";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import {
  loader as shoppingListLoader,
  ShoppingList,
} from "./routes/shopping-list";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    // loader: rootLoader,
    // action: rootAction,
    // handle: {
    //   crumb: (path: string, name: string) => <Link to={path}>root</Link>,
    // },
    id: "root",
    children: [
      {
        index: true,
        loader: shoppingListLoader,
        //   action: contactAction,
        element: <ShoppingList />,
      },
      // {
      //   path: "list/:listId",
      //   element: <Contact />,
      //   handle: {
      //     crumb: (path: string, name: string) => (
      //       <Link to={path}>contact-{name}</Link>
      //     ),
      //   },
      // },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
