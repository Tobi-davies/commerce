const INITIAL_STATE = {
  currntUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currntUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
