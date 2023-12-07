import styled from "styled-components";
export const CustomDotsList = styled.ul`
  position: absolute;
  bottom: 0px;
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
        top: 2.5px;
        left: 2px;
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
