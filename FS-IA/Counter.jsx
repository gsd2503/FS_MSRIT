import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const btnStyle = {
    padding: "8px 12px",
    margin: "5px",
    backgroundColor: "#eee",
    border: "1px solid #ccc",
    cursor: "pointer",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "15px" }}
      >
        Count: {count}
      </div>
      <div>
        <button style={btnStyle} onClick={() => setCount(count + 1)}>
          Increase
        </button>
        <button style={btnStyle} onClick={() => setCount(count - 1)}>
          Decrease
        </button>
        <button style={btnStyle} onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
