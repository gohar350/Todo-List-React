import React, { useState } from "react";
import Profile from "../atoms/profile";
import "../../assets/css/style.css";
import Input from "../atoms/input";
import List from "../atoms/list";
export default function Home() {
  const [tasks, setTasks] = useState([]);
  return (
    <>
      <div className="homeImg">
        <Profile />
        <Input setTasks={setTasks} tasks={tasks} />
        <List tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  );
}
