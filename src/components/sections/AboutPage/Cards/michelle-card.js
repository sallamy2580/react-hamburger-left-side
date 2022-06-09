import React from "react";
import "./m-card.scss";

export default function MCards() {
  return (
    <div className="cards">
      <section id="m-section">
        <div className="m-container">
          <div className="m-first">
            <a
              href="https://www.linkedin.com/in/michelle-goenawan-a73a1115a/"
              target="blank"
              className="m-icon"
            ></a>
          </div>
          <div className="m-second">
            <h4>
              <span>Michelle Goenawan</span>
            </h4>
            <p>
              <span>
                I am a second year in CUNY Hunter and I double major in Computer
                Science and Media Studies. My interests lie in the more creative
                areas of code such as UI Design. I also create games and draw
                digital art.
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
