const initialState = {
  email: "",
  password: "",
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_LOGIN_CREDENTIALS":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    default:
      return state;
  }
}

export default authReducer;
