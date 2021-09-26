import React from "react";

import Container from "../../../Layout/Container/Container"
import SectionIntro from "../../SectionIntro/SectionIntro";
import CareerContainer from "../../CareerContainer/CareerContainer"

import classes from "./CareerSection.module.css";

const CareerSection = (props) => {
	return (
		<div className={classes.careerSection}>
			<Container>
				<SectionIntro
					title="CAREER"
					text="“Protons give an atom its identity, electrons its personality.”"
					styles={({ title: {} }, { text: { fontStyle: "italic", fontWeight: "300" } })}
				/>
				{
					props.data.map((career, index) => {
						return <CareerContainer key={`${career.title}-${index}`} career={career} />
					})
				}
			</Container>
		</div>
	);
};

export default CareerSection;
