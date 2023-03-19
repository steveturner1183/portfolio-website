import ButtonAnimation from "../Animation/ButtonAnimation";
import github from "../assets/icons/github.svg";
import Icon from "../Icon";
import "./GithubLink.css";

export default function GithubLink(props) {
    return (
    <ButtonAnimation>
        <button className="github-link"
        onClick={() => {window.open(props.url, '_blank', 'noopener,noreferrer')}}>
            <img className="github-icon" src={github}></img>
            <p>Visit Github</p>
        </button>
    </ButtonAnimation>
    )
}