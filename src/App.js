import React from "react";
import "./styles.css";
import GraphSection from "./components/sectionEachCategory/GraphSection";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutPage from "./components/sections/AboutPage/About";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={GraphSection} exact />
        <Route path="/aboutpage" component={AboutPage} exact />
      </Switch>
    </Router>
  );
}
