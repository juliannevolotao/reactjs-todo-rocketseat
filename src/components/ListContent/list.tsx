import styles from "./list.module.css";
import type { Task } from "../../pages/todo";
import { ListItem } from "./listItem";
import { EmptyList } from "../EmptyList/emptyList";

interface Props {
  tasks: Task[];
  handleRemoveTask: (id: number) => void;
  handleToggleCompleted: (id: number) => void;
}
export function List({
  tasks,
  handleToggleCompleted,
  handleRemoveTask,
}: Props) {
  return (
    <ul className={styles.listContainer}>
      {tasks.length === 0 && <EmptyList />}
      {tasks.length > 0 &&
        tasks.map((task: Task) => (
          <ListItem
            key={task.id}
            task={task}
            handleToggleCompleted={handleToggleCompleted}
            handleRemoveTask={handleRemoveTask}
          />
        ))}
    </ul>
  );
}
