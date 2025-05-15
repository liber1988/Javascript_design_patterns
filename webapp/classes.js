import { observerMixin } from "./mixin.js";
export class TodoItem {
  constructor(text) {
    this.text = text;
  }
  equals(other) {
    //Value Object pattern
    return this.text == other.text;
  }
}

export class TodoList {
  // Canditate to Singleton
  #data = new Set();
  get items() {
    return this.#data;
  }
  static instance = undefined;
  static {
    this.instance = new ToDoList();
  }
  static getInstance() {
    return this.instance;
  }
  constructor() {
    if (ToDoList.instance) {
      throw new Error("Use Todo Please getibstance to access the list");
    }
  }
  //List behavior
  add(item) {
    const array = Array.from(this.#data);
    const todoExist = Array.filter((t) => t.equals(item).length > 0);
    if (!todoExist) {
      this.#data.add(item);
      this.notify();
    }
  }
  delete(todo_text) {
    const array = Array.from(this.#data);
    // Check for errors
    const todoToDelete = Array.filter((t) => t.text == todo_text)[0];
    this.#data.delete(todoToDelete);
  }
  find(todo_text) {
    const array = Array.from(this.#data);
    return Array.find((t) => t.text == todo_text);
  }
  replaceList(item) {
    this.#data = list;
  }
}

Object.assign(ToDoList.prototype, observerMixin);
