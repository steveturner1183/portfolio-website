import "./LargeProject.css";
import GithubLink from "../Layout/GithubLink";

export default function LargeProject(props) {
    return (
    <div className="lg-project-container">
        <div className="lg-project-header">
            <h3 className="lg-project-title">{props.data.title}</h3>
            <GithubLink url={props.data.link}/>
        </div>

        <div className="lg-project-content">
            
            <div className="lg-project-video-container">

                <video className="lg-project-vid" controls playsInline loop muted>
                    <source src={props.data.video} type="video/mp4"></source>
                </video>

            </div>
            <div className="lg-project-text">
                <h5>Description</h5>
                <p>{props.data.description}</p>
                <h5>Technologies</h5>
                <ul className="logo-set">
                    {props.data.technologies.map((logo, index) => (
                        <img key={index} src={logo} alt=""></img>
                    ))}
                </ul>
                <h5>Keywords</h5>
                <ul className="lg-project-keywords">
                    {props.data.keywords.map((keyword, index) => (
                        <p key={index}>{keyword}</p>
                    ))} 
                </ul>

            </div>
        </div>

    </div>
    );
}