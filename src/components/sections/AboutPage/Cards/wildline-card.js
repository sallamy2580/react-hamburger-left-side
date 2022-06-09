import React from "react";
import "./w-card.scss";

export default function WCards() {
  return (
    <div className="cards">
      <section id="w-section">
        <div className="w-container">
          <div className="w-first">
            <a href="#tab" target="blank" className="icon"></a>
          </div>
          <div className="w-second">
            <h4>
              <span>Wildline Lincifort</span>
            </h4>
            <p>
              <span>
                I am a freshman at CUNY Hunter and currently majoring in
                Computer Science. I don't have a specific interest right now,
                but I like to get into differnt parts of computer science.
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
