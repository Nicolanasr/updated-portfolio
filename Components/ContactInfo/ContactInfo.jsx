import React from "react";

import classes from "./ContactInfo.module.css";

const ContactInfo = () => {
	return (
		<div className={classes.contactInfo}>
			<div className="row">
				<div className="col-md-2 col-sm-4 col">E-mail</div>
				<div className="col-md-1 col-sm-1 col-1">:</div>
				<div className="col-md-2 col-sm-4 col"><a href="mailto:nasr528@gmail.com">nasr528@gmail.com</a></div>
			</div>
			<div className="row">
				<div className="col-md-2 col-sm-4 col">Phone Number</div>
				<div className="col-md-1 col-sm-1 col-1">:</div>
				<div className="col-md-2 col-sm-4 col"><a href="tel:+96171365663">+961 71 36 56 63</a></div>
			</div>

			<div className="row">
				<div className="col-md-2 col-sm-4 col">Resume</div>
				<div className="col-md-1 col-sm-1 col-1">:</div>
				<div className="col-md-2 col-sm-4 col"><a href="/resume" target="_blank">Resume</a></div>
			</div>
		</div>
	);
};

export default ContactInfo;
