import { useState } from "react";

const CounterReactManagedState = () => {
  const [getCounter, setCounter] = useState(0);

  function increment() {
    setCounter(getCounter + 1);
  }

  function decrement() {
    setCounter(getCounter - 1);
  }
  return (
    <>
      <h2 className="text-success">{getCounter}</h2>
      <button className="btn btn-success" onClick={increment}>
        increment
      </button>
      <button className="btn btn-danger m-5" onClick={decrement}>
        decrement
      </button>
    </>
  );
};
export default CounterReactManagedState;
