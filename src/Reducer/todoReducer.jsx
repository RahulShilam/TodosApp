// // Define an initial state value for the app
const initialState = {
  //   taskValue: "",
  //   todoTasks: [],
  data: [],
};
// // Create a "reducer" function that determines what the new state
// // should be when something happens in the app
const todoReducer = (state = initialState, action) => {
  // Reducers usually look at the type of action that happened
  // to decide how to update the state
  switch (action.type) {
    // case "UPDATE_DATA":
    case "ADD_ALL_TASKS":
      return { ...state, data: action.payload };
    // case "DELETE_ALL_TASKS":
    //   return { ...state, data: action.payload };
    default:
      // If the reducer doesn't care about this action type,
      // return the existing state unchanged
      return state;
  }
};

export default todoReducer;
