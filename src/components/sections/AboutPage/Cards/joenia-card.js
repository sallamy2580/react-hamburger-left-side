import React from "react";
import "./j-card.scss";

export default function JCards() {
  return (
    <div className="cards">
      <section id="j-section">
        <div className="j-container">
          <div className="j-first">
            <a href="#tab" target="blank" className="j-icon"></a>
          </div>
          <div className="j-second">
            <h4>
              <span>Joenia Yege</span>
            </h4>
            <p>
              <span>
                Hi! I am a sophomore at Lehman College. I am thinking of
                pursuing a bachelors in speech language pathology. I am
                currently still evaluating my interests and aspirations. I
                strive to gain new experiences and learn new things.
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
