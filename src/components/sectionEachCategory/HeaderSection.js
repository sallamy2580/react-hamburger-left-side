import React, { useState } from "react";
import {
  InfoContainer,
  InfoWrapper,
  HeaderRow,
  Column1,
  Column2,
  TextWrapper,
  BtnWrap,
  TopLine,
  Heading,
  HeaderSubtitle,
  ImgWrap,
  Img,
  LogoContainer,
  LogoWrapper,
  LogoWrap
} from "./SectionElements";
import SocialCanvasLogo from "../images/social-canvas-logo.svg";

import { Button } from "../ButtonElements";

const ImageSection = ({
  lightBg,
  id,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt
}) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <LogoContainer lightBg={false} id={id}>
        <LogoWrapper>
          <LogoWrap>
            <Img src={img} alt="KARGO" />
          </LogoWrap>
        </LogoWrapper>
      </LogoContainer>

      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <HeaderRow>
            <Column1>
              <ImgWrap>
                <Img src={SocialCanvasLogo} alt={alt} />
              </ImgWrap>
            </Column1>
            <Column2>
              <TextWrapper>
                <TopLine> {topLine} </TopLine>
                <Heading lightText={lightText}> {headline} </Heading>
                <HeaderSubtitle darkText={darkText}>
                  {" "}
                  {description}{" "}
                </HeaderSubtitle>
                <BtnWrap>
                  <Button
                    to="/aboutpage"
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column2>
          </HeaderRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default ImageSection;
