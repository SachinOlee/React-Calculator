// File: src/index.js
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // optional if you add styling later

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
  ];

  return (
    <div style={styles.container}>
      <input style={styles.input} type="text" value={input} readOnly />
      <div style={styles.grid}>
        {buttons.map((btn) => (
          <button key={btn} style={styles.button} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "300px",
    margin: "50px auto",
    padding: "20px",
    border: "2px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
  },
  input: {
    width: "100%",
    fontSize: "1.5rem",
    marginBottom: "10px",
    padding: "10px",
    textAlign: "right",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "10px",
  },
  button: {
    padding: "20px",
    fontSize: "1.2rem",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Calculator />);
