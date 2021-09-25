import React from "react";

import LineBreaker from "../../UI/LineBreaker/LineBreaker";

import classes from "./HeroSection.module.css";

const HeroSection = () => {
	return <div className={classes.heroSection}>
        <div className={classes.heroSectionText}>
            <h1>
                NICOLAS NASR
            </h1>
            <LineBreaker color="white" />
            <h4>
                A WEB DEVELOPER
            </h4>
        </div>
    </div>;
};

export default HeroSection;
