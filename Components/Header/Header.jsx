import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import classes from "./Header.module.css";

const Header = () => {
	const router = useRouter();
	let bgLight = router.route === "/about-us";

	const [scrollState, setScrollState] = useState(false);
	const [mobileNavOpen, setmobileNavOpen] = useState(false);

	const handleScrollState = useCallback(() => {
		if (window.scrollY < 50) {
			if (scrollState) setScrollState(false);
		} else {
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
		<nav className={`navbar fixed-top navbar-expand-lg  ${classes.custom_navbar} ${scrollState && classes.navbarColorScroll} ${scrollState && classes.boxShadow} `}>
			<div className="container-fluid">
				<div className={`navbar-brand `}>
					<Link href="#">
						<a className={classes.navbarBrand}>
							<h4>NICOLAS NASR</h4>
							<h6>PORTFOLIO</h6>
						</a>
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
