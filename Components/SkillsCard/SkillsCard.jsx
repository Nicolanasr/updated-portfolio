import React from 'react'

import classes from "./SkillsCard.module.css"

const skill = [
    "Javascript",
    "Javascript",
    "Javascript",
    "Javascript",
    "Javascript",
]

const SkillsCard = (props) => {
    return (
        <div className={`${props.className} ${classes.skillsCard}`}>
            <div className={classes.cardHeader}>
                Skill Title
            </div>
            <div className={classes.skillsBody}>
                {
                    skill.map((skill, index) => {
                        return <div key={`${skill}-${index}`} className={classes.skillName}>
                            {skill}
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default SkillsCard
