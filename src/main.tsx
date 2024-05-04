import "./index.css";

import ProtectedRoute from "@components/ProtectedRoute.tsx";
import CreateWalletScreen from "@screens/CreateWallet";
import HomeScreen from "@screens/Home/index.tsx";
import ImportPrivateKeyScreen from "@screens/ImportPrivateKey.tsx";
import ImportSeedPhraseScreen from "@screens/ImportSeedPhrase";
import NotFoundScreen from "@screens/NotFound.tsx";
import RequestConnectScreen from "@screens/Request/Connect.tsx";
import RequestScreen from "@screens/Request/index.tsx";
import SignInScreen from "@screens/SignIn.tsx";
import UnlockWalletScreen from "@screens/UnlockWallet.tsx";
import { Route } from "@utils/routes.ts";
import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      {
        path: Route.Home,
        element: <HomeScreen />,
        index: true,
      },
      {
        path: Route.Request,
        element: <RequestScreen />,
        children: [
          {
            path: `${Route.RequestConnect}/:messageId`,
            element: <RequestConnectScreen />,
          },
        ],
      },
    ],
  },
  {
    path: Route.SignIn,
    element: <SignInScreen />,
  },
  {
    path: Route.UnlockWallet,
    element: <UnlockWalletScreen />,
  },
  {
    path: Route.CreateWallet,
    element: <CreateWalletScreen />,
  },
  {
    path: Route.ImportSeedPhrase,
    element: <ImportSeedPhraseScreen />,
  },
  {
    path: Route.ImportPrivateKey,
    element: <ImportPrivateKeyScreen />,
  },
  {
    path: "*",
    element: <NotFoundScreen />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
