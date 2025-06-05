import React from "react";

const Greeting = ()=>{
    const h = new Date().getHours();
    let msg;
    if(h<12){
        msg = "Good Morning";
    } else if(h<18){
        msg = "Good Afternoon"
    } else{
        msg = "Good Evening"
    }

    return <h2>{msg}</h2>
}

export default Greeting