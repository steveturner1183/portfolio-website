import "./SoftwareDevelopment.css";
import lgProjectData from"./projectData.json";
import Section from "../Layout/Section.js";

import projImg1 from "../assets/images/lgProj1.PNG";
import SectionHeader from "../Layout/SectionHeader";
import LargeCard from "../Layout/LargeCard";
import smallData from "./smallProjects.json";
import SmallProjectCard from "./SmallProjectCard.js";
import Button from "../Layout/Button.js";

import { useState } from 'react';
import { set } from "animejs";

export default function SoftwareDevelopment() {
    const [end, setEnd] = useState(6);
    const [buttonDisplay, setDisplay] = useState(true);
    const maxEnd = smallData.length;

    function adjustDisplay() {
        if(end < maxEnd) {
            setEnd(maxEnd);
            setDisplay(false);
        } else {
            setEnd(6);
            setDisplay(true);
        }

    }

    return (
            <Section>
                <SectionHeader>
                    <h3>See my work</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore.
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore
                    </p>
                </SectionHeader>
                {lgProjectData.map(data => (
                <LargeCard 
                    border={true}
                    header={<h3>{data.title}</h3>}>
                    <div>
                        <img className="project-image" src={projImg1}></img>
                    </div>
                    <div className="project-text">
                        <h5>Description</h5>
                        <p>{data.description}</p>
                        <h5>Technologies</h5>
                        <p>{data.technologies}</p>
                        <h5>Challenges and Lessons Learned</h5>
                        <p>{data.challenges}</p>
                        <h5>Github</h5>
                    </div>
                </LargeCard>
                ))}
                <SectionHeader><h4>More Projects</h4></SectionHeader>
                <div className="sm-project-container">
                    {smallData.slice(0, end).map(data => (
                        <SmallProjectCard
                            title={data.title}
                            description={data.description}
                            technologies={data.technologies}
                        ></SmallProjectCard>
                    ))}
                </div>

                {buttonDisplay && <Button name="Show More" action={adjustDisplay}></Button>}
                {!buttonDisplay && <Button name="Show Less" action={adjustDisplay}></Button>}
            </Section>
  

    );
}