import React from "react";

import Container from "../../../Layout/Container/Container";
import ProjectCard from "../../ProjectCard/ProjectCard";
import SectionIntro from "../../SectionIntro/SectionIntro";

import classes from "./ProjectsSections.module.css";

const ProjectsSections = ({ data }) => {
	return (
		<div className={classes.projectsSection}>
			<Container>
				<SectionIntro
					title="PROJECTS"
					text="“The best way to learn is to learn by practice”"
					styles={({ title: {} }, { text: { fontStyle: "italic", fontWeight: "300" } })}
				/>
				<div className={classes.projectCardsContainer}>
					{data.map((project, index) => {
						return (
							<ProjectCard
								key={`${project.title}-${index}`}
								title={project.title || ''}
								description={project.description || ''}
								image={project.image || ''}
								projectUrl={project.projectUrl || ''}
								demoBtn={project.demoBtn || ''}
								codeBtn={project.codeBtn || ''}
							/>
						);
					})}
				</div>
			</Container>
		</div>
	);
};

export default ProjectsSections;
