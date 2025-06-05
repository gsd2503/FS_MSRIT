// create a functional component in reactjs that displays a 5 vehicle info card in a row with details like model, manufacturer, year and fuel type. Use inline css to style the card layout and appearance.
import React from "react";

function VehicleInfo() {
    let cardCSS = {
        width : "250px",
        height : "250px",
        backgroundColor : "rgba(180, 180, 180, 0.377)",
        padding : "10px",
        boxSizing : "border-box",
        margin : "5px",
        // float : "left",
        display: 'inline-block',
        textAlign : "center",
        boxShadow : "0px 2px 3px rgba(0, 0, 0, 0.329)",
        borderRadius : "10px",
    }

    let vehicleData = [
        {
            mo: 'Model 1',
            mf: 'Manufacturer 1',
            year : '2000',
            ft : 'Petrol'
        },
        {
            mo : 'Model 2',
            mf : 'Manufacturer 2',
            year : '2001',
            ft : 'Diesel'
        },
        {
            mo : 'Model 3',
            mf: 'Manufacturer 3',
            year : '2004',
            ft :'Diesel'
        },
        {
            mo : 'Model 4',
            mf : 'Manufacturer 4',
            year : '2008',
            ft : 'Petrol'
        },
        {
            mo : 'Model 5',
            mf : 'Manufacturer 4',
            year : '2015',
            ft : 'Petrol'
        }
    ]

    return(
        <>
        {vehicleData.map(a=>(
            <div style={cardCSS}>
                <h3>Vehicle Information</h3>
                <p><b>Model: </b>{a.mo}</p>
                <p><b>Manufacturer: </b>{a.mf}</p>
                <p><b>Year: </b>{a.year}</p>
                <p><b>Fuel Type: </b>{a.ft}</p>
            </div>
        ))}
        </>
    )
}

export default VehicleInfo;