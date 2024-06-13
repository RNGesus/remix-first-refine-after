import { Authenticated, Refine } from "@refinedev/core";
import routerProvider from "@refinedev/remix-router";
import dataProvider from "@refinedev/simple-rest";
import { Outlet, Route, Routes } from "@remix-run/react";
import { ReactNode } from "react";
import { accessControlProvider } from "~/providers/access-control-provider";
import { authProvider } from "~/providers/auth-provider";
import { i18nProvider } from "~/providers/i18n-provider";
import { notificationProvider } from "~/providers/notification-provider";

export default function RefineContext({ children }: { children: ReactNode }) {
  return (
    <Refine
      routerProvider={routerProvider}
      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
      authProvider={authProvider}
      i18nProvider={i18nProvider}
      notificationProvider={notificationProvider}
      accessControlProvider={accessControlProvider}
      resources={[
        {
          name: "products",
          list: "/products",
        },
      ]}
      options={{ syncWithLocation: true }}
    >
      {/* <Routes>
        <Route
          element={
            <Authenticated
              key="authenticated-routes"
              fallback={<p>here is nothing!</p>}
            >
              <Outlet />
            </Authenticated>
          }
        >
          <Route
            path="/products"
            element={
              // <ProductList>
              <Outlet />
              // </ProductList>
            }
          ></Route>
        </Route>
      </Routes> */}
      <Outlet />
      {/* {children} */}
    </Refine>
  );
}
