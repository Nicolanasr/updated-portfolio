import React from "react";

import classes from "./ExperienceBlock.module.css";

const ExperienceBlock = (props) => {
	return (
		<div className={classes.experienceBlock}>
			<div className={`col-md-3 ${classes.placeYear}`}>
				<div className="col-md-11">
					<div className={classes.place} dangerouslySetInnerHTML={{ __html: props.place }} />
					{props.title && <div>{props.title}</div>}
				</div>
				<div className={classes.year}>
					{" "}
					{props.from || props.to ? (
						<>
							<span>{props.from}</span> {props.to ? <span> - {props.to}</span> : " - Now"}{" "}
						</>
					) : props.date ? (
						<span>{props.date}</span>
					) : (
						""
					)}
				</div>
			</div>
			<div className={`col ${classes.experienceDesc}`} dangerouslySetInnerHTML={{ __html: props.description }} />
		</div>
	);
};

export default ExperienceBlock;
