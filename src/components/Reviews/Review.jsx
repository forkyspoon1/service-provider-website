import React from "react";


function Review (props) {

    return(
    
        <div className="itemContainer">
            <img src={props.pfp} alt="pfp" className="pfpPlaceholder"></img>
            <h1>{props.name}</h1>
            <p className="starIcons">{props.stars}</p>
            <h4>{props.description}</h4>
        </div>
    )
}

export default Review;