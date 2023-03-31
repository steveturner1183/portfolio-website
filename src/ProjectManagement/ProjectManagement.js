import "./ProjectManagement.css";
import pmDiagram from "../assets/charts/pm-diagram.png";
import sdDiagram from "../assets/charts/sd-diagram.png";
import skills from "../assets/charts/skills.png";
import Section from "../Layout/Section";
import SectionHeader from "../Layout/SectionHeader";

export default function ProjectManagement () {
    
    return (
        <Section id="project-management">
            <SectionHeader>
                <h3>Learn What I Do</h3>
            </SectionHeader>

                <div className="content-section">
                    <h4>What type of projects do I manage?</h4>
                    <p>
                    I manage complex, multi-phased, hospital
                    renovation projects. My day to day is driving projects
                    to completion while managing scope, cost, and time 
                    as well as coordinating and managing a team of 
                    specialists across a wide array of disciplines.
                    <br/><br/>
                    The chart below shows what the team for a typical
                    construction project can look like. My job is to manage
                    teams of subcontractors (typically 4-15 different companies),
                    while coordinating with the design team and stakeholders to deliver
                    the project on time and budget.
                    </p>
                </div>
                <div className="chart">
                    <img src={pmDiagram} alt=""></img>
                </div>


                <div className="content-section">
                    <h4>Why Is This Relevant?</h4>
                    <p>
                    The construction and software world are not so different
                    when you look at the basic components. Both have a team of specialists
                    working together to build something.
                    <br></br><br></br>
                    There are a lot of software development methodologies that I will
                    make no direct comparison to, but the chart below demonstrates how similar the 
                    experience I already have could correlate to 
                    a software development project. 
                    </p>
                </div>
                <div className="chart">
                    <img src={sdDiagram} alt=""></img>
                </div>

                <div className="content-section">
                    <h4>Do any skills transfer?</h4>
                    <p>
                        The soft skills I have aquired over my years working in
                        project management can transfer to any career. Whether I
                        am working on a team or managing a team, I have learned how
                        to add value in a way that is best for everyone.
                    </p>
                    <div className="skills-chart">
                        <img src={skills} alt=""></img>
                    </div>
                </div>


       </Section>
    )
}