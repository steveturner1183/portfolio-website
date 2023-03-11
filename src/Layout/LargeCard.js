import "./LargeCard.css";

export default function LargeCard (props) {
    return (
        <div className={props.border ? "large-card-border": "large-card"}>
            <div className="large-card-header">{props.header}</div>
            <div className="large-card-content">{props.children}</div>
        </div>
    )
}