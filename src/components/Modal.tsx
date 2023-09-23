import { motion, AnimatePresence } from "framer-motion"
import styles from "./Modal.module.css"
import { ReactNode } from "react"

interface ModalProps {
  title: string
  children: ReactNode
  isVisible: boolean
}

export const Modal = ({ title, children, isVisible }: ModalProps) => {
  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles.modal}
        >
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={styles.modalCard}
          >
            <div className={styles.modalCardHeader}>{title}</div>
            <div className={styles.modalCardBody}>{children}</div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
