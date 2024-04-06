import React from "react";
import './learnMore.scss';

const LearnMoreButton = () =>{

    const handleClick = () =>{
        alert('Learn More Button Clicked !');
    }

    return(
        <button className="learnMoreButton" onClick={handleClick}>Learn More</button>
    )
}

export default LearnMoreButton;