import { PlusCircle } from "@phosphor-icons/react"
import styles from "./Form.module.css"
import { ChangeEvent, FormEvent, useState } from "react"

interface FormProps {
  appendNewTask: (task: string) => void
}

export const Form = ({ ...props }: FormProps) => {
  const [inputTask, setTask] = useState("")

  function handleChangeInputTask(e: ChangeEvent<HTMLInputElement>) {
    setTask(e.target.value)
  }

  function handleAppendNewTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (inputTask.trim().length === 0) return

    props.appendNewTask(inputTask)
    setTask("")
  }

  return (
    <form onSubmit={handleAppendNewTask} className={styles.form}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={inputTask}
        onChange={handleChangeInputTask}
      />
      <button type="submit">
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  )
}
