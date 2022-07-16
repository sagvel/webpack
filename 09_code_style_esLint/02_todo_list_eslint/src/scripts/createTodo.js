import { setItem } from './storage';
import renderTodos from './renderTodos';
import { createTask, getTasksList } from './tasksGateway';

// input: nothing
// output: undefined
const createTodo = () => {
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
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTodos();
    });
};

export default createTodo;
