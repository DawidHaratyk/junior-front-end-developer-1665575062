import React from 'react'
import { useTasks } from '../../contexts/TasksContext'
import Task from '../Task/Task'

function TasksList() {
  const { tasks } = useTasks()

  const tasksList = tasks.map((task, key) => <Task index={key} {...task} />)

  return <>{tasksList}</>
}

export default TasksList
