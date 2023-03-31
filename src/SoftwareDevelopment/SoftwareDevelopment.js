import { useState } from 'react';

import "./SoftwareDevelopment.css";

import { lgProjectData, smProjectData } from "./projectData.js";
import Section from "../Layout/Section.js";
import SectionHeader from "../Layout/SectionHeader";
import SmallProjectCard from "./SmallProjectCard.js";
import Button from "../Layout/Button.js";
import LargeProject from "./LargeProject";

export default function SoftwareDevelopment() {
    const [end, setEnd] = useState(3);
    const [buttonDisplay, setDisplay] = useState(true);
    const maxEnd = smProjectData.length;

    function adjustDisplay() {
        if(end < maxEnd) {
            setEnd(maxEnd);
            setDisplay(false);
        } else {
            setEnd(3);
            setDisplay(true);
        }

    }

    return (
            <Section id="software-development">
                {/** Large Project Showcase **/}
                <SectionHeader><h3>See What I Have Built</h3></SectionHeader>
                {lgProjectData.map((data, index) => (<LargeProject key={index} data={data}></LargeProject>))}
                 
                {/** Small Project Showcase **/}
                <SectionHeader><h4>More Projects</h4></SectionHeader>
                
                <div className="sm-project-container">
                    {smProjectData.slice(0, end).map((data, index) => (
                        <SmallProjectCard
                            key={index}
                            title={data.title}
                            description={data.description}
                            technologies={data.technologies}
                            link={data.link}
                        ></SmallProjectCard>
                    ))}
                </div>

                <Button
                    name= {buttonDisplay ? "Show More" : "Show Less"}
                    class= "fill" target= {false}  action= {adjustDisplay} 
                ></Button>

            </Section>
    );
}