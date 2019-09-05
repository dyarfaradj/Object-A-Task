import React from "react";
import styled from "styled-components";
import TopSearch from "./TopSearch";
import Related from "./Related";
import List from "./List";
import Sort from "./Sort";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 850px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const ItemList = () => {
  return (
    <Wrapper>
      <TopSearch />
      <ListWrapper>
        <Related />
        <List />
        <Sort />
      </ListWrapper>
    </Wrapper>
  );
};
export default ItemList;
