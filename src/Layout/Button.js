import "./Button.css";
import ButtonAnimation from "../Animation/ButtonAnimation";

export default function Button(props) {
    function pageScroll(target) {
        document.getElementById(props.target).scrollIntoView({behavior:"smooth"})
    }

    return (
    <ButtonAnimation>
        <button 
            className={"button-" + props.class}
            onClick={props.target ? () => {pageScroll(props.target)} : () => {props.action()}}
        >{props.name}</button>
    </ButtonAnimation>
    )
}
