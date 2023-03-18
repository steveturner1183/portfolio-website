import "./Button.css";
import { motion } from "framer-motion";
import ButtonAnimation from "../Animation/ButtonAnimation";

export default function Button(props) {
    return (
    <ButtonAnimation>
        <button 
            className={"button-" + props.class}
            onClick={() => {document.getElementById(props.target).scrollIntoView({behavior:"smooth"})}}
        >{props.name}</button>
    </ButtonAnimation>

    )
}
