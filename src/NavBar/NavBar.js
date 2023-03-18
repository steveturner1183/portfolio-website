import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";
import "./NavBar.css";
import Icon from "../Icon.js";
import Button from "../Layout/Button.js"

export default function NavBar() {
    return (
        <div className="nav-bar">
            <h5>Steve Turner</h5>
            <ul className="nav-links">
                <Button name="Experience" target="project-management" class="no-fill"></Button>
                <Button name="Projects" target="software-development" class="no-fill"></Button>
            </ul>
            <ul className="nav-icons">
                <li>
                    <Icon url="https://www.linkedin.com/in/steve-g-turner" img={linkedin}/>
                </li>
                <li>
                    <Icon className="nav-icon" url="https://github.com/steveturner1183?tab=repositories" img={github}/>
                </li>
                <li>
                    <Button name="Contact" target="contact" class="no-fill-with-border"></Button>
                </li>
            </ul>
        </div>
    );
}