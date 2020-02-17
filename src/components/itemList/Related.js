import React from "react";
import styled from "styled-components";
import { colors } from "./../../util/theme";
import { mockRelatedData } from "../../util/mock";

const Container = styled.div`
  width: 165px;
  padding: 0 20px 20px;
`;

const Title = styled.h3`
  padding-bottom: 8px;
  font-family: "SourceSansPro-SemiBold", Helvetica, Arial, serif;
  font-size: 14px;
  color: ${colors.grayLight};
  text-align: center;
`;

const Ul = styled.ul`
  list-style: none;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  color: ${colors.red};
  text-align: center;
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  margin: 0 0 9px 0;
`;

const Related = () => {
  return (
    <Container>
      <Title>RELATED SEARCHES</Title>
      <Ul>
        {mockRelatedData.map((text, i) => (
          <Li key={i}>{text}</Li>
        ))}
      </Ul>
    </Container>
  );
};

export default Related;
