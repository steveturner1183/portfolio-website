import "./Info.css";
import pmIcon from "../assets/icons/pm-icon.png";
import sdIcon from "../assets/icons/sd-icon.png";
import Section from "../Layout/Section.js"
import InfoCard from "./InfoCard";
import SectionHeader from "../Layout/SectionHeader";
 
export default function Info() {
    return (
        <Section id="info">
            <SectionHeader>
            <h3>Diversify the talent on your team</h3>
            <p>
            You’ve probably looked at the portfolios of many skilled 
            and talented graduates, so why consider me? In addition 
            to a strong foundation in computer science, I also bring 
            the knowledge and skills one can only acquire from 
            successful completion of real world projects with real
             world teams.
            </p>
            </SectionHeader>

            <div className="info-card-container">
                <InfoCard
                    icon={pmIcon}
                    title="Project Management"
                    skills= {["Communication", "Scheduling","Leadership","Organization"]}
                    target="project-management"
                    >
                </InfoCard>
                <InfoCard
                    icon={sdIcon}
                    title="Software Development"
                    skills= {["Object Oriented", "RESTful API","Backend / Frontend","Databases"]}
                    target="software-development"
                    >
                </InfoCard>
            </div>
        </Section>
    );
}