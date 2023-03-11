import "./InfoCard.css";
import Button from "../Layout/Button.js"

export default function InfoCard(props) {
    return(
        <div className="info-card">
                <img className="info-icon" src={props.icon}></img>
                <h5>{props.title}</h5>
                <ul>
                    {props.skills.map(skill => 
                        <li>{skill}</li>
                    )
                    }
                </ul>
                <Button name="Learn More" />
        </div>
    )
}