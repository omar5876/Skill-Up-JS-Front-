import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ExampleContainer from "./Components/ExampleComponent/ExampleContainer";
import AppRouter from "./Router/AppRouter";

function App() {
  const [count, setCount] = useState(0);

  return <div className="App">
    <AppRouter />
  </div>;
}

export default App;
