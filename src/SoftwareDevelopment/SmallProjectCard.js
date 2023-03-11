import "./SmallProjectCard.css";

export default function Info(props) {
    return (
        <div className="sm-project-card">
            <h5>{props.title}</h5>
            <h6>Description</h6>
            <p>{props.description}</p>
            <h6>Technologies</h6>
            <p>{props.technologies} </p>
        </div>
    )
}
