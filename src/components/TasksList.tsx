import { motion, AnimatePresence } from "framer-motion"
import styles from "./TasksList.module.css"
import { Task } from "./Task"
import { TaskInterface } from "../App"

interface TasksListProps {
  tasks: TaskInterface[]
  deleteTask: (task: TaskInterface) => void
  updateIsfinishedTask: (task: TaskInterface) => void
}

export const TasksList = ({ ...props }: TasksListProps) => {
  const isTasksNotEmpty = props.tasks.length > 0
  const tasksQuantity = props.tasks.length
  const finishedTasksQuantity = props.tasks.filter(
    task => task.isFinished,
  ).length

  return (
    <section className={styles.tasksContainer}>
      <div className={styles.tasksHeader}>
        <p className={styles.created}>
          Tarefas criadas
          <span>{tasksQuantity}</span>
        </p>
        <p className={styles.finished}>
          Concluídas
          <span>
            {finishedTasksQuantity > 0
              ? `${finishedTasksQuantity} de ${tasksQuantity}`
              : finishedTasksQuantity}
          </span>
        </p>
      </div>
      <AnimatePresence>
        {isTasksNotEmpty ? (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={styles.tasksList}
          >
            <AnimatePresence>
              {props.tasks.map(task => {
                return (
                  <Task
                    key={task.id}
                    task={task}
                    deleteTask={props.deleteTask}
                    updateIsfinishedTask={props.updateIsfinishedTask}
                  />
                )
              })}
            </AnimatePresence>
          </motion.ul>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={styles.withoutTasksFeedback}
          >
            <img src="/clipboard.png" />
            <p>
              <b>Você ainda não tem tarefas cadastradas</b>
              <br />
              Crie tarefas e organize seus itens a fazer
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
