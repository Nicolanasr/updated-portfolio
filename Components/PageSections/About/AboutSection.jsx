import React from "react";
import Image from "next/image";

import SectionIntro from "../../SectionIntro/SectionIntro";

import Container from "../../../Layout/Container/Container";

import classes from "./AboutSection.module.css";

const AboutSection = ({ data }) => {
  return (
    <div className={classes.aboutSection}>
      <Container>
        <SectionIntro title="PROFILE" text="FULL STACK WEB DEVELOPER" styles={({ title: {} }, { text: {} })} />
        <div className={classes.aboutSectionRow}>
          <div className={`col ${classes.aboutMe}`}>
            <div className={classes.forAlignment}>
              <h4>ABOUT ME</h4>
              <div dangerouslySetInnerHTML={{ __html: `<p>${data.about}</p>` }} />
            </div>
          </div>
          <div className={` ${classes.profilePic}`}>
            <div className={classes.profilePicWrapper}>
              <Image src={data.profilePic.src} alt={data.profilePic.alt} layout="fill"></Image>
            </div>
          </div>
          <div className={`col ${classes.aboutDetails}`}>
            <div className={classes.forAlignment}>
              <h4>DETAILS</h4>
              <ul>
                <li>
                  <h6>
                    FULL NAME: <span>{data.fullName}</span>
                  </h6>
                </li>
                <li>
                  <h6>
                    AGE: <span>{data.age}</span>
                  </h6>
                </li>
                <li>
                  <h6>
                    ADDRESS: <span>{data.address}</span>
                  </h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
