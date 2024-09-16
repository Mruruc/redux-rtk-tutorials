import { useEffect, useState } from "react";

const URI = "https://jsonplaceholder.typicode.com/users";

const ReactMangedStateDataFetching = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [getUsers, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      fetch(URI)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          setError("While fetching data error occurred!");
        })
        .then((result) => {
          setUsers(result);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setIsLoading(false);
        });
    };
    getUsers();
  }, []);
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>name</th>
            <th>email</th>
            <th>phone</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr className="fs-3 text-info">Loading ...</tr>
          ) : (
            getUsers.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      {error && <h4 className="text-danger">{error}</h4>}
    </div>
  );
};
export default ReactMangedStateDataFetching;
