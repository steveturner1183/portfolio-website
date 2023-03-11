import github from "../assets/icons/github.svg";
import Icon from "../Icon";
import "./GithubLink.css";

export default function GithubLink(props) {
    return (<button className="github-link">
        <Icon url={props.url} img={github}></Icon>
        <p>Visit Github</p>
    </button>)
}