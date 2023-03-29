import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="App">
      {isClicked ? (
        <div>Hchee an cut</div>
      ) : (
        <button
          onClick={() => {
            setIsClicked(true);
          }}
        >
          Nhấn vào đâyyyy
        </button>
      )}
    </div>
  );
}

export default App;
