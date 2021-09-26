import React from "react";

import Container from "../../../Layout/Container/Container";
import SectionIntro from "../../SectionIntro/SectionIntro";
import SkillsCard from "../../SkillsCard/SkillsCard";

import classes from "./SkillsSection.module.css";

const SkillsSection = () => {
	return (
		<div className={classes.skillsSection}>
			<Container>
				<SectionIntro
					title="Skills"
					text="“Continue to study and learn new skills”"
					styles={({ title: {} }, { text: { fontStyle: "italic", fontWeight: "300" } })}
				/>
				<div className="">
					<SkillsCard className=""/>
					<SkillsCard className=""/>
					<SkillsCard className=""/>
					<SkillsCard className=""/>
				</div>
			</Container>
		</div>
	);
};

export default SkillsSection;
