import { Check, Trash } from "@phosphor-icons/react"
import styles from "./Task.module.css"
import { TaskInterface } from "../App"
import { motion } from "framer-motion"

interface TaskProps {
  task: TaskInterface
  changeTaskStatus?: (task: TaskInterface) => void
  deleteTask: (task: TaskInterface) => void
  updateIsfinishedTask: (task: TaskInterface) => void
}

export const Task = ({ ...props }: TaskProps) => {
  function handleDeleteTask() {
    props.deleteTask(props.task)
  }

  function handleUpdateIsfinishedTask() {
    props.updateIsfinishedTask({
      ...props.task,
      isFinished: !props.task.isFinished,
    })
  }

  return (
    <motion.li
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={styles.task}
    >
      <div className={styles.taskStatus}>
        <label htmlFor={`finishedTaskInput-${props.task.id}`}>
          <span>
            <Check size={10} />
          </span>
        </label>
        <input
          type="checkbox"
          id={`finishedTaskInput-${props.task.id}`}
          checked={props.task.isFinished}
          onChange={handleUpdateIsfinishedTask}
        />
      </div>

      <textarea disabled readOnly value={props.task.content}></textarea>

      <button type="button" onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </motion.li>
  )
}
