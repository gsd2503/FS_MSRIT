import React from "react";
import "./restraunt.css"

function Restraunt(){
    let menuList = [
        {
            resName: 'Mehfil',
            vegMenu: ['Machurian','Fried Rice','Noodles'],
            nonVegMenu: ['Chicken 65','Kabab','Kheema']
        },
        {
            resName: 'Pista House',
            vegMenu: ['Mushroom','Jeera Rice','Butter Naan'],
            nonVegMenu: ['Chicken Manchuria','Chicken Biryan','Kheema']
        },

    ]

    return(
        <>
        {menuList.map(a=>(
            <div className="restCard">
                <h1>{a.resName}</h1>
                <ul>
                    <li>Veg Menu</li>
                    <ol>
                    {a.vegMenu.map(b=>(
                        <li>{b}</li>
                    ))}
                    </ol>
                    <li>Non Veg Menu</li>
                    <ol>
                    {a.nonVegMenu.map(b=>(
                        <li>{b}</li>
                    ))}
                    </ol>

                </ul>
            </div>
        ))}
        </>
    )
}

export default Restraunt;