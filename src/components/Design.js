import React from "react";
import design from "../assets/images/design.jpg";
import styled from "styled-components";

export const Design = () => {
  return (
    <DesignStyle>
      <div className="container">
        <img src={design} />
        <DesignItems>
          <DesignItem>
            <Number>01</Number>
            <Text>
              It was designed by Franz von Holzhausen, who formerly worked at
              Mazda and Volkswagen. The Roadster has a 2+2 seating arrangements,
              with smaller rear seats for two passengers.
            </Text>
          </DesignItem>
          <DesignItem>
            <Number>02</Number>
            <Text>
              The Roadster has three electric motors, one in front and two at
              the rear, allowing for all-wheel drive, and torque vectoring
              during cornering.
            </Text>
          </DesignItem>
        </DesignItems>
      </div>
    </DesignStyle>
  );
};

const DesignStyle = styled.section`
  margin-top: 100px;
`;

const DesignItems = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
`;

const DesignItem = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 570px;
  width: 100%;
  padding-right: 15px;
`;

const Number = styled.div`
  color: #b70021;
`;

const Text = styled.div`
  max-width: 430px;
  padding-top: 25px;
`;
