import { useState } from "react";
//import "./counter.css";

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
      <h1 data-testid="count">Count: {count}</h1>
      <div className="buttonContainer">
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
        <button onClick={restartCount}>Restart</button>
        <button onClick={changeSign}>Switch Sign</button>
      </div>
    </div>
  );
};

export default Counter;
