import React from "react";
import { useState } from "react";

function UserStatusSwither(){

    let [status,setStatus] = useState(false)
    let handler = (e)=>{
        setStatus(!status)
    }
    return(
        <>
        <h2>User State</h2>
        <h3 style={{color:(status?"green":"red")}}>{status? "Online" : "Offline"}</h3>
        <button onClick={handler}>{status?"Go Offline" : "Go Online"}</button>
        </>
    )
}
    
export default UserStatusSwither