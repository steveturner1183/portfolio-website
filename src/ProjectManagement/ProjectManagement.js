import "./ProjectManagement.css";
import pmDiagram from "../assets/images/pm-diagram.png";
import sdComparison from "../assets/images/sd-comparison.png";
import Section from "../Layout/Section";
import SectionHeader from "../Layout/SectionHeader";
import LargeCard from "../Layout/LargeCard";

export default function ProjectManagement () {
    
    return (
        <Section>
            <SectionHeader>
                <h3>Learn What I Do</h3>
            </SectionHeader>
            <LargeCard
                border={false}
                header={<h4>What Type of Projects Do I Manage?</h4>}>
                <div>
                    <p>I have spent 7 years as a construction manager for
                        projects ranging in size from this to that. The diagram
                        below depicts the typical coordination I do on a project
                    </p>
                </div>
                <div className="chart">
                    <img src={pmDiagram}></img>
                </div>
            </LargeCard>

            <LargeCard
                border={false}
                header={<h4>Why Is This Relevant?</h4>}>
                <div>
                    <p>
                        Abstracting away from construction maangement, the project Management
                        process is actually very similar to what a software development team
                        could look like:
                    </p>
                </div>
                <div className="chart">
                    <img src={pmDiagram}></img>
                </div>
            </LargeCard>

            <LargeCard
                border={false}
                header={<h4>Ok.. they are similar. Why should I care? Do any skills transfer?</h4>}>
                <div>
                    <ul>
                        <li>Working with and overseeing a multi-specialized team</li>
                        <li>Navigating relationships with clients, teammates, and people I oversee</li>
                        <li>Implementing a design, and working with the design team and client to handle any changes</li>
                        <li>Asking the right questions before something is built to catch avoidable mistakes</li>
                        <li>We can save the rest for the interview</li>
                    </ul>
                </div>
                <div className="chart">
                    <img src={pmDiagram}></img>
                </div>
            </LargeCard>

       </Section>
    )
}