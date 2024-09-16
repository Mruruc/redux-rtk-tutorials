import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsersFailure,
  fetchUsersRequest,
  fetchUsersSuccess,
} from "../state/actions/dataFetchActions";

const URI = "https://jsonplaceholder.typicode.com/users";

const ReduxMangedStateDataFetching = () => {
  const { isLoading, error, users } = useSelector((state) => state.dataFetch);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUsers = async () => {
      dispatch(fetchUsersRequest());
      fetch(URI)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          dispatch(fetchUsersFailure("While fetching data error occurred!"));
        })
        .then((result) => {
          dispatch(fetchUsersSuccess(result));
        })
        .catch((error) => {
          dispatch(fetchUsersFailure(error.message));
        });
    };
    getUsers();
  }, [dispatch]);
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
            users.map((user) => {
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
export default ReduxMangedStateDataFetching;
