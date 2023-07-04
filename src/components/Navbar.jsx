import { SearchOutlined } from "@mui/icons-material";
import React from "react";
import { styled } from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  color: white;
  padding: 10px 20px;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Icon = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  font-size: 28px;
  color: white;
  font-weight: 600;
`;
const Design = styled.span`
  color: #5a2e98;
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  color: gray;
`;
const Search = styled.input`
  background-color: black;
  outline: none;
  border: none;
  caret-color: gray;
  padding-left: 10px;
  &::placeholder {
    color: white;
    font-weight: 500;
    letter-spacing: 3px;
  }
`;

const ProfileImage = styled.img``;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Icon to="/">
          Ani<Design>Track</Design>
        </Icon>
        <SearchContainer>
          <SearchOutlined />
          <Search placeholder="Search anime..." />
        </SearchContainer>
        <Button name="Login" />
      </Wrapper>
      <ProfileImage></ProfileImage>
    </Container>
  );
};

export default Navbar;
