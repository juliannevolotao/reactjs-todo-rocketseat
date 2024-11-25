import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { Todo } from "./pages/todo";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Todo />
  </StrictMode>
);
