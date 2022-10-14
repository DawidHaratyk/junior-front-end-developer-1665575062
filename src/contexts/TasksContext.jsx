import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { tasksData } from "../data/data";

const TasksContext = createContext(null);

export const TasksProvider = ({ children }) => {
  const activeTaskIndex = tasksData.findIndex(
    (task) => task.status === "active"
  );

  const [currentTaskIndex, setCurrentTaskIndex] = useState(activeTaskIndex);
  const [tasks, setTasks] = useState(tasksData);

  return (
    <TasksContext.Provider
      value={{ currentTaskIndex, setCurrentTaskIndex, tasks, setTasks }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => {
  const tasksContext = useContext(TasksContext);

  if (!tasksContext) {
    throw new Error("useTasks must be use inside TasksProvider!");
  }

  return tasksContext;
};
