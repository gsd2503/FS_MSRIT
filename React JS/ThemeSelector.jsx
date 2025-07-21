import { useState } from "react";
import "./Exe11.css";

function ThemeSelector() {
  const [theme, setTheme] = useState("light");

  return (
    <div>
      <label>
        <input
          type="radio"
          value="light"
          checked={theme === "light"}
          onChange={(e) => setTheme(e.target.value)}
        />{" "}
        Light
      </label>
      <label style={{ marginLeft: 10 }}>
        <input
          type="radio"
          value="dark"
          checked={theme === "dark"}
          onChange={(e) => setTheme(e.target.value)}
        />{" "}
        Dark
      </label>

      <div className={`preview ${theme}`}>This is {theme} mode.</div>
    </div>
  );
}

export default ThemeSelector;
