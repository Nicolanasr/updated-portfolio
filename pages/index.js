import HeroSection from "../Components/PageSections/HeroSection/HeroSection";
import AboutSection from "../Components/PageSections/About/AboutSection"

export default function Home() {
	return (
		<div>
			<section>
				<HeroSection />
			</section>

      <section>
        <AboutSection />
      </section>

			<div style={{ height: "100vh" }}></div>
		</div>
	);
}
