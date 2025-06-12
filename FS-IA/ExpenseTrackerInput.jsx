import { useState } from "react";

function ExpenseTrackerInput() {
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const num = parseFloat(amount);
    if (!expenseName.trim()) {
      setError("Name is required.");
      setIsSubmitted(false);
    } else if (isNaN(num) || num <= 0) {
      setError("Amount must be positive.");
      setIsSubmitted(false);
    } else {
      setError("");
      setIsSubmitted(true);
      setExpenseName("");
      setAmount("");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h3>Expense Tracker</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Expense name"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
            style={{ marginBottom: 8 }}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{
              border: error.includes("Amount") ? "1px solid red" : "",
              marginBottom: 8,
            }}
          />
        </div>
        <button type="submit">Add</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {isSubmitted && !error && (
        <p style={{ color: "green" }}>Expense added!</p>
      )}
    </div>
  );
}

export default ExpenseTrackerInput;
