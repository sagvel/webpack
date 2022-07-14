import { setItem } from './storage.js';
import { renderTodos } from './renderTodos.js';
import { createTask, getTasksList } from './tasksGateway.js';

// input: nothing
// output: undefined
export const createTodo = () => {
  const inputElem = document.querySelector('.task-input');

  const text = inputElem.value;

  if (!text) {
    return;
  }

  inputElem.value = '';

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random().toString(),
  };

  createTask(newTask)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTodos();
    });
};
