import "./App.css";
import { useState } from "react";

function App() {
  const [numberOfRolled, setNumberOfRolled] = useState(0);
  const [button1, setButton1] = useState(null);
  const [button2, setButton2] = useState(null);
  const [button3, setButton3] = useState(null);
  const [button4, setButton4] = useState(null);
  const onButtonClick = () => {
    setButton1((Math.random() > 0.5));
    setButton2((Math.random() > 0.5));
    setButton3((Math.random() > 0.5));
    setButton4((Math.random() > 0.5));
    setNumberOfRolled((n) => n + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          The royal game of <u>UR</u>.
        </h1>
        <div className="boxesWrapper">
          <div
            className={
              "box" +
              (button1 !== null ? (button1 ? " box-white" : " box-black") : "")
            }
          />
          <div
            className={
              "box" +
              (button2 !== null ? (button2 ? " box-white" : " box-black") : "")
            }
          />
          <div
            className={
              "box" +
              (button3 !== null ? (button3 ? " box-white" : " box-black") : "")
            }
          />
          <div
            className={
              "box" +
              (button4 !== null ? (button4 ? " box-white" : " box-black") : "")
            }
          />
        </div>

        <button className="link-button" onClick={onButtonClick}>
          ROLL DICE
        </button>
        <p>
          Roll number: {numberOfRolled}
        </p>
      </header>
    </div>
  );
}

export default App;
