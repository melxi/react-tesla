import React from "react";
import styled from "styled-components";

export const Stats = () => {
  return (
    <StatsSection>
      <div className="container">
        <StatsItems>
          <StatsItem>
            <Title>Engine</Title>
            <Info>
              2,1 <span>sec</span>
            </Info>
            <Desc>acceleration</Desc>
          </StatsItem>
          <StatsItem>
            <Title>Battery</Title>
            <Info>
              1000 <span>km</span>
            </Info>
            <Desc>range</Desc>
          </StatsItem>
          <StatsItem>
            <Title>Speed</Title>
            <Info sign>
              400 <span>km/h</span>
            </Info>
            <Desc>top speed</Desc>
          </StatsItem>
        </StatsItems>
      </div>
    </StatsSection>
  );
};

const StatsSection = styled.section`
  margin: 160px 0 100px;
`;

const StatsItems = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
`;

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
