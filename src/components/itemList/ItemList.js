import React, { useEffect, useState } from "react";
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
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch("https://ss-task-server.herokuapp.com/rest/user/all")
      .then(response => response.json())
      .then(data => setUserData(data));
  }, []);

  return (
    <Wrapper>
      <TopSearch />
      <ListWrapper>
        <Related />
        {userData && <List userData={userData} />}
        <Sort />
      </ListWrapper>
    </Wrapper>
  );
};
export default ItemList;
