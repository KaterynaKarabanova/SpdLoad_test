import styled from "styled-components";
import banner from "../../components/assets/heroImage3.jpg";
export const FavouriteList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 130px 63px 104px 63px;
  row-gap: 50px;
`;

export const FavBack = styled.div`
  background-color: black;
`;
export const FavClearBtn = styled.button`
  color: #556b84;
  text-align: center;
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  background-color: transparent;
  outline: none;
  border: none;
  position: absolute;
  top: 60px;
  right: 80px;
  &:hover {
    color: black;
    font-weight: 600;
  }
`;
export const FavBanner = styled.div`
  height: 450px;
  width: 100%;
  color: #fff;
  text-align: center;
  font-family: Syne;
  font-size: 48px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  background-image: url(${banner});
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(30, 30, 30, 0.5);
    z-index: 1;
  }
`;
export const FavouriteTitle = styled.h2`
  color: #fff;
  text-align: center;
  font-family: Syne;
  font-size: 48px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
  z-index: 3;
  position: absolute;
  top: 50%;
  left: 35%;
`;

export const NoFlightDiv = styled.div`
  width: 1320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 200px;
`;
export const NoFlightTitle = styled(FavouriteTitle)`
  position: static;
  color: black;
`;
export const NoFlightImg = styled.img`
  width: 200px;
  margin-top: 20px;
`;
