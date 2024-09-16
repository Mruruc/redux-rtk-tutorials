import { useDispatch, useSelector } from "react-redux";
import { setLoginCredentials } from "../state/actions/authActions";

const ReduxManagedStateLoginPage = () => {
  const loginCredential = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  function handleInputChanges(event) {
    const { name, value } = event.target;
    dispatch(setLoginCredentials(name, value));
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    console.log(loginCredential);
  }

  return (
    <div className="row">
      <div className="col-3"></div>
      <form onSubmit={handleFormSubmission} className="col-3">
        <div className="form-group">
          <label htmlFor="email2">Username</label>
          <input
            type="email"
            name="email"
            id="email2"
            value={loginCredential.email}
            onChange={handleInputChanges}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password2">Password</label>
          <input
            type="password"
            name="password"
            id="password2"
            value={loginCredential.password}
            onChange={handleInputChanges}
            className="form-control"
          />
        </div>

        <div>
          <button type="submit" className="btn btn-success">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
export default ReduxManagedStateLoginPage;
