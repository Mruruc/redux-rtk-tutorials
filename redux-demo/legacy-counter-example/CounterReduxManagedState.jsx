import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./state/actions/counterActions";

const CounterReduxManagedState = () => {
  const getCounter = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <h2 className="text-success">{getCounter}</h2>
      <button className="btn btn-success" onClick={()=>dispatch(increment())}>
        increment
      </button>
      <button className="btn btn-danger m-5" onClick={()=>dispatch(decrement())}>
        decrement
      </button>
    </>
  );
};
export default CounterReduxManagedState;
