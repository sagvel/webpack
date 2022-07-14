import { createTodo } from './createTodo.js';
import { deleteHandler } from './deleteTodo.js';
import { toggleStatusTodo } from './updateTodo.js';

// input: nothing
// output: undefined
export const initTodoHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  const todoListElem = document.querySelector('.list');

  createBtnElem.addEventListener('click', createTodo);
  todoListElem.addEventListener('click', toggleStatusTodo);
  todoListElem.addEventListener('click', deleteHandler);
};
