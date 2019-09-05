import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import ListRow from "./ListRow";
import { listItems } from "../../util/mock";
import { GlobalContext } from "../../context/GlobalContext";

const Wrapper = styled.div`
  width: 693px;
`;

const ListWrapper = styled.div`
  height: 50%;
`;

const Pagination = styled.div`
  display: flex;
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

const List = () => {
  const itemsPerPage = 3;
  const [paginationButtons, setPaginationButtons] = useState(
    getItterableArr(Math.ceil(listItems.length / itemsPerPage))
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageItems, setCurrentPageItems] = useState(
    listItems.slice(0, itemsPerPage)
  );
  const { countyFilter, textFilter } = useContext(GlobalContext);

  const paginate = pageNumber => {
    if (
      pageNumber > Math.ceil(listItems.length / itemsPerPage) ||
      pageNumber < 1
    )
      return;
    setCurrentPage(pageNumber);
    const pageIndex = pageNumber - 1;
    const itemsFromIndex = pageIndex * itemsPerPage;
    const itemsToIndex = pageIndex * itemsPerPage + itemsPerPage;
    const newPageItems = listItems.slice(itemsFromIndex, itemsToIndex);
    setCurrentPageItems(newPageItems);
  };

  useEffect(() => {
    const filteredList = listItems
      .filter(item =>
        countyFilter === "All Cities" ? true : item.city === countyFilter
      )
      .filter(
        item =>
          item.title.toLowerCase().includes(textFilter) ||
          item.text.toLowerCase().includes(textFilter)
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
          return <ListRow key={item.key} data={item} />;
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
