import { renderTodos } from './scripts/renderTodos.js';
import { setItem } from './scripts/storage.js';
import { getTasksList } from './scripts/tasksGateway.js';
import { initTodoHandlers } from './scripts/todoList.js';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then((tasksList) => {
    setItem('tasksList', tasksList);
    renderTodos();
  });
  initTodoHandlers();
});

// input: event object
// output: undefined
const storageHandler = (event) => {
  if (event.key !== 'tasksList') {
    return;
  }

  renderTodos();
};

window.addEventListener('storage', storageHandler);
