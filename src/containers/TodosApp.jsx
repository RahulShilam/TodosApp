import React, { useState, useEffect } from "react";
import "./TodosApp.scss";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodosApp = () => {
  const [taskValue, setTaskValue] = useState("");
  const [todotask, setTodoTask] = useState([]);

  const handleChange = (e) => {
    // console.log(e.target.value);
    setTaskValue(e.target.value);
  };

  useEffect(() => {
    setTaskValue("");
    console.table("aray", todotask);
  }, [todotask]);

  const deleteSingleTask = (currentIndex) => {
    console.log("index and value", currentIndex, todotask[currentIndex]);
    let formmatedArray = [...todotask];
    formmatedArray.splice(currentIndex, 1);
    setTodoTask(formmatedArray);
  };

  const addTasks = (e) => {
    let x = [taskValue];

    setTodoTask([...todotask, ...x]);
    console.table("add method", taskValue);
  };
  // const tasks = [
  //   {
  //     taskname: "Eat Your Food",
  //   },
  //   {
  //     taskname: "Read 5 Pages",
  //   },
  //   {
  //     taskname: "Workout 90mins",
  //   },
  //   {
  //     taskname: "What did you fail today?",
  //   },
  // ];
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
                  {/* <input
                    style={{ width: "95%" }}
                    type="text"
                    name="todos"
                    value="Add your New Todo"
                  ></input> */}
                </div>
                <div className="plus-icon">
                  <button className="add-task-btn" onClick={addTasks}>
                    <AddCircleOutlineIcon />
                  </button>
                </div>
              </div>
              <div style={{ marginTop: "10px" }}>
                {todotask.map((task, index) => (
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
                {/* {tasks.map((task) => (
                  <div className="task-items">
                    <span className="item-align"> {task.taskname}</span>
                    <div className="del-icon">
                      <DeleteIcon />
                    </div>
                  </div>
                ))} */}
              </div>
              <div className="popup-footer">
                <div className="popup-text">
                  You have {todotask.length} pending tasks
                </div>
                <div className="popup-btn-clear">
                  <Button
                    onClick={() => {
                      setTodoTask([]);
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

export default TodosApp;
