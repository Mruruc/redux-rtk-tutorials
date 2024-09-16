import { useState } from "react";

const ReactManagedStateLoginPage = () => {
  const [getLoginCredential, setLoginCredential] = useState({
    email: "",
    password: "",
  });

  function handleInputChanges(event) {
    const { name, value } = event.target;
    setLoginCredential((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    console.log(getLoginCredential);
  }

  return (
    <div className="row">
      <div className="col-3"></div>
      <form onSubmit={handleFormSubmission} className="col-3">
        <div className="form-group">
          <label htmlFor="email">Username</label>
          <input
            type="email"
            name="email"
            id="email"
            value={getLoginCredential.email}
            onChange={handleInputChanges}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={getLoginCredential.password}
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
export default ReactManagedStateLoginPage;
