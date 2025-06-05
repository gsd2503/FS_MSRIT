import React from "react";
import { useState } from "react";

function ContactForm(){
    let [name,setName] = useState("");
    let [age,setAge] = useState("");
    let [email,setEmail] = useState("");
    let [ph,setPh] = useState("");
    let [msg,setMsg] = useState("");
    let [pwd,setPwd] = useState("");
    let [show,setShow] = useState(false)
    let toggleShow = () => setShow(!show)

    let handleSubmit = (e)=>{
        e.preventDefault();
        document.getElementById("name").innerHTML = `Name: ${name}`
        document.getElementById("age").innerHTML = `Age: ${age}`
        document.getElementById("email").innerHTML = `Email: ${email}`
        document.getElementById("ph").innerHTML = `Phone Number: ${ph}`
        document.getElementById("message").innerHTML = `Message: ${msg}`
        alert(`Logging in as ${name}`)
    }

    return(
        <>
        <form>
            <label>Name: </label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} /> <br />

            <label>Age: </label>
            <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} /> <br />
            
            <label>Email: </label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/> <br />

            <label>Phone Number: </label>
            <input type="number" value={ph} onChange={(e)=>setPh(e.target.value)} /> <br />

            <label>Message: </label>
            <textarea value={msg} onChange={(e)=>setMsg(e.target.value)}></textarea> <br />

            <label>Password</label>
            <input type={show ? "text" : "password"} value={pwd} onChange={(e)=>setPwd(e.target.value)}/> 
            <button value={show} onClick={toggleShow}>{show ? "HIde" : "Showu"}</button> <br />

            <input type="button" value="Submit" onClick={handleSubmit}/>
        </form>

        <h1 id="name">Name: </h1>
        <p id="age">Age: </p>
        <p id="email">Email: </p>
        <p id="ph">Phone NUmber: </p>
        <p id="message">Message: </p>

        </>
    )
}

export default ContactForm;