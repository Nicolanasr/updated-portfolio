import React from "react";

import Container from "../../Layout/Container/Container";
import ContactForm from "../ContactForm/ContactForm";
import ContactInfo from "../ContactInfo/ContactInfo";
import SectionIntro from "../SectionIntro/SectionIntro";


import classes from "./Footer.module.css";

const Footer = () => {
	return (
		<div className={classes.footer}>
			<Container size="md">
				<SectionIntro
					title="Let’s Work Together ..."
					text="Get in touch with me”"
					styles={({ title: { color: "white" } }, { text: { fontStyle: "italic", fontWeight: "300", color: "white" } })}
					titleStyles={{ color: "white" }}
					lineBreakerColor="rgb(255 255 255 / 25%)"
				/>

				<ContactInfo />
				<ContactForm />
			</Container>
		</div>
	);
};

export default Footer;
