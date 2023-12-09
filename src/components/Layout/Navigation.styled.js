import styled from "styled-components";
import { NavLink } from "react-router-dom";
import heart from "../assets/Heart.svg";
import heartFav from "../assets/HeartActive.svg";
export const StyledNsvLink = styled(NavLink)`
  color: #fff;
  text-align: center;
  font-family: Lato;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  position: relative;

  &::after {
    content: "";
    height: 2px;
    width: 100%;
    background-color: #fff;
    display: block;
    position: absolute;
    bottom: -5px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  &.active {
    &::after {
      opacity: 1;
    }
  }
  &:hover:not(.active) {
    &::after {
      background-color: lightgray;
      opacity: 1;
    }
  }
`;
export const StyledFavLink = styled(NavLink)`
  display: flex;
  width: 53px;
  height: 53px;
  justify-content: center;
  align-items: center;
  background: #ececec;
  background-image: url(${heart});
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: center;
  transition: background-color 0.3s ease;
  &.active {
    background-color: #dd377d;
    background-image: url(${heartFav});
    background-repeat: no-repeat;
    background-size: 50%;
    background-position: center;
  }
  &:hover:not(.active) {
    background-color: #dd377d;
    background-image: url(${heartFav});
    background-repeat: no-repeat;
    background-size: 50%;
    background-position: center;
  }
`;

export const NavigationDiv = styled.div`
  display: flex;
  gap: 32px;
`;
