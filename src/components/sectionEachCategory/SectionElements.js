import styled from "styled-components";
//import { Link as LinkR } from "react-router-dom";

export const InfoContainer = styled.div`
  font-family: "Libre Franklin", sans-serif;
  /* font-family: "Chivo", sans-serif; */
  /* font-family: "Work Sans", sans-serif; */
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};
  padding: 30px 0;

  /* @media screen and (max-width: 768px) {
    padding: 100px 0;
  } */
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 0px 50px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0px;
  justify-content: center;
  align-content: center;
`;

export const GraphWrapper = styled.div`
  /* display: grid; */
  z-index: 1;
  /* height: 860px;
  width: 100%; */
  max-width: 1470px;
  margin-right: auto;
  margin-left: auto;
  padding: 0px;
  justify-content: center;
  text-align: center;
  color: ${({ lightText }) => (lightText ? "#f7f8f8" : "#010606")};
`;

export const HeaderRow = styled.div`
  display: grid;
  grid-auto-columns: minmix(auto, 1fr);
  align-items: center;
  grid-template-areas: "col1 col2";
  text-align: center;

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1" "col2";
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmix(auto, 1fr);
  align-items: center;
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 90px;
  grid-area: col1;
`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 60px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 740px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #06a4f4;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  text-align: left;
`;

export const Heading = styled.h1`
  /* font-family: "Work Sans", sans-serif; */
  margin-bottom: 24px;
  text-align: left;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8f8" : "#010606")};

  /* @media screen and (max-width: 480px) {
    font-size: 32px;
  } */
`;

export const Subtitle = styled.p`
  max-width: 540px;
  text-align: justify;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const HeaderSubtitle = styled.p`
  max-width: 540px;
  text-align: justify;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  /* justify-content: center; */
`;

export const AboutBtnWrap = styled.div`
  display: flex;
  /* justify-content: flex-start; */
  justify-content: center;
`;

export const ImgWrap = styled.div`
  max-width: none;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const LogoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 0px 50px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0px;
  justify-content: center;
  align-content: center;
`;

export const LogoContainer = styled.div`
  font-family: "Libre Franklin", sans-serif;
  /* font-family: "Chivo", sans-serif; */
  /* font-family: "Work Sans", sans-serif; */
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};
  padding: 80px 0;
  /* justify-content: center;
  align-content: center; */

  /* @media screen and (max-width: 768px) {
    padding: 100px 0;
  } */
`;

export const LogoWrap = styled.div`
  max-width: 100px;
  height: 100%;
`;
