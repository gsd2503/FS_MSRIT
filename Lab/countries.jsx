import React from "react";
import "./countries.css"

function Countries(){
    let countriesData = [
        {
            ccode: 'ind',
            cname: 'India',
            ccap: 'New Delhi'
        },
        {
            ccode: 'usa',
            cname: 'United States of America',
            ccap: 'Washington D. C'
        }
    ]
    
    return(
        <>
        <ul className="list">
            {countriesData.map(a => (
                <li key={a.ccode}> <b>Country Name: </b>{a.cname} <br /> <b>Capital: </b>{a.ccap}</li>
            ))}
        </ul>
        </>
    )
}

export default Countries;