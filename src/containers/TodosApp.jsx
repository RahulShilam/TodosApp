import React, { useState } from "react";
import "./TodosApp.scss";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { connect } from "react-redux";
import { addAllTasks } from "../Actions/Actions";

const TodosApp = ({ data, addAllTasks }) => {
  const [taskValue, setTaskValue] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setTaskValue(e.target.value);
  };

  const deleteSingleTask = (currentIndex) => {
    let formmatedArray = [...data];
    formmatedArray.splice(currentIndex, 1);
    // setTodoTask(formmatedArray);
    addAllTasks(formmatedArray);
  };

  const addTasks = (e) => {
    let x = [taskValue];
    // setTodoTask([...todotask, ...x]);
    // addAllTasks([...todotask, ...x]);
    addAllTasks([...data, ...x]);
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
                {data.map((task, index) => (
                  <div className="task-items">
                    <span className="item-align"> {task}</span>
                    <div className="del-icon">
                      <button
                        className="del-task-btn"
                        onClick={() => deleteSingleTask(index)}
                      >
                        <DeleteIcon />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="popup-footer">
                <div className="popup-text">
                  You have {data.length} pending tasks
                </div>
                <div className="popup-btn-clear">
                  <Button
                    onClick={() => {
                      addAllTasks([]);
                      // setTodoTask([]);
                      //deleteAllTasks([]);
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

// Map Redux state to component props
const mapStateToProps = (state) => ({
  data: state.data,
});

// Map Redux actions to component props
const mapDispatchToProps = {
  addAllTasks,
  // deleteAllTasks,
};
export default connect(mapStateToProps, mapDispatchToProps)(TodosApp);
