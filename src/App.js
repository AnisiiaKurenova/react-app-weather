import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <Weather city={"Paris"} />
      <a href="https://github.com/AnisiiaKurenova/react-weather-app">
        {" "}
        Open-sourced on GitHub
      </a>
    </div>
  );
}

export default App;
