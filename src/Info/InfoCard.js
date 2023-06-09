import "./InfoCard.css";
import Button from "../Layout/Button.js"

export default function InfoCard(props) {
    return(
        <div className="info-card">
                <img className="info-icon" src={props.icon} alt=""></img>
                <h5>{props.title}</h5>
                <ul>
                    {props.skills.map((skill, index) => 
                        (<li key={index}>{skill}</li>)
                    )
                    } 
                </ul>
                <Button 
                class="fill"
                name="Learn More" 
                target={props.target}/>
        </div>
    )
}