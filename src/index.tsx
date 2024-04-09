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
import {
  loader as purchaseListLoader,
  PurchaseList,
} from "./routes/purchase-list";

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
        path: "list/:listId",
        element: <PurchaseList />,
        loader: purchaseListLoader,
        // handle: {
        //   crumb: (path: string, name: string) => (
        //     <Link to={path}>contact-{name}</Link>
        //   ),
        // },
      },
      {
        index: true,
        loader: shoppingListLoader,
        //   action: contactAction,
        element: <ShoppingList />,
      },
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
