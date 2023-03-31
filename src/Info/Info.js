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
            With a vast array of skilled graduates, here’s why you should consider me.
            In addition to a strong foundation in computer science, I bring applied knowledge and 
            transferable skills acquired from successful completion of real world projects with real world teams
            in a different industry. Adding someone with a background different than the standard tech graduate invites
            growth to your team and its processes.
            
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