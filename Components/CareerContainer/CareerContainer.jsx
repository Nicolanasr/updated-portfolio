import React from "react";

import ExperienceBlock from "../ExperienceBlock/ExperienceBlock";
import LineBreaker from "../UI/LineBreaker/LineBreaker";

import classes from "./CareerContainer.module.css";

const CareerContainer = ({ career }) => {
	return (
		<div className={classes.careerContainer}>
			<h4>{career.title}</h4>
			{career.experiences.map((experience, index) => {
				return (
					<div key={`${experience.place}-${index}`}>
						<ExperienceBlock
							place={experience.place || ""}
							title={experience.title || ""}
							from={experience.from || ""}
							to={experience.to || ""}
							date={experience.date || ""}
							description={experience.description || ""}
						/>
						<br />
					</div>
				);
			})}
            <LineBreaker height="40px" color="#0000001a" />
		</div>
	);
};

export default CareerContainer;
