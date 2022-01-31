import React from "react";

import classes from "./SkillsCard.module.css";

const SkillsCard = ({ skill }) => {
  return (
    <div className={` ${classes.skillsCard}`}>
      <div className={classes.cardHeader}>{skill.title}</div>
      <div className={classes.skillsBody}>
        {skill.skills.map((skill, index) => {
          return (
            <div key={`${skill.text}-${index}`} className={`${classes.skillName} skill-name`}>
              <span dangerouslySetInnerHTML={{ __html: skill.icon }} />
              {skill.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsCard;
