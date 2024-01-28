// import { createStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import todoReducer from "../Reducer/todoReducer";

const store = createStore(
  todoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
// import { configureStore } from "@reduxjs/toolkit";
// // // import counterReducer from "../Reducer/counterSlice";

// export default configureStore({
//   reducer: {
//     todoReducer,
//   },
// });
