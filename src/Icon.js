import "./Icon.css";

export default function Icon(props) {
    return (
        <div className="icon">
            <a href={props.url} target="_blank" rel="noopener noreferrer">
                <img className="image" src={props.img} alt=""></img>
            </a>
        </div>
    )
};