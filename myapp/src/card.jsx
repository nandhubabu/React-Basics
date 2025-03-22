import React from "react";
import Avatar from "./component/Avatar";

function Card(props){
    return(
        <div className="card">
            <div className="top">
                <p className="key"> {props.id}  </p><br></br>
                <h2 className="name">{props.name}</h2>
                <Avatar img={props.img}/>
            </div>
            <div className="bottom">
                <p className="info">{props.tel}</p>
                <p className="info">{props.email}</p>
            </div>
        </div>
    )
}

export default Card
