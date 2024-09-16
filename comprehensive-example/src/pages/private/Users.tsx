import { ChangeEvent, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, setFilter } from "../../app/features/users/usersSlice";
import { AppDispatch, RootState } from "../../app/store";
import { filterUsersV2 } from "../../utils/filterUtils";
import { capitalizeFirstLetter } from "../../utils/stringUtils";
import SearchInputComponent from "./components/SearchInputComponent";
import UserComponent from "./components/UserComponent";

const Users = () => {
  const { isLoading, error, users, filters } = useSelector(
    (state: RootState) => state.users
  );

  const dispatch: AppDispatch = useDispatch();

  function handleFilterChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    dispatch(setFilter({ name: name as keyof typeof filters, value }));
  }

  const filteredUsers = useMemo(
    () => filterUsersV2(users, filters),
    [users, filters]
  );

  useEffect(() => {
    dispatch(getUsers("/users"));
  }, [dispatch]);

  return (
    <main className="container ">
      <div className="table-responsive">
        <h1 className="mb-3 text-center">User Management Table</h1>

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

        {!isLoading && !error && (
          <table className="table table-bordered table-hover table-striped table-responsive ">
            <thead className="thead-light">
              <tr>
                {Object.keys(filters).map((key) => {
                  return (
                    <th key={key}>
                      <SearchInputComponent
                        name={key}
                        value={filters[key as keyof typeof filters]}
                        onChange={handleFilterChange}
                        placeholder={`Search ${capitalizeFirstLetter(key)}`}
                      />
                    </th>
                  );
                })}
              </tr>
              <tr className="table-primary ">
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => {
                return <UserComponent key={user.id} {...user} />;
              })}
            </tbody>
          </table>
        )}

        {!isLoading &&
          !error &&
          filteredUsers &&
          filteredUsers.length === 0 && (
            <div className="fs-3 text-warning">
              <p>No users found.</p>
            </div>
          )}
      </div>
    </main>
  );
};
export default Users;
