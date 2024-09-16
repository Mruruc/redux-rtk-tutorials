const initialState = {
  isLoading: true,
  error: null,
  users: [],
};

function dataFetchReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_USERS_REQUEST":
      return { ...state, isLoading: true, error: null };
    case "FETCH_USERS_SUCCESS":
      return { ...state, isLoading: false, users: action.payload };
    case "FETCH_USERS_FAILURE":
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}

export default dataFetchReducer;
