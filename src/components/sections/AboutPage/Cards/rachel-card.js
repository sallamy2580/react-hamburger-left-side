import React from "react";
import "./r-card.scss";

export default function RCards() {
  return (
    <div className="cards">
      <section id="r-section">
        <div className="r-container">
          <div className="r-first">
            <a href="#tab" target="blank" className="r-icon"></a>
          </div>
          <div className="r-second">
            <h4>
              <span>Rachel Ishak</span>
            </h4>
            <p>
              <span>
                I am currently studying computer science at Hunter College, City
                University of New York. I have experience using some coding
                languages such as JavaScript, Python, C++, and Php. As I
                continue my career in technology, I want to explore other
                technical areas such as UX, UI and software testing.
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
