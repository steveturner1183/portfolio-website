import Button from "../Layout/Button";
import LargeCard from "../Layout/LargeCard";
import "./Contact.css";
import Section from "../Layout/Section";
import SectionHeader from "../Layout/SectionHeader";

export default function Contact() {
    return (
        <Section id="contact">
            <SectionHeader><h3>Contact</h3></SectionHeader>

        <div className="contact">
            <div  className="contact-form">
            <form id="contact-form">
                <div><input type="text" className="form-input" placeholder="Name"/></div>
                <div><input type="email" className="form-input" placeholder="Email"/></div>
                <div><textarea className="form-input" rows="5" placeholder="Message"></textarea></div>
                <Button name="Submit"></Button>
            </form>
            </div>

        </div>
    </Section>
    )
}