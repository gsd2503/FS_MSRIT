import { useState } from "react";

const ExpenseTrackerInput =() =>{
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [success,setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        setSuccess(false);
        setError('');

        const amountValue = parseFloat(amount);
        if(!name.trim()){
            setError('Expense name is required');
            return;
        }
        if(isNaN(amountValue) || amountValue <= 0){
            setError('Amount must be a positive number');
            return;
        }

        setSuccess(true);
        alert(`Expense "${name}" of amount $${amountValue.toFixed(2)} added successfully`);
        setName('');
        setAmount('');
    };
    return(
        <form onClick={handleSubmit} style={{ maxWidth: 400, margin:'20px auto',fontFamily: 'Arial, sans-serif' }}>
            <div style={{marginBottom: 12}}>
                <label htmlFor="expenseName">Expense Name:
                    <input type="text" id="expenseName" value={name} onChange={(e)=>setName(e.target.value)} style={{width:'100%',padding: 8, boxSizing:"border-box"}} />
                </label><br />
                <label htmlFor="expenseAmount">Amount:
                    <input type="number" id="expenseAmount" value={amount}
                    onChange={(e)=> setAmount(e.target.value)}
                    style={{width:'100%',padding: 8, boxSizing:"border-box",
                        borderColor: error ? 'red' : '#ccc',
                        borderWidth: '1.5px', borderStyle: 'solid',
                    }} />
                </label>
                    <br />
                <button type="submit" style={{padding:'10px 20px',cursor:'pointer'}}>Add Expenses</button>
                 {error && <p style={{color:'red',marginTop:10 }}>{error}</p>}
                 {success && <p style={{color: 'green', marginTop:10}}>Expense added successfully</p>}   
            </div>

        </form>
    );
}

export default ExpenseTrackerInput;
