import React from 'react'
import LineBreaker from '../UI/LineBreaker/LineBreaker'

import classes from "./SectionIntro.module.css"

const SectionIntro = (props) => {
    return (
        <div className={classes.sectionIntro}>
            <div className={classes.introTitle}>
                <h2 style={{ ...props.styles.title || '' }}>{props.title}</h2>
            </div>
            <div className={classes.introText}>
                <h5 style={{ ...props.styles.text || '' }}>{props.text}</h5>
            </div>
            <LineBreaker color="#21252952"/>
        </div>
    )
}

export default SectionIntro
