import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import PageWrapper from "./PageWrapper";
import ItemList from "./itemList/ItemList";
import { colors } from "./../util/theme";
import { GlobalContextProvider } from "./../context/GlobalContext";

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${colors.grayDark4};
  color: white;
`;

const App = () => {
  return (
    <GlobalContextProvider>
      <Wrapper>
        <Header />
        <PageWrapper>
          <ItemList />
        </PageWrapper>
        <Footer />
      </Wrapper>
    </GlobalContextProvider>
  );
};

export default App;
