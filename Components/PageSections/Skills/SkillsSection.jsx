import React from "react";

import Container from "../../../Layout/Container/Container";
import SectionIntro from "../../SectionIntro/SectionIntro";
import SkillsCard from "../../SkillsCard/SkillsCard";

import classes from "./SkillsSection.module.css";

const SkillsSection = ({ data }) => {
	return (
		<div className={classes.skillsSection}>
			<Container>
				<SectionIntro
					title="Skills"
					text="“You learn a new skill everyday.”"
					styles={({ title: {} }, { text: { fontStyle: "italic", fontWeight: "300" } })}
				/>
				<div className={classes.skillsContainer}>
					{
						data.map((skill, index) => {
							return <SkillsCard key={`${skill.title}-${index}`} skill={skill} />
						})
					}
				</div>
			</Container>
		</div>
	);
};

export default SkillsSection;
