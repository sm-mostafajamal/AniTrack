import React from "react";
import styled from "styled-components";
import { Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material";

const Container = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${require(`../assets/images/animeCover.png`)});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  /* opacity: 0.7; */
  display: flex;
  /* justify-content: center; */
  align-items: center;
`;
const Icon = styled.span`
  cursor: pointer;
  font-size: 30px;
  font-weight: 700;
  margin: 30px;
`;
const Design = styled.span`
  color: #5a2e98;
`;
const SocialIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 15%; */
  color: white;
`;
const SocialIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid white;
  border-radius: 10px;
  height: 30px;
  width: 30px;
  margin-right: 20px;
  cursor: pointer;
`;
const Link = styled.a`
  text-decoration: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Icon>
        Ani<Design>Track</Design>
      </Icon>
      <SocialIconContainer>
        <SocialIcon>
          <Link target="_blank" href="https://linkedin.com/in/sm-mostafajamal">
            <LinkedIn style={{ fontSize: "20px" }} />
          </Link>
        </SocialIcon>
        <SocialIcon>
          <Link target="_blank" href="https://github.com/sm-mostafajamal">
            <GitHub style={{ fontSize: "20px" }} />
          </Link>
        </SocialIcon>
        <SocialIcon>
          <Link
            target="_blank"
            href="https://www.facebook.com/SM.MostafaJamal/"
          >
            <Facebook style={{ fontSize: "20px" }} />
          </Link>
        </SocialIcon>
        <SocialIcon>
          <Link
            target="_blank"
            href="https://www.instagram.com/sm.mostafajamal/"
          >
            <Instagram style={{ fontSize: "20px" }} />
          </Link>
        </SocialIcon>
      </SocialIconContainer>
    </Container>
  );
};

export default Footer;
