import "./LargeProject.css";
import Button from "../Layout/Button.js"
import GithubLink from "../Layout/GithubLink";

export default function LargeProject(props) {
    return (
    <div className="lg-project-container">
        <div className="lg-project-header">
            <h3>{props.data.title}</h3>
            <GithubLink />
        </div>
        <div className="lg-project-content">
            <div>
                <video className="lg-project-vid" autoPlay loop muted>
                    <source src={props.data.video} type="video/mp4"></source>
                </video>
            </div>
                <div className="lg-project-text">
                    <h5>Description</h5>
                    <p>{props.data.description}</p>
                    <h5>Technologies</h5>
                    <ul className="logo-set">
                        {props.data.technologies.map(logo => (
                            <img src={logo}></img>
                        ))}
                    </ul>
                </div>
        </div>
    </div>
    );
}