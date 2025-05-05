import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/welcome/")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("Error fetching welcome message:", error);
        setMessage("Failed to load message 😢");
      });
  }, []); // run once on component mount

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;
