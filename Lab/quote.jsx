import './App.css';
import React from "react";

function QuoteBox(){
    let boxstyle = {
        padding: '20px',
        margin: '20px auto',
        textAlign: 'center'
    }
    return(
        <div className="box">
            <h3 style={boxstyle}>"Discipline is the bridge between goals and accomplishment"</h3>
            <p>~Jim Rohn</p>
        </div>
    )
}

export default QuoteBox;   