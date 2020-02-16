import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import ListRow from "./ListRow";
import { userData } from "../../util/mock";
import { GlobalContext } from "../../context/GlobalContext";

const Wrapper = styled.div`
  max-width: 693px;
  padding: 10px;
`;

const ListWrapper = styled.div`
  height: 50%;
`;

const Pagination = styled.div`
  display: flex;
  padding-top: 20px;
`;

const PaginationText = styled.span`
  color: gray;
  font-size: 14px;
  margin-right: 15px;
`;

const PaginationButton = styled.button`
  background: none;
  border: none;
  color: ${p => (p.active ? "orange" : "gray")};
  font-size: 14px;
`;

const PaginationButtonNext = styled.button`
  background: none;
  border: none;
  color: gray;
  font-size: 14px;
`;

const getItterableArr = length => {
  return Array.apply(null, Array(length));
};

const List = props => {
  const { userData } = props;
  console.log(userData);
  const itemsPerPage = 3;
  const [paginationButtons, setPaginationButtons] = useState(
    getItterableArr(Math.ceil(userData.length / itemsPerPage))
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageItems, setCurrentPageItems] = useState(
    userData.slice(0, itemsPerPage)
  );
  const { countyFilter, textFilter } = useContext(GlobalContext);

  const paginate = pageNumber => {
    if (
      pageNumber > Math.ceil(userData.length / itemsPerPage) ||
      pageNumber < 1
    )
      return;
    setCurrentPage(pageNumber);
    const pageIndex = pageNumber - 1;
    const itemsFromIndex = pageIndex * itemsPerPage;
    const itemsToIndex = pageIndex * itemsPerPage + itemsPerPage;
    const newPageItems = userData.slice(itemsFromIndex, itemsToIndex);
    setCurrentPageItems(newPageItems);
  };

  useEffect(() => {
    const filteredList = userData
      .filter(item =>
        countyFilter === "All Cities" ? true : item.city === countyFilter
      )
      .filter(
        item =>
          item.name.toLowerCase().includes(textFilter) ||
          item.bio.toLowerCase().includes(textFilter)
      );
    setCurrentPage(1);
    setCurrentPageItems(filteredList.slice(0, itemsPerPage));
    setPaginationButtons(
      getItterableArr(Math.ceil(filteredList.length / itemsPerPage))
    );
  }, [countyFilter, textFilter]);

  return (
    <Wrapper>
      <ListWrapper>
        {currentPageItems.map(item => {
          return <ListRow key={item.id} data={item} />;
        })}
      </ListWrapper>
      <Pagination>
        <PaginationText>PAGE</PaginationText>
        <PaginationButtonNext onClick={() => paginate(currentPage + -1)}>
          &lt;
        </PaginationButtonNext>
        {paginationButtons.map((i, index) => (
          <PaginationButton
            key={index}
            active={index + 1 === currentPage}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </PaginationButton>
        ))}
        <PaginationButtonNext onClick={() => paginate(currentPage + 1)}>
          >
        </PaginationButtonNext>
      </Pagination>
    </Wrapper>
  );
};
export default List;
