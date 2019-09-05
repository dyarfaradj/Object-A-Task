import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
`;
const Content = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1100px;
`;

const PageWrapper = ({ children }) => {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default PageWrapper;
