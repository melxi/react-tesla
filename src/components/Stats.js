import React from "react";
import { StatsItem } from './StatsItem';
import styled from "styled-components";

export const Stats = () => {
  return (
    <StatsSection>
      <div className="container">
        <StatsItems>
          <StatsItem title="Engine" value="2,1" info="sec" desc="acceleration"/>
          <StatsItem title="Battery" value="1000" info="km" desc="range"/>
          <StatsItem title="Speed" value="400" info="km/h" sign desc="top speed"/>
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