import { setItem } from './storage.js';
import { renderTodos } from './renderTodos.js';
import { deleteTask, getTasksList } from './tasksGateway.js';

// input: event object
// output: undefined
export const deleteHandler = (event) => {
  const isDeleteBtn = event.target.classList.contains('delete__btn');

  if (!isDeleteBtn) {
    return;
  }

  const taskId = event.target.dataset.id;
  console.log(event.target);
  deleteTask(taskId)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTodos();
    });
};
