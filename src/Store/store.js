//import { configureStore } from "@reduxjs/toolkit";
// import { createStore } from "redux";
// import todoReducer from "../Reducer/todoReducer";

// const store = createStore(
//   todoReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Reducer/todoSlice";

export default configureStore({
  reducer: {
    todo: todoReducer,
  },
});
