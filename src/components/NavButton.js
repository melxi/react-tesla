import React from "react";
import styled from "styled-components";

export const NavButton = () => {
  return (
    <NavButtonStyle>
      <div></div>
      <div></div>
      <div></div>
    </NavButtonStyle>
  );
};

const NavButtonStyle = styled.div`
  width: 60px;
  height: 60px;
  margin-top: 31px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  color: #fff;
  cursor: pointer;

  div {
    width: 36px;
    height: 2px;
    margin: 6px 0;
    background-color: #fff;
  }
`;
