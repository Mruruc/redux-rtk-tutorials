import { Provider } from "react-redux";
import ReactManagedStateLoginPage from "./form-based-state-management-example/ReactManagedStateLoginPage";
import ReduxManagedStateLoginPage from "./form-based-state-management-example/ReduxManagedStateLoginPage";
import store from "./state/store/store";
import ReactMangedStateDataFetching from "./data-fetching-example/ReactMangedStateDataFetching";
import ReduxMangedStateDataFetching from "./data-fetching-example/ReduxMangedStateDataFetching";

const ReduxDemo = () => {
  return (
    <div className="mt-5 pt-5">
      <h3>Redux demo Counter Example</h3>
      {/*  <CounterReactManagedState /> */}
      {/* <ReactManagedStateLoginPage /> */}
      <ReactMangedStateDataFetching />
      <hr />
      <Provider store={store}>
        {/*   <CounterReduxManagedState /> */}
       {/*  <ReduxManagedStateLoginPage /> */}
       <ReduxMangedStateDataFetching />
      </Provider>
    </div>
  );
};
export default ReduxDemo;
