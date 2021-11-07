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
      {/* style={{ backgroundImage: `url("${props.image}")` }} */}
      <div className={classes.imageWrapper} onClick={() => routerPush(props.projectUrl || "/")}>
        <Image src={props.image} alt="project" layout="fill" objectFit="contain" objectPosition="center" />
      </div>
      <div className={classes.projectBody}>
        <div
          className={classes.projectTitle}
          onClick={() => routerPush(props.projectUrl || "/")}
          dangerouslySetInnerHTML={{ __html: props.title || "" }}
        />
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
