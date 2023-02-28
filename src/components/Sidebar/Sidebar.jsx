import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1648737966282-b193f74a1503?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=393&q=50"
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/8822046?v=4"
        />
        <strong>Vinicius</strong>
        <span>tech lead</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar meu perfil
        </a>
      </footer>
    </aside>
  );
}
