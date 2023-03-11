import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";
import "./NavBar.css";
import Icon from "../Icon.js";

export default function NavBar() {
    return (
        <div className="nav-bar">
            <h4>Steve Turner</h4>
            <ul className="nav-icons">
                <li>
                    <Icon url="https://www.linkedin.com" img={linkedin}/>
                </li>
                <li>
                    <Icon className="nav-icon" url="https://github.com/" img={github}/>
                </li>
                <li>
                <button className="nav-contact-button">Contact</button>
                </li>
            </ul>
        </div>
    );
}