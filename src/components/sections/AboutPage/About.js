import React, { useState } from "react";
import {
  aboutObjOne,
  aboutObjThree,
  aboutObjTwo
} from "../../sectionEachCategory/DataForEachSection";
import ParagraphSection from "../../sectionEachCategory/ParagraphSection";
import CCards from "./Cards/chavez-card";
import JCards from "./Cards/joenia-card";
import MCards from "./Cards/michelle-card";
import RCards from "./Cards/rachel-card";
import WCards from "./Cards/wildline-card";
import {
  InfoContainer,
  GraphWrapper,
  AboutBtnWrap
} from "../../sectionEachCategory/SectionElements";
import { Button } from "../../ButtonElements";

const AboutPage = ({ lightBg, lightText }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <ParagraphSection {...aboutObjOne} />

      <InfoContainer>
        <GraphWrapper>
          <AboutBtnWrap>
            <Button
              to="/"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
            >
              Go Back
            </Button>
          </AboutBtnWrap>
        </GraphWrapper>
      </InfoContainer>

      <ParagraphSection {...aboutObjTwo} />
      <ParagraphSection {...aboutObjThree} />

      <InfoContainer>
        <GraphWrapper>
          <div className="cards-container">
            <div className="chavez">
              <CCards />
            </div>
            <div className="michelle">
              <MCards />
            </div>
          </div>
        </GraphWrapper>
      </InfoContainer>

      <InfoContainer>
        <GraphWrapper>
          <div className="cards-container">
            <div className="joenia">
              <JCards />
            </div>
            <div className="rachel">
              <RCards />
            </div>
          </div>
        </GraphWrapper>
      </InfoContainer>

      <InfoContainer>
        <GraphWrapper>
          <div className="cards-container">
            <div className="wildline">
              <WCards />
            </div>
          </div>
        </GraphWrapper>
      </InfoContainer>
    </>
  );
};
export default AboutPage;
//
// export default function AboutPage() {
//   return (
//     <div>
//       <h1 className="header"> About Social Canvas </h1>
//       <div className="words">
//         Social Canvas is a digital advertising tool that allows publishers to
//         show ads near social media embeds. It uses exclusive ad slots around the
//         embed, and displays advertisements near the context of the post.
//         <br />
//         <br /> Through contextual targeting, Social Canvas is able to gather
//         relevant data and auction ad space to the right brands. To do this, it
//         scans the embed for data like keywords and usernames and sends that data
//         to the Kargo Ad Tag. <br />
//         Finally, the ad is displayed near the social media post for a
//         non-intrusive way to advertise. This allows editorial teams who use news
//         worthy posts for their stories to show ads easily.
//       </div>
//       <div className="section2">
//         <h1 className="header2"> About the data </h1>
//         <div className="words2">
//           Social Canvas stores embed data in Kargo's databases as the targeting
//           information it needs to show ads. This can range from what platform
//           the embed came from, to which user's posts show up the most in embeds.
//           <br />
//           This application explores key types of data used for Social Canvas,
//           that helps publishers determine the success of their articles, and
//           what kind of ads to show on the page.
//         </div>
//       </div>
//       <div className="section3">
//         <h1 className="header3"> About the team </h1>
//         <div className="words3">
//           This application was created within the span of 3 weeks by the Kargo
//           Winternship team, with plenty of guidance from the wonderful engineers
//           that taught us along the way and everyone who organized the
//           internship. We're very thankful to them for their help and
//           troubleshooting, and you can meet each of us below.
//         </div>
//       </div>
//       <div className="AllCards">
//         <div className="content-container">
//           <div className="chavez">
//             <h4> Chavez Tyndale</h4>
//             <CCards />
//           </div>
//           <div className="michelle">
//             <h4> Michelle Goenawan</h4>
//             <MCards />
//           </div>
//           <div className="joenia">
//             <h4> Joenia Yege</h4>
//             <JCards />
//           </div>
//           <div className="rachel">
//             <h4> Rachel Ishak</h4>
//             <RCards />
//           </div>
//           <div className="wildline">
//             <h4> Wildline Lincifort</h4>
//             <WCards />
//           </div>
//         </div>
//       </div>
//       <div className="footer">not sure what to put for a footer.</div>
//     </div>
//   );
// }
