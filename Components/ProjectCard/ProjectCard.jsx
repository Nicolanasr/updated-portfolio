import React from "react";
import Image from "next/image";
import Router from "next/router";

import Button from "../UI/Button/Button";

import classes from "./ProjectCard.module.css";

const ProjectCard = (props) => {
	const routerPush = (route) => {
		if (
			navigator.userAgent.match(/Android/i) ||
			navigator.userAgent.match(/webOS/i) ||
			navigator.userAgent.match(/iPhone/i) ||
			navigator.userAgent.match(/iPad/i) ||
			navigator.userAgent.match(/iPod/i) ||
			navigator.userAgent.match(/BlackBerry/i) ||
			navigator.userAgent.match(/Windows Phone/i)
		) {
			console.log("mobile");
			return;
		} else {
			Router.push(route || "/");
		}
	};

	return (
		<div className={classes.projectCard}>
			<div
				className={classes.imageWrapper}
				style={{ backgroundImage: `url("${props.image}")` }}
				onClick={() => routerPush(props.projectUrl || "/")}
			>
				{/* <Image src="https://i.imgur.com/lH87LZ7.png" alt="project" layout="responsive" width={1919} height={935}/> */}
			</div>
			<div className={classes.projectBody}>
				<div className={classes.projectTitle} onClick={() => routerPush(props.projectUrl || "/")}>
					{props.title || ""}
				</div>
				<div className={classes.projectDescription} onClick={() => routerPush(props.projectUrl || "/")}>
					{props.description || ""}
				</div>
				<div className={classes.projectFooter}>
					{props.demoBtn && (
						<Button btnStyle="primary" btnSize="md" onClick={() => window.open(props.demoBtn.url || "", "_blank")}>
							{props.demoBtn.text || ""}
						</Button>
					)}
					{props.codeBtn && (
						<Button btnStyle="secondary" btnSize="md" onClick={() => window.open(props.codeBtn.url || "", "_blank")}>
							{props.codeBtn.text || ""}
						</Button>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
