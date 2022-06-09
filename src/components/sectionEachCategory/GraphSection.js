import React from "react";
import EmbededPlatforms from "../sections/Platforms/EmbeddedPlatforms";
import Sentiment from "../sections/Sentiment/Sentiment";
import TopCategories from "../sections/TopCategories/TopCategories";
import SubCategories from "../sections/SubCategories/SubCategories";
import Users from "../sections/Users/Users";
import { InfoContainer, GraphWrapper } from "./SectionElements";
import ParagraphSection from "./ParagraphSection";
import HeaderSection from "./HeaderSection";
import {
  headerObj,
  homeObjOne,
  homeObjFive,
  homeObjFour,
  homeObjTwo,
  homeObjThree
} from "./DataForEachSection";
import Sidebar from "../sidebar/Sidebar";

const GraphSection = ({ lightBg, lightText }) => {
  return (
    <>
      <Sidebar />
      <HeaderSection {...headerObj} />
      <InfoContainer lightBg={true}>
        <GraphWrapper lightText={false}>
          <div id="TopCategories">
            <TopCategories />
          </div>
        </GraphWrapper>
      </InfoContainer>
      <ParagraphSection {...homeObjOne} />
      <InfoContainer lightBg={false}>
        <GraphWrapper lightText={true}>
          <div id="SubCategories">
            <SubCategories />
          </div>
        </GraphWrapper>
      </InfoContainer>
      <ParagraphSection {...homeObjTwo} />
      <InfoContainer lightBg={true}>
        <GraphWrapper lightText={false}>
          <div id="EmbededPlatforms">
            <EmbededPlatforms />
          </div>
        </GraphWrapper>
      </InfoContainer>
      <ParagraphSection {...homeObjThree} />
      <InfoContainer lightBg={false}>
        <GraphWrapper lightText={true}>
          <div id="Users">
            <Users />
          </div>
        </GraphWrapper>
      </InfoContainer>
      <ParagraphSection {...homeObjFour} />
      <InfoContainer lightBg={true}>
        <GraphWrapper lightText={false}>
          <div id="Sentiments">
            <Sentiment />
          </div>
        </GraphWrapper>
      </InfoContainer>
      <ParagraphSection {...homeObjFive} />
    </>
  );
};

export default GraphSection;
