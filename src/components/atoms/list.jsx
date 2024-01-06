import React, { useEffect, useState } from "react";
import ListElement from "./listElement";

export default function List({ tasks, setTasks }) {
  const [details, showDetails] = useState(false);

  const handleDelete = (taskName) => {
    console.log(taskName + " deleted");
    const updatedTasks = tasks.filter((task) => task !== taskName);
    setTasks(updatedTasks);
  };
  useEffect(() => {}, [tasks]);
  return (
    <>
      <div className="container m-1 w-25 p-2 rounded mx-auto  shadow homeImg ">
        <button
          className="btn w-100"
          type="button"
          style={{ color: "white" }}
          onClick={() => {
            showDetails(!details);
          }}
        >
          Your Todos
        </button>
        {details && (
          <div>
            {tasks.map((task, index) => (
              <ListElement key={index} name={task} onDelete={handleDelete} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
