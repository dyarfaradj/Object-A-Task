import React, { useState, useContext } from "react";
import styled from "styled-components";
import { colors } from "./../../util/theme";
import chevronDown from "../../static/icons/chevronDown.png";
import { GlobalContext } from "../../context/GlobalContext";
import { mockedCities } from "../../util/mock";

const Wrapper = styled.div`
  width: 165px;
  padding: 0 20px 20px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 14px;
  font-family: "SourceSansPro-SemiBold", Helvetica, Arial, serif;
  text-transform: uppercase;
  color: ${colors.grayLight};
`;

const DrawerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DrawerButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  color: white;
  outline-color: ${colors.orange};
  padding: 10px;
  font-size: 14px;
`;

const Arrow = styled.img`
  width: 15px;
  ${p => p.open && "transform: rotate(180deg)"};
`;

const DrawerOptions = styled.div`
  display: ${p => (p.open ? "flex" : "none")};
  flex-direction: column;
  background: ${colors.grayDark2};
  margin-top: 4px;
  padding: 10px;
`;

const Option = styled.div`
  padding-bottom: 5px;
  cursor: pointer;
  &:last-child {
    padding-bottom: 0px;
  }
`;

const OptionText = styled.span`
  margin-left: 7px;
`;

const RadioInput = styled.input`
  display: hidden;
  height: 9px;
  width: 9px;
  &:after {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    position: relative;
    top: -2px;
    left: -1px;
    background-color: ${colors.grayDark3};
    content: "";
    display: inline-block;
    visibility: visible;
    border: 1px solid ${colors.grayDark3};
  }
  &:checked:after {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    position: relative;
    top: -2px;
    left: -1px;
    background-color: ${colors.red};
    content: "";
    display: inline-block;
    visibility: visible;
    border: 1px solid ${colors.red};
  }
`;

const Sort = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { countyFilter, setCountyFilter } = useContext(GlobalContext);
  return (
    <Wrapper>
      <Title>sort results</Title>
      <DrawerWrapper>
        <DrawerButton onClick={() => setDrawerOpen(!drawerOpen)}>
          <span>Location</span>
          <Arrow src={chevronDown} open={drawerOpen} alt="chevronDown" />
        </DrawerButton>
        <DrawerOptions open={drawerOpen}>
          {mockedCities.map(city => {
            return (
              <Option onClick={() => setCountyFilter(city)} key={city}>
                <RadioInput
                  name="countyFilter"
                  type="radio"
                  value={city}
                  checked={city === countyFilter}
                  readOnly
                ></RadioInput>
                <OptionText>{city}</OptionText>
              </Option>
            );
          })}
        </DrawerOptions>
      </DrawerWrapper>
    </Wrapper>
  );
};

export default Sort;
