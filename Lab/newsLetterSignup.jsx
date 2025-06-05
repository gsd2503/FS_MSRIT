import React from "react";
import { useState } from "react";
import './newsLetterSignup.css'

function NewsLetterSignup(){
    let [Name, setName] = useState("")
    let [Email, setEmail] = useState("")
    let [userSubmit, setuserSubmit] = useState(false)

    let disp = (e)=>{
        e.preventDefault();
        setuserSubmit(true)
    }
    return(
        <>
        {!userSubmit?(
        <form onSubmit={disp} id="container">
            <input type="text" value={Name} placeholder="Full Name" className="ifield" onChange={(e)=>setName(e.target.value)}/>
            <br />
            <input type="email" value={Email} placeholder="Email Address" className="ifield" onChange={(e)=>setEmail(e.target.value)}/>
            <br />
            <button type="submit" id="btn">Submit</button>
        </form>
        ):(
            <h1>Thank you {Name} for Subscribing</h1>
        )}
       
        </>
    )
}

export default NewsLetterSignup;