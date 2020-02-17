import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TopSearch from "./TopSearch";
import Related from "./Related";
import List from "./List";
import Sort from "./Sort";
import Loader from "./Loader";

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

  const getData = async () => {
    try {
      const resp = await fetch(
        "https://ss-task-server.herokuapp.com/api/v1/users/",
        {
          method: "GET"
        }
      );
      const data = await resp.json();
      setUserData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Wrapper>
      <TopSearch />
      <ListWrapper>
        <Related />
        {userData ? <List userData={userData} /> : <Loader />}
        <Sort />
      </ListWrapper>
    </Wrapper>
  );
};
export default ItemList;
