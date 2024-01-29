import fs from "fs/promises";
import path from "path";

import HeroSection from "../Components/PageSections/HeroSection/HeroSection";
import AboutSection from "../Components/PageSections/About/AboutSection";
import CareerSection from "../Components/PageSections/CareerSection/CareerSection";
import SkillsSection from "../Components/PageSections/Skills/SkillsSection";
import ProjectsSections from "../Components/PageSections/ProjectsSection/ProjectsSections";
import Footer from "../Components/Footer/Footer";

export default function Home(props) {
    return (
        <div>
            <section>
                <HeroSection />
            </section>

            <section id="about">
                <AboutSection data={props.aboutSection} />
            </section>

            <section id="skills">
                <SkillsSection data={props.skillsSection} />
            </section>

            <section id="projects">
                <ProjectsSections data={props.projectsSection} />
            </section>

            <section id="career">
                <CareerSection data={props.careerSection} />
            </section>


            <section id="contact">
                <Footer />
            </section>
        </div>
    );
}

export async function getStaticProps() {
    const homePath = path.join(process.cwd(), "data", "homepage.json");
    const homeJsonData = await fs.readFile(homePath);
    const homeData = JSON.parse(homeJsonData);

    return {
        props: {
            aboutSection: homeData.aboutSection,
            careerSection: homeData.careerSection,
            skillsSection: homeData.skillsSection,
            projectsSection: homeData.projectsSection,
        },
        revalidate: 86400,
    };
}
