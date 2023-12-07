import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import { Suspense } from "react";
const Layout = () => {
  return (
    <main>
      <div>
        <Navigation />
      </div>
      <div>
        <Suspense
          fallback={
            <div
              style={{
                fontSize: "30px",
                textAlign: "center",
              }}
            >
              {" "}
              Information is already on its way to you. Please wait...
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
};
export default Layout;
