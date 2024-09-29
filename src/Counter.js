import { useState } from "react";

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  console.log(initialCount);

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  const decrementCount = () => {
    setCount((prev) => prev - 1);
  };

  const restartCount = () => {
    setCount(0);
  };

  const changeSign = () => {
    setCount((prev) => prev * -1);
  };
  return (
    <div>
      <h2 data-testid="count">Count: {count}</h2>
      <div
        className="buttonContainer"
        style={{
          display: "flex",
          flexDirection: "column",
          justyfyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          onClick={incrementCount}
          style={{ width: "100px", margin: "10px" }}
        >
          Increment
        </button>
        <button
          onClick={decrementCount}
          style={{ width: "100px", margin: "10px" }}
        >
          Decrement
        </button>
        <button
          onClick={restartCount}
          style={{ width: "100px", margin: "10px" }}
        >
          Restart
        </button>
        <button onClick={changeSign} style={{ width: "100px", margin: "10px" }}>
          Switch Sign
        </button>
      </div>
    </div>
  );
};

export default Counter;
