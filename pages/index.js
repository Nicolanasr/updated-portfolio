import fs from "fs/promises";
import path from "path";

import HeroSection from "../Components/PageSections/HeroSection/HeroSection";
import AboutSection from "../Components/PageSections/About/AboutSection";

export default function Home(props) {
	return (
		<div>
			<section>
				<HeroSection />
			</section>

			<section>
				<AboutSection data={props.aboutSection} />
			</section>

			<div style={{ height: "100vh" }}></div>
		</div>
	);
}

export async function getStaticProps() {
    const homePath = path.join(process.cwd(), "data", "homepage.json");
	const homeJsonData = await fs.readFile(homePath);
	const homeData = JSON.parse(homeJsonData);

	return {
		props: {
			aboutSection: homeData.aboutSection
		},
		revalidate: 86400,
	}
}