import React, { useState } from "react";

export default function Input({ setTasks, tasks }) {
  const [task, setTask] = useState("");

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <>
      <div className="col">
        <div className="row m-1 p-3">
          <div className="col col-11 mx-auto">
            <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
              <div className="col">
                <input
                  className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"
                  type="text"
                  placeholder="Add new task"
                  value={task}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-auto px-0 mx-0 mr-2">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleAddTask}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
