import renderTodos from './scripts/renderTodos';
import { setItem } from './scripts/storage';
import { getTasksList } from './scripts/tasksGateway';
import initTodoHandlers from './scripts/todoList';
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
