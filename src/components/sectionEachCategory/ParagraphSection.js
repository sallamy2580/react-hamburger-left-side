import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle
} from "./SectionElements";

const ParagraphSection = ({
  lightBg,
  id,
  topLine,
  lightText,
  headline,
  darkText,
  description1,
  description2,
  description3
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow>
            <TextWrapper>
              <TopLine> {topLine} </TopLine>
              <Heading lightText={lightText}> {headline} </Heading>
              <Subtitle darkText={darkText}> {description1} </Subtitle>
              <Subtitle darkText={darkText}> {description2} </Subtitle>
              <Subtitle darkText={darkText}> {description3} </Subtitle>
            </TextWrapper>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default ParagraphSection;
