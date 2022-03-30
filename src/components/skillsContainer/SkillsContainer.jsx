import "./skillsContainer.css";
import React from "react";
import skills from "../../data/skills.json";
import SkillsComponent from "../skillsComponent/SkillsComponent";

const SkillsContainer = () => {
  return (
    <div id="skills">
      <div className="container-title">
        <h2 className="container__title">Skills</h2>
      </div>
      <ul className="skills-container__container">
        {skills.map((el, index) => {
          return <SkillsComponent data={el} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default SkillsContainer;
