import "./Info.css";
import pmIcon from "../assets/icons/hat.svg";
import sdIcon from "../assets/icons/cpu.svg";
import Section from "../Layout/Section.js"
import LargeCard from "../Layout/LargeCard";
import InfoCard from "./InfoCard";
import SectionHeader from "../Layout/SectionHeader";
 
export default function Info() {
    return (
        <Section>
            <SectionHeader>
            <h3>Something about my <b>experience</b> being differnt</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut laboreLorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed
            </p>
            </SectionHeader>

            <LargeCard>
                <InfoCard
                    icon={pmIcon}
                    title="Project Management"
                    skills= {["SKILL", "SKILL","SKILL","SKILL"]}>
                </InfoCard>
                <InfoCard
                    icon={sdIcon}
                    title="Software Development"
                    skills= {["SKILL", "SKILL","SKILL","SKILL"]}>
                </InfoCard>
            </LargeCard>
        </Section>
    );
}