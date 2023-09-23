import { useState } from "react"
import styles from "./App.module.css"
import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { TasksList } from "./components/TasksList"

export interface TaskInterface {
  id: number
  content: string
  isFinished: boolean
}

export const App = () => {
  const [tasks, setTasks] = useState<TaskInterface[]>([])

  function appendNewTask(task: string) {
    const newTask: TaskInterface = {
      id: Date.now(),
      content: task,
      isFinished: false,
    }
    const newTasks = [...tasks]
    newTasks.unshift(newTask)

    setTasks(newTasks)
  }

  function deleteTask(taskToDelete: TaskInterface) {
    const newTasks = tasks.filter(task => task.id !== taskToDelete.id)

    setTasks(newTasks)
  }

  function updateIsfinishedTask(taskToUpdate: TaskInterface) {
    const taskToUpdateIndex = tasks.findIndex(
      task => task.id === taskToUpdate.id,
    )
    const newTasks = [...tasks]
    newTasks[taskToUpdateIndex].isFinished = taskToUpdate.isFinished

    setTasks(newTasks)
  }

  return (
    <main className={styles.main}>
      <Header />

      <div className={styles.wrapper}>
        <Form appendNewTask={appendNewTask} />

        <TasksList
          tasks={tasks}
          deleteTask={deleteTask}
          updateIsfinishedTask={updateIsfinishedTask}
        />
      </div>
    </main>
  )
}
