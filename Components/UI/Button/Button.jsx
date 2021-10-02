import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
	return (
		<button
		onClick={props.onClick}
			className={`${classes.button} ${props.className && props.className} ${props.btnStyle && classes[props.btnStyle]} ${
				props.btnSize && classes[props.btnSize]
			}`}
			style={{ ...props.style || '' }}
		>
			{props.children}
		</button>
	);
};

export default Button;
