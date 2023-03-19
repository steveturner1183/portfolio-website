import "./Hero.css";
import portrait from "../assets/images/portrait.png";
import Button from "../Layout/Button";
import Section from "../Layout/Section";
import LargeCard from "../Layout/LargeCard";

export default function Hero() {
    return (
        
            <Section id="hero">
                <LargeCard>
                    <div className="hero-text">
                        <h2>Hi, I'm Steve </h2>
                        <h3>Project Manager. Developer.</h3>
                        <p>
                        I’m not your typical graduate developer. At 30 years old, I've decided
                        to leave my current career as a construction project manager to build things in
                        a new way, with software.
                        <br></br><br></br>

                        For the last two years, I have been pursuing a second degree in Computer Science 
                        while working full time to make this dream a reality.
                        <br></br><br></br>
                        I may be new to the industry, but I bring plenty of relevant knowledge
                        from my seven years of project management experience, and am ready to start my next chapter.
                        </p>
                        <div className="hero-button">
                        <Button name="Learn More" target="info" class="fill"></Button>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src={portrait}></img>
                    </div>
                </LargeCard>
            </Section>
        
    );
}