import { renderTodos } from './renderTodos.js';
import { setItem } from './storage.js';
import { getTasksList } from './tasksGateway.js';
import { initTodoHandlers } from './todoList.js';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then(tasksList => {
    setItem('tasksList', tasksList);
    renderTodos();
  });
  initTodoHandlers();
});

// input: event object
// output: undefined
const storageHandler = event => {
  if (event.key !== 'tasksList') {
    return;
  }

  renderTodos();
};

window.addEventListener('storage', storageHandler);
