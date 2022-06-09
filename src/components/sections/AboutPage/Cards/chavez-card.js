import React from "react";
import "./c-card.scss";

export default function CCards() {
  return (
    <div className="cards">
      <section className="c-section">
        <div className="c-container">
          <div className="c-first">
            <a href="#tab" target="blank" className="c-icon"></a>
          </div>
          <div className="c-second">
            <h4>
              <span>Chavez Tyndale</span>
            </h4>
            <p>
              <span>
                Hi there! I'm currently a freshman at Hunter College majoring in
                computer science. I enjoy learning new things, especially about
                coding, and I intend to become a full stack developer in the
                future. My interests drive me towards Artifical Intelligence,
                and I strive to make a career in the tech world.
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
