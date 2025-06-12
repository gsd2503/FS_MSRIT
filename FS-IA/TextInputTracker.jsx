import { useState } from "react";

function TextInputTracker() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    // Allow only letters and spaces
    const value = e.target.value.replace(/[^a-zA-Z ]/g, "");
    setText(value);
  };

  const handleClear = () => {
    setText("");
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type here..."
        style={{
          padding: "6px",
          fontSize: "16px",
          marginBottom: "10px",
        }}
      />
      <div style={{ marginTop: "8px" }}>
        <p>
          Current Input: <strong>{text}</strong>
        </p>
        <p>Character Count: {text.length}</p>
        <button
          onClick={handleClear}
          style={{ padding: "5px 10px", fontSize: "14px" }}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default TextInputTracker;
