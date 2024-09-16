import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../state/features/api/dataFetchSlice";

const URI = "https://jsonplaceholder.typicode.com/users";

const ReduxMangedStateDataFetching = () => {
  const { isLoading, error, users } = useSelector((state) => state.dataFetch);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers(URI));
  }, [dispatch]);

  
  return (
    <div className="container">
      {isLoading && (
        <div className="fs-3 text-info">
          <p>Loading...</p>
        </div>
      )}
      {error && (
        <div className="fs-3 text-danger">
          <p>{error}</p>
        </div>
      )}
      {!isLoading && !error && users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {!isLoading && !error && users.length === 0 && (
        <div className="fs-3 text-warning">
          <p>No users found.</p>
        </div>
      )}
    </div>
  );
};
export default ReduxMangedStateDataFetching;
