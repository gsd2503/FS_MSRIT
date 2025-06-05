import React from 'react'
import { useState } from 'react'

function ExpenseTracker() {
    let[name,setName] = useState("")
    let[amount,setAmount] = useState("")
    let disp = (e) => {
        e.preventDefault()
        alert(`Expense: ${name}, Amount: ${amount} entered successfully`)
    }
  return (
    <>
    <form onSubmit={disp}>
    <label>Expense: </label> <br />
    <input type="text"  onChange={(e)=>setName(e.target.value)}/> <br />

    <label>Amount</label> <br />
    <input type="number"   onChange={(e)=>setAmount(e.target.value)}/> <br />


    <button type="submit">Add Expense</button>
    <br />
    </form>
    </>
  )
}

export default ExpenseTracker
