import { useState } from "react";
import "./App.css";
function App() {
  let [score, setScore] = useState(76);
  let [wicket, setWicket] = useState(2);
  let [overs, setOvers] = useState(8);
  let [decimal, setDecimal] = useState(0.2);
  let showWinner = false;

  let addOne = () => {
    if (score > 100) {
      showWinner = true;
      return;
    }
    setScore(score + 1);
  };
  let addFour = () => {
    if (score > 100) {
      showWinner = true;
      return;
    }
    setScore(score + 4);
  };
  let addSix = () => {
    if (score > 100) {
      showWinner = true;
      return;
    }
    setScore(score + 6);
  };
  let addWick = () => {
    if (wicket == 10 || score > 100) {
      return;
    }
    setWicket(wicket + 1);
  };
  let addBall = () => {
    if (score > 100) {
      return;
    }
    if (decimal == 0.0 || decimal <= 0.4) {
      setDecimal(decimal + 0.1);
    } else if (decimal == 0.5) {
      setOvers(overs + 1);
      setDecimal((decimal = 0.0));
    }
  };

  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score: <h1 className="scoreCount">{score}</h1>
        </div>
        <div>
          Wicket: <h1 className="wicketCount">{wicket}</h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {overs + decimal}
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={addOne}>
          Add 1
        </button>
        <button className="addScore4" onClick={addFour}>
          Add 4
        </button>
        <button className="addScore6" onClick={addSix}>
          Add 6
        </button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={addWick}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={addBall}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
      <h1 className={showWinner ? "status" : "hide"}>India Won</h1>
    </div>
  );
}

export default App;
