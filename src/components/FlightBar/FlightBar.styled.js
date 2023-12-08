import styled from "styled-components";
export const CustomDotsList = styled.ul`
  position: absolute;
  bottom: -60px;
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
  li {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 0 5px;
    padding: 0;
    cursor: pointer;
    &.slick-active {
      button::before {
        opacity: 1;
        color: black;
      }
    }
    button {
      font-size: 0;
      line-height: 0;
      display: block;
      width: 24px;
      height: 24px;
      padding: 5px;
      cursor: pointer;
      color: transparent;
      border: 1px solid black;
      border-radius: 50%;
      outline: none;
      background: transparent;
      &:hover {
        outline: none;
      }
      &:focus {
        outline: none;
      }
      &::before {
        font-size: 50px; /* Adjusts the dot size */
        line-height: 20px;
        position: absolute;
        top: -1.5px;
        left: 1.7px;
        width: 20px;
        height: 20px;
        content: "•"; /* Dot symbol */
        text-align: center;
        opacity: 0.25;
        color: transparent;
      }
    }
  }
`;
export const FlightBarWrapper = styled.div`
  padding: 96px 80px 136px 80px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
export const FlightBarTitle = styled.h2`
  color: #1e1e1e;
  text-align: left;
  font-family: Syne;
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
`;
export const ArrowDivNext = styled.div`
  position: absolute;
  height: 44px;
  width: 44px;
  top: -75px;
  right: 15px;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #ececec;
`;
export const ArrowDivPrev = styled(ArrowDivNext)`
  right: 70px;
`;
export const ErrorText = styled.p`
  text-align: center;
  font-family: Syne;
  font-size: 48px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
`;
