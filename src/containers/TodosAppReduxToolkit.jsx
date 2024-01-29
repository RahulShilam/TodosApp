import React, { useState } from "react";
import "./TodosAppReduxToolkit.scss";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import {
  addAllTasks,
  totalData,
  deleteSelectedTask,
  deleteAllTasks,
} from "../Reducer/todoSlice";

export const TodosAppReduxToolkit = () => {
  const [taskValue, setTaskValue] = useState("");
  console.log(totalData);
  const storedata = useSelector(totalData);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTaskValue(e.target.value);
  };

  const addTasks = (e) => {
    dispatch(addAllTasks(taskValue));
    setTaskValue("");
  };
  return (
    <div className="todos-app">
      <div className="main-body">
        <div className="main-container-body">
          <div className="popup-body">
            <div className="popup-title">Todo App</div>
            <div className="popup-main-elements">
              <div className="popup-elements">
                <div className="text-box-elems">
                  <TextField
                    size="small"
                    id="outlined-basic"
                    label="Enter Todos"
                    variant="outlined"
                    value={taskValue}
                    onChange={handleChange}
                  />
                </div>
                <div className="plus-icon">
                  <button className="add-task-btn" onClick={addTasks}>
                    <AddCircleOutlineIcon />
                  </button>
                </div>
              </div>
              <div style={{ marginTop: "10px" }}>
                {storedata.map((task, index) => (
                  <div className="task-items">
                    <span className="item-align"> {task}</span>
                    <div className="del-icon">
                      <button
                        className="del-task-btn"
                        onClick={() => dispatch(deleteSelectedTask(index))}
                      >
                        <DeleteIcon />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="popup-footer">
                <div className="popup-text">
                  You have {storedata.length} pending tasks
                </div>
                <div className="popup-btn-clear">
                  <Button
                    onClick={() => {
                      dispatch(deleteAllTasks([]));
                    }}
                    size="small"
                    variant="contained"
                  >
                    Clear All
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TodosAppReduxToolkit;
