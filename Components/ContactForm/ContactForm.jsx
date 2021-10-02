import React, { useRef } from "react";

import Button from "../UI/Button/Button";

import classes from "./ContactForm.module.css";

const ContactForm = () => {
	const email = useRef("");
	const message = useRef("");
	const yourName = useRef("");

	const handleSubmit = (e) => {
		e.preventDefault();
		let data = { name: yourName.current.value, email: email.current.value, message: message.current.value };

		fetch("/api/contact", {
			method: "POST",
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => {
				console.log("Response received");
				if (res.status === 200) {
					console.log("message sent!");
					email.current.value = "";
					yourName.current.value = "";
					message.current.value = "";
					window.scrollTo(0, 0);
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className={classes.contactForm}>
			<h3>Contact Me</h3>
			<form onSubmit={(e) => handleSubmit(e)}>
				<input ref={yourName} type="text" name="yourName" placeholder="Your Name" className={classes.name} required />
				<input ref={email} type="email" name="email" placeholder="Your E-mail Address" className={classes.email} required />
				<textarea ref={message} tye="text" name="message" placeholder="Your message..." className={classes.message} required />
				<Button style={{ backgroundColor: "#475860", color: "white", padding: "8px", alignSelf: "flex-end" }}>Send Message</Button>
			</form>
		</div>
	);
};

export default ContactForm;
