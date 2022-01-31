import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import LineBreaker from "../UI/LineBreaker/LineBreaker";

import classes from "./Header.module.css";

const Header = () => {
  const router = useRouter();
  let bgLight = router.route === "/about-us";

  const [scrollState, setScrollState] = useState(false);
  const [mobileNavOpen, setmobileNavOpen] = useState(false);

  const handleScrollState = useCallback(() => {
    var winHeight = window.innerHeight;
    var docHeight = document.body.scrollHeight;
    var scrollTop = window.scrollY; //NaN or zero at top

    var trackLength = winHeight;
    var pctScrolled = Math.floor((scrollTop / trackLength) * 100);

    if (pctScrolled < 80) {
      document.getElementsByClassName("heroSectionText")[0].style.opacity = 0;
      if (scrollState) setScrollState(false);
    } else {
      document.getElementsByClassName("heroSectionText")[0].style.opacity = 1;
      setScrollState(true);
    }
  }, [scrollState]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollState);
  }, [handleScrollState]);

  const change_language = (language) => {
    console.log(language);
  };

  const toggleMobileMenu = () => {
    setmobileNavOpen((p) => !p);
  };

  return (
    <nav
      className={`navbar fixed-top navbar-expand-lg  ${classes.custom_navbar} ${scrollState && classes.navbarColorScroll} ${
        scrollState && classes.boxShadow
      } `}
    >
      <div className="container-fluid">
        <div className={`navbar-brand `}>
          <Link href="#" passHref>
            <div>
              <a className={"heroSectionText"}>
                <h1>NICOLAS NASR</h1>
                <LineBreaker color="white" />
                <h4>A WEB DEVELOPER</h4>
              </a>
              <a className={`${classes.navbarBrand} hide-on-scroll`}>
                <h4>NICOLAS NASR</h4>
                <h6>PORTFOLIO</h6>
              </a>
            </div>
          </Link>
        </div>
        {mobileNavOpen && <div className={classes.backdrop}></div>}
        <div
          className={mobileNavOpen ? `${classes.custom_navbar_nav} ${classes.active}` : classes.custom_navbar_nav}
          id="navbarNav"
          onClick={mobileNavOpen ? toggleMobileMenu : () => {}}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="#about">
                <a current="page">ABOUT</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="#skills">
                <a current="page">SKILLS</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#career">
                <a current="page">CAREER</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#projects">
                <a current="page">PROJECTS</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#contact">
                <a current="page">CONTACT</a>
              </Link>
            </li>
          </ul>
        </div>

        <button
          className={`navbar-toggler ${classes.box_shadow_none}`}
          type="button"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleMobileMenu}
        >
          {!mobileNavOpen && (
            <span className="navbar-toggler-icon" style={{ fontSize: "2rem", color: "white" }}>
              {" "}
              =
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Header;

// const hasWindow = typeof window !== "undefined";
// function getWindowDimensions() {
// 	const width = hasWindow ? window.innerWidth : null;
// 	const height = hasWindow ? window.innerHeight : null;
// 	return {
// 		width,
// 		height,
// 	};
// }
// const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

// useEffect(() => {
// 	if (hasWindow) {
// 		function handleResize() {
// 			if(getWindowDimensions().width > 991.5) setmobileNavOpen(false)
// 			setWindowDimensions(getWindowDimensions());
// 		}

// 		window.addEventListener("resize", handleResize);
// 		return () => window.removeEventListener("resize", handleResize);
// 	}
// }, [hasWindow]);

// console.log(windowDimensions)
