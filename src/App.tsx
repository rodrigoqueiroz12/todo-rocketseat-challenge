import { useState } from "react"
import styles from "./App.module.css"
import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { TasksList } from "./components/TasksList"
import { Modal } from "./components/Modal"
import { Button } from "./components/Button"

export interface TaskInterface {
  id: number
  content: string
  isFinished: boolean
}

export const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [taskToDelete, setTaskToDelete] = useState<TaskInterface | null>(null)
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
    setTaskToDelete(taskToDelete)
    setIsModalVisible(true)
  }

  function handleDeleteTask() {
    if (!taskToDelete) return

    const newTasks = tasks.filter(task => task.id !== taskToDelete.id)
    setTasks(newTasks)
    setIsModalVisible(false)
    setTaskToDelete(null)
  }

  function updateIsfinishedTask(taskToUpdate: TaskInterface) {
    const taskToUpdateIndex = tasks.findIndex(
      task => task.id === taskToUpdate.id,
    )
    const newTasks = [...tasks]
    newTasks[taskToUpdateIndex].isFinished = taskToUpdate.isFinished

    setTasks(newTasks)
  }

  function handleCloseModal() {
    setIsModalVisible(false)
  }

  return (
    <>
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

      <Modal title="Confirmar ação" isVisible={isModalVisible}>
        <p>Tem certeza que deseja excluir esta tarefa?</p>

        <div className={styles.modalActions}>
          <Button type="button" variant="secondary" onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button type="button" variant="danger" onClick={handleDeleteTask}>
            Excluir
          </Button>
        </div>
      </Modal>
    </>
  )
}
