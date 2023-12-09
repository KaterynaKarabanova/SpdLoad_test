import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import { Suspense } from "react";
import logo from "../assets/logo.jpg";
import { NavLink } from "react-router-dom";
import {
  LayoutFlex,
  LayoutHeader,
  LayoutHeaderBack,
  LayoutSignButton,
} from "./Layout.styled";
import { Container } from "../../pages/Home/Home.styled";
import { StyledFavLink } from "./Navigation.styled";
const Layout = () => {
  return (
    <main>
      <LayoutHeaderBack>
        <Container>
          <LayoutHeader>
            <NavLink key={"/"} to={"/"}>
              <img src={logo} alt="" />
            </NavLink>
            <Navigation />
            <LayoutFlex>
              <StyledFavLink
                key={"/favorites"}
                to={"/favorites"}
              ></StyledFavLink>
              <LayoutSignButton>Sign in</LayoutSignButton>
            </LayoutFlex>
          </LayoutHeader>
        </Container>
      </LayoutHeaderBack>

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
