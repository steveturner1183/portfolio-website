import "./Icon.css";
import ButtonAnimation from "./Animation/ButtonAnimation";

export default function Icon(props) {
    return (
        <ButtonAnimation>
        <div className="icon">
            <a href={props.url} target="_blank" rel="noopener noreferrer">
                <img className="image" src={props.img} alt=""></img>
            </a>
        </div>
        </ButtonAnimation>
    )
};