import React from "react";

const SkillsComponent = ({ data, index }) => {

  return <li key={index}>{data.skill.name}</li>;
};

export default SkillsComponent;
