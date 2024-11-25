import { ClipboardText } from "@phosphor-icons/react";

import styles from "./emptyList.module.css";

export function EmptyList() {
  return (
    <div className={styles.container}>
      <ClipboardText size={56} />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
