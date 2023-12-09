import styled from "styled-components";
export const CardDiv = styled.div`
  width: 411px;
  height: 572px;
  border: 1px solid #d3eaff;
`;
export const CardTitle = styled.h3`
  color: #1e1e1e;
  text-align: center;
  font-family: Syne;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 32px 0 16px 0;
`;
export const CardText = styled.p`
  color: #556b84;
  text-align: center;
  font-family: Lato;
  font-size: 24px;
  font-weight: 300;
  padding: 0 32px;
  height: 58px;
  overflow-y: scroll;
  margin-bottom: 64px;
  &::-webkit-scrollbar {
    background: black;
    margin: 2px;
    width: 6px;
  }
`;
export const CardBtnDiv = styled.div`
  display: flex;
  gap: 16px;
  padding: 0 32px;
`;
export const CardBuyBtn = styled.button`
  display: flex;
  padding: 12px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 278px;
  background: #d3eaff;
  color: #000;
  text-align: center;
  font-family: Syne;
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #7fc2ff;
  }
  &:focus {
    background-color: #7fc2ff;
  }
`;
export const CardFavBtn = styled.button`
  display: flex;
  width: 53px;
  height: 53px;
  justify-content: center;
  align-items: center;
  background-color: #ececec;
  border: none;
  outline: none;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #f9ff8d;
  }
`;
