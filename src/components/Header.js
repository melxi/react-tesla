import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png";
import { NavButton } from "./NavButton";
import { Button } from "./Button";

export const Header = () => {
  return (
    <HeaderStyle>
      <div className="container">
        <HeaderTop>
          <Logo src={logo} />
          <NavButton />
        </HeaderTop>
        <HeaderBottom>
          <h1>Roadster</h1>
          <p>​The quickest car <br/>in the world, <br/>with record-setting <br/>acceleration, range <br/>and performance</p>
          <Button>Order test drive</Button>
        </HeaderBottom>
      </div>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  height: 100vh;
  position: absolute;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 9;
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  margin-top: 36px;
`;

const HeaderBottom = styled.div`
  margin-top: 29px;
  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 96px;
    line-height: 112px;
  }
  p {
    max-width: 284px;
    margin-top: 40px;
    margin-bottom: 25px;
  }
`;
