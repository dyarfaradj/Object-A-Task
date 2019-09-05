import React from "react";
import styled from "styled-components";
import { colors } from "./../util/theme";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin: 0 50px;
  border: 1px solid black;
  background-color: ${colors.lightBlack};
  color: ${colors.gray};
  border-width: 2px;
  border-color: ${colors.grayDark2};
`;

const Ul = styled.ul`
  & > * {
    display: inline;
    margin: 10px;
  }
`;

const Ul2 = styled.ul`
  float: right;
  & > * {
    display: inline;
    margin: 10px;
  }
`;

const A = styled.a`
  text-decoration: none;
  color: ${colors.gray};
  font-weight: 500;
  font-style: normal;
  font-size: 17px;
`;

const GetStarted = styled.a`
  text-decoration: none;
  color: ${colors.orange};
  font-weight: 500;
  font-style: normal;
  font-size: 17px;
`;

const About = styled.a`
  text-decoration: none;
  color: ${colors.green};
  font-weight: 500;
  font-style: normal;
  font-size: 17px;
`;

const Footer = () => {
  return (
    <Wrapper>
      <Ul>
        <li>
          <A href="#">Terms</A>
        </li>
        <li>
          <A href="#">Privacy</A>
        </li>
      </Ul>
      <Ul2>
        <li>
          <About href="#">About Skilldar</About>
        </li>
        <li>
          <GetStarted href="#">Get Started</GetStarted>
        </li>
      </Ul2>
    </Wrapper>
  );
};

export default Footer;
