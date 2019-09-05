import React from "react";
import styled from "styled-components";
import scoreLogo from "../../static/icons/scorelogo.png";
import locationLogo from "../../static/icons/locationlogo.png";
import { colors, boxShadow, borderRadius } from "./../../util/theme";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: space-between;
  flex-direction: column;
  margin-bottom: 30px;
  height: 153px;
  box-shadow: ${boxShadow};
  background: ${colors.grayDark2};
`;

const TopRow = styled.div`
  padding-left: 150px;
  display: flex;
  align-items: center;
`;

const BottomRow = styled.div`
  padding-left: 150px;
  margin-top: 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.grayDark4};
`;

const Title = styled.h2`
  margin-top: 0;
`;

const Text = styled.p`
  font-family: "Helvetica", Helvetica, Arial, serif;
  font-size: 12px;
  color: rgba(239, 242, 245, 1);
  margin: 0;
`;

const Tags = styled.div`
  margin-top: 13px;
`;

const ScoreBox = styled.div`
  padding-right: 25px;
  display: flex;
`;

const TagsBox = styled.div`
  display: flex;
`;

const LocationBox = styled.div`
  padding-right: 25px;
  display: flex;
`;

const Tag = styled.span`
  padding-right: 10px;
`;

const ImgBox = styled.div`
  position: absolute;
  height: 117px;
  width: 128px;
  border-radius: ${borderRadius};
  overflow: hidden;
  top: 50%;
  left: 2%;
  transform: translate(0, -50%);
`;

const Img = styled.img`
  position: absolute;
  left: -100%;
  right: -100%;
  top: -100%;
  bottom: -100%;
  margin: auto;
  height: auto;
  width: auto;
`;

const ScoreLogo = styled.img`
  height: 18px;
  width: 39px;
  margin-right: 20px;
`;

const LocationLogo = styled.img`
  height: 18px;
  width: 19px;
  margin-right: 20px;
`;

const ScoreText = styled.p`
  margin: 0;
`;

const LocationText = styled.p`
  margin: 0;
`;

const HashTag = styled.span`
  color: ${colors.red};
  font-size: 35px;
  margin-right: 10px;
  font-weight: 700;
`;

const ListRow = ({ data }) => {
  const { title, text, img, tags, score, country, city } = data;

  return (
    <Wrapper>
      <ImgBox>
        <Img src={img} />
      </ImgBox>
      <TopRow>
        <div>
          <Title>{title}</Title>
          <Text>{text}</Text>
        </div>
        <ScoreBox>
          <ScoreLogo src={scoreLogo} alt="scoreLogo" />
          <ScoreText>{score}</ScoreText>
        </ScoreBox>
      </TopRow>
      <BottomRow>
        <TagsBox>
          <HashTag>#</HashTag>
          <Tags>
            {tags.map((tag, indx) => (
              <Tag key={indx}>{tag}</Tag>
            ))}
          </Tags>
        </TagsBox>
        <LocationBox>
          <LocationLogo src={locationLogo} alt="locationLogo" />
          <LocationText>
            {city}, {country}
          </LocationText>
        </LocationBox>
      </BottomRow>
    </Wrapper>
  );
};

export default ListRow;
