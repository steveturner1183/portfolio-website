import Button from "../Layout/Button";
import LargeCard from "../Layout/LargeCard";
import "./Contact.css";

export default function Contact() {
    return (
        <div className="contact">
            <h3>Contact Me</h3>
            <div  className="contact-form">
            <form id="contact-form"/*onSubmit={this.handleSubmit.bind(this)} method="POST"*/>
                <div><input type="text" className="form-input" placeholder="Name"/></div>
                <div><input type="email" className="form-input" placeholder="Email"/></div>
                <div><textarea className="form-input" rows="5" placeholder="Message"></textarea></div>
                <Button name="Submit"></Button>
            </form>
            </div>

    </div>
    )
}