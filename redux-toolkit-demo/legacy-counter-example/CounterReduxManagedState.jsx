import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../state/features/counter/counterSlice";

const CounterReduxManagedState = () => {
  const getCounter = useSelector((state) => state.counter.value);
  
  const dispatch = useDispatch();

  return (
    <>
      <h2 className="text-success">{getCounter}</h2>
      <button className="btn btn-success" onClick={() => dispatch(increment())}>
        increment
      </button>
      <button
        className="btn btn-danger m-5"
        onClick={() => dispatch(decrement())}>
        decrement
      </button>
    </>
  );
};
export default CounterReduxManagedState;
