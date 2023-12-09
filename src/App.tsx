import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";
import { favourite } from "./recoil/atoms";
import { useRecoilState } from "recoil";
const Layout = lazy(() => import("./components/Layout/Layout"));
const Home = lazy(() => import("./pages/Home/Home"));
const Favorites = lazy(() => import("./pages/Favorite/Favorite"));
const App = () => {
  const [state, setState] = useRecoilState(favourite);
  useEffect(() => {
    const favoritessFlight = localStorage.getItem("Favourites");
    if (favoritessFlight) {
      setState(JSON.parse(favoritessFlight));
    }
  }, [setState]);
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
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
