import { DoubleArrow } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
const Container = styled.div`
  position: relative;
`;
const Wrapper = styled.div``;

const Title = styled(Link)`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* position: absolute; */
  color: white;
  height: 40px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  background-color: #5e5e5e66;
  cursor: pointer;
`;
const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ShowMore = (props) => {
  return (
    <Container>
      {props.position === "top" ? (
        <Wrapper>
          <Title style={{ justifyContent: "start" }} to={props.link}>
            {props.title}
            <Icon>
              <DoubleArrow />
            </Icon>
          </Title>
          {props.children}
        </Wrapper>
      ) : (
        <Wrapper>
          {props.children}
          <Title to={props.link}>
            {props.title}
            <Icon>
              <DoubleArrow />
            </Icon>
          </Title>
        </Wrapper>
      )}
    </Container>
  );
};

export default ShowMore;
