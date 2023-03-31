import GithubLink from "../Layout/GithubLink";
import "./SmallProjectCard.css";

export default function Info(props) {
    return (
        <div className="sm-project-card">
            <h5>{props.title}</h5>
            <h6>Description</h6>
            <p>{props.description}</p>
            <h6>Technologies</h6>
            <ul className="logo-set">
                        {props.technologies.map((logo, index) => (
                            <img key={index} src={logo} alt=""></img>
                        ))}
            </ul>
            <GithubLink url={props.link}></GithubLink>
        </div>
    )
}
