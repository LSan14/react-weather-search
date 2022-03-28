import React from "react";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Los Angeles" />
        <footer>
          This project is coded by Lizeth Sandoval and is open-source in{" "}
          <a
            href="https://https://github.com/LSan14/react-weather-search"
            target="_blank"
          >
            {""} Github.
          </a>
        </footer>
      </div>
    </div>
  );
}
