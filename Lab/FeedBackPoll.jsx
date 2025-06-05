import React from 'react'
import { useState } from 'react'

function FeedBackPoll() {
    // let [content,setContent] = useState(true)
    let [choice, setChoice] = useState("")


  return (
    <>
    {!choice?(
    <div>
    <h5>How would you rate our Tech Supprot?</h5>
    <input type="radio" name="feedback" value="poor" checked={choice === "poor"} onChange={(e)=>setChoice(e.target.value)} /> <span>Poor</span> <br />
    <input type="radio" name="feedback" value="neutral" checked={choice === "neutral"} onChange={(e)=>setChoice(e.target.value)}/> <span>Neutral</span> <br />
    <input type="radio" name="feedback" value="good" checked={choice === "good"} onChange={(e)=>setChoice(e.target.value)}/> <span>Good</span>
    </div>
    ):(<h1>Thank you for choosing {choice}</h1>)}
    </>
  )
}

export default FeedBackPoll;