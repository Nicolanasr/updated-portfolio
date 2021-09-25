import React from "react";
import Image from "next/image";

import SectionIntro from "../../SectionIntro/SectionIntro";

import Container from "../../../Layout/Container/Container";

import classes from "./AboutSection.module.css";

const AboutSection = () => {
	return (
		<div className={classes.aboutSection}>
			<Container>
				<SectionIntro title="PROFILE" text="FULL STACK WEB DEVELOPER" styles={({ title: {} }, { text: {} })} />
				<div className={classes.aboutSectionRow}>
					<div className={`col ${classes.aboutMe}`}>
						<div className={classes.forAlignment}>
							<h4>ABOUT ME</h4>
							<p>
								Est accusantium consectetur iure. Doloribus doloremque molestiae qui in ipsam ex. Quas cumque exercitationem minima.
								Dignissimos similique quam dolorum dignissimos tempore facere maiores. Aut maxime occaecati eaque voluptatem. Neque ea
								suscipit harum animi rerum dolorem.
							</p>
						</div>
					</div>
					<div className={` ${classes.profilePic}`}>
						<div className={classes.profilePicWrapper}>
							<Image src="/assets/images/profile-pic.jpg" alt="profile_pic" layout="fill"></Image>
						</div>
					</div>
					<div className={`col ${classes.aboutDetails}`}>
						<div className={classes.forAlignment}>
                            <h4>DETAILS</h4>
                            <ul>
                                <li>
                                    <h6>
                                        FULL NAME: <span>Nicolas Georges Nasr</span>
                                    </h6>
                                </li>
                                <li>
                                    <h6>
                                        AGE: <span>21</span>
                                    </h6>
                                </li>
                                <li>
                                    <h6>
                                        ADDRESS: <span>Lebanon, Mount Lebanon, Byblos-Jbeil</span>
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
