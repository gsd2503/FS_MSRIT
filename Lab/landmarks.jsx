import React from "react";
import "./landmarks.css"
function LandMarks(){
    let landMarksData = [
        {
            name: "Pyramid",
            location: "Giza",
            Country: "Egypt"
        },
        {
            name: "Hanging Gardens",
            location: "Babylon",
            Country: "Iraq"
        },
        {
            name: "Statue of Zeus",
            location: "Olympia",
            Country: "Greece"
        },
        {
            name: "Temple of Artemis",
            location: "Ephesus",
            Country: "Turkey"
        }
    ]
    
    return(
        <>
            {landMarksData.map(a=>(
                <div className="landCard">
                    <h1>{a.name}</h1>
                    <p><b>Location:</b> {a.location}</p>
                    <p><b>Country:</b> {a.Country}</p>
                </div>
            ))}
        </>
    )
}

export default LandMarks;