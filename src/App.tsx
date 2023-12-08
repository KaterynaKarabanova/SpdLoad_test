import React from "react";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";
const Layout = lazy(() => import("./components/Layout/Layout"));
const Home = lazy(() => import("./pages/Home/Home"));
const Favorites = lazy(() => import("./pages/Favorite/Favorite"));
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <div>
                  Information is already on its way to you. Please wait...
                </div>
              }
            >
              <Layout />
            </Suspense>
          }
        >
          <Route index element={<Home />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
