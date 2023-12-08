import styled from "styled-components";
import { NavLink } from "react-router-dom";
import heart from "../assets/Heart.svg";
import heartFav from "../assets/HeartActive.svg";
export const StyledNsvLink = styled(NavLink)`
  color: #fff;
  text-align: center;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration: none;
  text-transform: uppercase;
  position: relative;
  &.active {
    &::after {
      content: "";
      height: 2px;
      width: 100%;
      background-color: #fff;
      display: block;
      position: absolute;
      bottom: -5px;
    }
  }
  &:hover:not(.active) {
    &::after {
      content: "";
      height: 2px;
      width: 100%;
      background-color: lightgrey;
      display: block;
      position: absolute;
      bottom: -5px;
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
  &.active {
    background: #dd377d;
    background-image: url(${heartFav});
    background-repeat: no-repeat;
    background-size: 50%;
    background-position: center;
  }
  &:hover:not(.active) {
    background: #dd377d;
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
