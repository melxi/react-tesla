import React from "react";
import styled from 'styled-components';

export const StatsItem = ({ title, value, sign, info, desc }) => {
  return (
    <div>
      <Title>{title}</Title>
      <Info sign={sign}>
        {value} <span>{info}</span>
      </Info>
      <Desc>{desc}</Desc>
    </div>
  );
};

const Title = styled.div`
  margin-bottom: 19px;
  line-height: 28px;
`;

const Info = styled.div`
  margin-bottom: 7px;
  font-family: Roboto;
  font-size: 96px;
  line-height: 112px;
  
  span {
    margin-left: -20px;
    position: relative;
    font-size: 24px;
    line-height: 28px;
    &::before {
      content: '${props => props.sign ? "+" : ""}';
      position: absolute;
      top: -60px;
    }
  }
`;

const Desc = styled.div`
  color: #b70021;
`;



