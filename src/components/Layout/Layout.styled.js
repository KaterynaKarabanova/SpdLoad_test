import styled from "styled-components";
export const LayoutHeader = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  padding: 13px 80px;
  justify-content: space-between;
`;

export const LayoutHeaderBack = styled.div`
  background: rgba(30, 30, 30, 0.48);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
`;
export const LayoutFlex = styled.div`
  display: flex;
  gap: 12px;
`;

export const LayoutSignButton = styled.button`
  display: flex;
  width: 163px;
  padding: 12px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  outline: none;
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
