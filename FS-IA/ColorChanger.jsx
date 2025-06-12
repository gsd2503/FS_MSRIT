import { useState } from "react";

function ColorChanger() {
  const colors = ["red", "green", "blue"];
  const [i, setI] = useState(0);

  return (
    <div style={{ padding: 10 }}>
      <div>Color: {colors[i]}</div>
      <div
        style={{
          background: colors[i],
          width: 100,
          height: 100,
          margin: "10px 0",
        }}
      />
      <button onClick={() => setI((i + 1) % colors.length)}>Next</button>
    </div>
  );
}

export default ColorChanger;
