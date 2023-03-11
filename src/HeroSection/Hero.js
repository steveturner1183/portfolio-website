import "./Hero.css";
import portrait from "../assets/images/portrait.png";
import Button from "../Layout/Button";
import Section from "../Layout/Section";
import LargeCard from "../Layout/LargeCard";

export default function Hero() {
    return (
        
            <Section>
                <LargeCard>
                    <div className="hero-text">
                        <h2>Hi, I'm Steve </h2>
                        <h3>Project Manager. Developer.</h3>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut laboreLorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed
                        </p>
                        <Button name="Learn More"/>
                    </div>
                    <div className="hero-image">
                        <img src={portrait}></img>
                    </div>
                </LargeCard>
            </Section>
        
    );
}