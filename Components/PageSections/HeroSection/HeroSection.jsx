import React, { useEffect, useRef } from "react";
import Image from "next/image";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

import LineBreaker from "../../UI/LineBreaker/LineBreaker";

import classes from "./HeroSection.module.css";

const HeroSection = () => {
  const titleRef = useRef();
  const heroRef = useRef();
  const tl = useRef();
  const tl1 = useRef();
  const tl2 = useRef();
  const tl3 = useRef();

  useEffect(() => {
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "0%",
        end: "100%",
        scrub: 1,
      },
    });
    tl1.current = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "0%",
        end: "80%",
        scrub: 1,
      },
    });
    tl2.current = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "0%",
        end: "8000%",
        scrub: 1,
        pin: true,
        pinSpacing: false,
      },
    });
    tl3.current = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "0%",
        end: "70%",
        scrub: 1,
      },
    });

    tl.current.fromTo(".hide-on-scroll", { y: 0 }, { y: -400 });
    tl1.current.fromTo(titleRef.current, { scale: 1 }, { scale: 0.6, top: "-10px", left: "-40px", x: "50%", y: "50%" });
    //tl3.current.fromTo(".heroSectionText", { opacity: 0 }, { opacity: 1 });
    //tl3.current.to(".navbar", { background: "#475860" });
  }, []);

  return (
    <div className={`${classes.heroSection}`} ref={heroRef}>
      <div className={classes.backgroundImage}>
        <Image src="/assets/images/hero-cover.png" layout="fill" alt="bgImage" objectFit="cover" />
      </div>
      <div className={classes.heroSectionText} ref={titleRef}>
        <h1>NICOLAS NASR</h1>
        <LineBreaker color="white" />
        <h4>A WEB DEVELOPER</h4>
      </div>
    </div>
  );
};

export default HeroSection;
