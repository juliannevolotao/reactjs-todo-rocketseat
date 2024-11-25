import { Trash, Check } from "@phosphor-icons/react";
import styles from "./list.module.css";

interface ITask {
  id: number;
  completed: boolean;
  text: string;
}
interface Props {
  task: ITask;
  handleToggleCompleted: (id: number) => void;
  handleRemoveTask: (id: number) => void;
}

export function ListItem({
  task,
  handleToggleCompleted,
  handleRemoveTask,
}: Props) {
  return (
    <li
      className={styles.listItem}
      key={task.id}
      style={{
        border: task.completed ? "1px solid transparent" : "",
      }}
    >
      <div className={styles.checkContainer}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => handleToggleCompleted(task.id)}
        />
        {task.completed && (
          <span>
            <Check weight="bold" size={12} />
          </span>
        )}
      </div>
      <p
        className={`${styles.taskText} ${
          task.completed ? styles.completed : ""
        }`}
      >
        {task.text}
      </p>
      <button
        className={styles.removeButton}
        onClick={() => handleRemoveTask(task.id)}
      >
        <Trash size={16} />
      </button>
    </li>
  );
}
