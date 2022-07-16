import { setItem, getItem } from './storage';
import renderTodos from './renderTodos';
import { getTasksList, updateTask } from './tasksGateway';

// input: event object
// output: undefined
const toggleStatusTodo = (event) => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');

  if (!isCheckbox) {
    return;
  }

  const todoList = getItem('tasksList');
  const done = event.target.checked;
  const taskId = event.target.dataset.id;
  const { text, createDate } = todoList.find((task) => task.id === taskId);
  const updatedTask = {
    text,
    done,
    createDate,
    finishDate: done ? new Date().toISOString() : null,
  };

  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTodos();
    });
};

export default toggleStatusTodo;
