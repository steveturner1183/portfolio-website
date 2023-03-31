import github from "../assets/icons/github.svg";
import burger from "../assets/icons/burgerMenu.png";
import linkedin from "../assets/icons/linkedin.svg";
import "./NavBar.css";
import Icon from "./Icon.js";
import Button from "../Layout/Button.js";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function NavBar() {
    const [menuOpen, setOpen] = useState(false);

    return (
        <div className="nav-bar">
            <h5 onClick={() => {document.getElementById("hero").scrollIntoView({behavior:"smooth"})}}>Steve Turner</h5>
            
            {/** Navigation links visible only on desktop **/}
            <ul className="nav-links">
                <li><Button name="Experience" target="project-management" class="no-fill"></Button></li>
                <li><Button name="Projects" target="software-development" class="no-fill"></Button></li>

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

            {/** Mobile Fiendly Menu **/}
            <li 
                onClick={() => {menuOpen ? setOpen(false) : setOpen(true)}}
                className="nav-burger-menu "
                >
                <img src ={burger} alt=""></img>
            </li>

            {/** Dropdown menu for mobile friendly **/}
            <AnimatePresence
            initial={{ y: 0, opacity: 1 }}
            exit={{ y:-100, opacity: 0 }}>
                    {menuOpen &&
                        <ul onClick={() => setOpen(false)} className="burger-nav-links">
                            <Button 
                                name="Experience" 
                                target="project-management" 
                                class="no-fill">
                            </Button>
                            <Button 
                                name="Projects" 
                                target="software-development" 
                                class="no-fill">
                            </Button>
                            <Button 
                                name="Linkedin" 
                                target={false}
                                action={() => {window.open("https://www.linkedin.com/in/steve-g-turner", '_blank', 'noopener,noreferrer')}}
                                class="no-fill">
                            </Button>
                            <Button 
                                name="Github" 
                                target={false}
                                action={() => {window.open("https://github.com/steveturner1183?tab=repositories", '_blank', 'noopener,noreferrer')}}
                                class="no-fill">
                            </Button>
                            <Button 
                                name="Contact" 
                                target="contact" 
                                class="no-fill">
                            </Button>
                        </ul>
                    }
            </AnimatePresence>
        </div>
    );
}