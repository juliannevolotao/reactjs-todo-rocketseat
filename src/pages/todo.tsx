import React, { useState } from "react";
import styles from "./todo.module.css";
import { PlusCircle } from "@phosphor-icons/react";
import todoLogo from "../assets/Logo.svg";
import { List } from "../components/ListContent/list";

export type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export function Todo() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, text: newTask, completed: false },
      ]);
      setNewTask("");
    }
  };

  const handleToggleCompleted = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleRemoveTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className={styles.container}>
      <section className={styles.content}>
        <header className={styles.mainHeader}>
          <img src={todoLogo} alt="Todo Logo" />
        </header>

        {/* Input container */}
        <div className={styles.buttonContainer}>
          <input
            placeholder="Adicione uma nova tarefa"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={handleAddTask}>
            Criar <PlusCircle size={16} />{" "}
          </button>
        </div>

        {/* List content */}
        <div className={styles.listContainer}>
          <header className={styles.listContainer_header}>
            <h3>
              Tarefas criadas
              <span className={styles.displayValue}> {tasks.length} </span>
            </h3>
            <h3>
              Concluídas
              <span className={styles.displayValue}>
                {" "}
                {tasks.filter((task) => task.completed).length > 0
                  ? `${tasks.filter((task) => task.completed).length} de ${
                      tasks.length
                    }`
                  : "0"}
              </span>
            </h3>
          </header>
          <List
            tasks={tasks}
            handleRemoveTask={handleRemoveTask}
            handleToggleCompleted={handleToggleCompleted}
          />
        </div>
      </section>
    </div>
  );
}

// export default Todo;
