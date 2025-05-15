import { TodoList } from "../final/webapp/classes.js";
import { Command, CommandExecutor, Commands } from "./webapp/command.js";

globalThis.DOM = {};
const DOM = globalThis.DOM;
document.addEventListener("DOMContentLoaded", () => {
  DOM.todoList = document.getElementById("todo-list");
  DOM.addBtn = document.getElementById("add-btn");
  DOM.todoInput = document.getElementById("todo-input");
  DOM.addBtn.addEventListener("click", (event) => {
    // TO DO
    const cmd = new Command(Commands.ADD);
    CommandExecutor.execute(cmd);
  });
  DOM.todoList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
      //TO DO //
    }
  });
});
