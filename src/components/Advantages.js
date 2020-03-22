import React from "react";
import advantage1 from "../assets/images/advantages-1.jpg";
import advantage2 from "../assets/images/advantages-2.jpg";
import styled from "styled-components";

export const Advantages = () => {
  return (
    <section>
      <div className="container">
        <Advantage>
          <Desc>
            <Title>Speed</Title>
            <Text>The fastest accelerating production car ever produced</Text>
          </Desc>
          <img src={advantage1} />
        </Advantage>
        <Advantage>
          <img src={advantage2} />
          <Desc>
            <Title rightBottom>Advantages</Title>
            <Text>
              <ul>
                <li>Rain sensor</li>
                <li>Headlight sensor</li>
                <li>Autopilot</li>
                <li>Navigation system</li>
                <li>Side-mirror defroster</li>
                <li>Power steering</li>
                <li>Panoramic sunroof</li>
                <li>Xenon lights</li>
              </ul>
            </Text>
          </Desc>
        </Advantage>
      </div>
    </section>
  );
};

const Advantage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-top: 100px;
`;

const Desc = styled.div`
  max-width: 570px;
  width: 100%;
`;

const Title = styled.h2`
  position: absolute;
  top: ${props => (props.rightBottom ? "" : "0")};
  right: ${props => (props.rightBottom ? "0" : "")};
  bottom: ${props => (props.rightBottom ? "0" : "")};
  font-size: 36px;
  line-height: 42px;
  color: #b70021;
`;

const Text = styled.div`
  width: 300px;
`;
