import React from "react";
import './colsutationButton.scss'

const ConsultationButton = () =>{

    const handleClick = () =>{
        alert('Consultation Button Clicked !');
    }

    return(
        <button className="consultationButton" onClick={handleClick}>Get Free Consultation</button>
    )
}

export default ConsultationButton;