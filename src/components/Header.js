import React from "react";
import styled from "styled-components";
import loginIcon from "./../static/icons/login.png";
import instagramIcon from "./../static/icons/instagram.png";
import twitterIcon from "./../static/icons/twitter.png";
import logoIcon from "./../static/icons/logo.png";
import { colors } from "./../util/theme";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border: 1px solid black;
  margin: 0 50px;
  background-color: ${colors.lightBlack};
  color: white;
  padding: 0 10px;
  border-width: 2px;
  border-color: ${colors.grayDark2};
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const HashTag = styled.span`
  color: ${colors.red};
  font-size: 35px;
  margin-right: 10px;
  font-weight: 700;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;

  & > * {
    padding: 0 10px;
  }
`;

const LoginButton = styled.div`
  display: flex;
  align-items: center;
  font-family: "Roboto", Helvetica, Arial, serif;
  font-weight: 500;
  font-style: normal;
  font-size: 17px;
  color: ${colors.blue};
`;

const LogoIcon = styled.img`
  height: 23px;
`;

const LoginIcon = styled.img`
  height: 25px;
  padding-left: 5px;
`;

const InstagramIcon = styled.img`
  width: 22px;
  height: 20px;
  padding: 0 3px;
`;

const TwitterIcon = styled.img`
  width: 16px;
  height: 11px;
  padding: 0 3px;
`;

const TwitterIconHolder = styled.div`
  width: 22px;
  height: 20px;
  border-radius: 4px;
  background-color: ${colors.grayLight};
  padding: 0;
`;

const Header = () => {
  return (
    <Wrapper>
      <Logo>
        <HashTag>#</HashTag> <LogoIcon src={logoIcon} alt="logoIcon" />
      </Logo>
      <NavMenu>
        <InstagramIcon src={instagramIcon} alt="instagramIcon" />
        <TwitterIconHolder>
          <TwitterIcon src={twitterIcon} alt="twitterIcon" />
        </TwitterIconHolder>
        <LoginButton>
          Login
          <LoginIcon src={loginIcon} alt="loginIcon" />
        </LoginButton>
      </NavMenu>
    </Wrapper>
  );
};

export default Header;
