import "./SoftwareDevelopment.css";
import { lgProjectData } from "./projectData.js";
import Section from "../Layout/Section.js";

import projVid1 from "../assets/videos/MLBreakout.mp4";
import SectionHeader from "../Layout/SectionHeader";
import LargeCard from "../Layout/LargeCard";
import smallData from "./smallProjects.json";
import SmallProjectCard from "./SmallProjectCard.js";
import Button from "../Layout/Button.js";



import un from "../assets/icons/languages/unity.svg";


import { useState } from 'react';
import LargeProject from "./LargeProject";

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
                    <LargeProject data={data}></LargeProject>
                ))}
                <SectionHeader><h4>More Projects</h4></SectionHeader>
                {/*
                
                <div className="sm-project-container">
                    {smallData.slice(0, end).map(data => (
                        <SmallProjectCard
                            title={data.title}
                            description={data.description}
                            technologies={data.technologies}
                        ></SmallProjectCard>
                    ))}
                </div>
                */}

                

                {buttonDisplay && <Button name="Show More" action={adjustDisplay}></Button>}
                {!buttonDisplay && <Button name="Show Less" action={adjustDisplay}></Button>}
            </Section>
  

    );
}