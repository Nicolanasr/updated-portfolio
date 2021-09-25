import React from "react";

import classes from "./LineBreaker.module.css";

const LineBreaker = (props) => {
	return <div className={classes.lineBreaker} style={{ height: props.height || "10px", borderColor: props.color || "white" }}></div>;
};

export default LineBreaker;
