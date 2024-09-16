import { Provider } from "react-redux";
import store from "./state/store/store";
import CounterReduxManagedState from "./legacy-counter-example/CounterReduxManagedState";
import ReduxManagedStateLoginPage from "./form-based-state-management-example/ReduxManagedStateLoginPage";
import ReduxMangedStateDataFetching from "./data-fetching-example/ReduxMangedStateDataFetching";

const ReduxToolkitDemo = () => {
  return (
    <div className="mt-5 pt-5">
      <h3>Redux Toolkit demo Counter Example</h3>
      <hr />
      <Provider store={store}>
        {/* <CounterReduxManagedState /> */}
        {/*  <ReduxManagedStateLoginPage /> */}
        <ReduxMangedStateDataFetching />
      </Provider>
    </div>
  );
};
export default ReduxToolkitDemo;
