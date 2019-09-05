import React, { useContext } from "react";
import styled from "styled-components";
import searchlogoIcon from "../../static/icons/searchlogo.png";
import { colors } from "./../../util/theme";
import { GlobalContext } from "../../context/GlobalContext";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  padding-top: 20px;
  max-width: 693px;
  margin: auto;
  padding-bottom: 30px;
`;

const SearchLogo = styled.img`
  height: 30px;
  width: 216px;
  margin-top: 5px;
`;

const SearchWrapper = styled.div`
  display: flex;
  padding-bottom: 23px;
  width: 100%;
`;

const Search = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  padding-left: 20px;
`;

const Input = styled.input`
  width: 100%;
  border: 3px solid #3b3d3f;
  border-right: none;
  padding: 5px;
  height: 20px;
  border-radius: 5px 0 0 5px;
  outline: none;
  font-family: "Roboto", Helvetica, Arial, serif;
  font-weight: 400;
  font-style: normal;
  font-size: 19px;
  color: ${colors.grayLight};
  background-color: ${colors.grayDark2};
  :focus {
    color: white;
  }
`;

const SearchButton = styled.button`
  width: 40px;
  height: 36px;
  background: ${colors.white};
  text-align: center;
  font-family: "Roboto", Helvetica, Arial, serif;
  font-weight: 100;
  font-style: normal;
  color: ${colors.grayLight};
  background-color: ${colors.grayDark2};
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
  border: 3px solid #3b3d3f;
`;

const DefinitionBox = styled.fieldset`
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  border-color: ${colors.grayDark3};
`;

const DefintionText = styled.p`
  margin: 0;
  font-family: "Source Sans Pro", Helvetica, Arial, serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  color: ${colors.red};
  text-align: left;
  line-height: 18px;
`;

const DefinitionTitle = styled.legend``;

const TopSearch = () => {
  const { setTextFilter } = useContext(GlobalContext);
  return (
    <Wrapper>
      <SearchWrapper>
        <SearchLogo src={searchlogoIcon} alt="searchlogoIcon" />
        <Search>
          <Input
            type="text"
            placeholder="Search"
            name="textFilter"
            onChange={event => setTextFilter(event.target.value.toLowerCase())}
          ></Input>
          <SearchButton type="submit">
            <i className="fa fa-search"></i>
          </SearchButton>
        </Search>
      </SearchWrapper>
      <DefinitionBox>
        <DefinitionTitle>DEFINITION</DefinitionTitle>
        <DefintionText>
          #VFXengineers are beings who create illusions or visual tricks used in
          the film, television, theatre, video game and similar industries to
          simulate the imagined events in a story or virtual world.
        </DefintionText>
      </DefinitionBox>
    </Wrapper>
  );
};

export default TopSearch;
