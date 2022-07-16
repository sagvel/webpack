import { setItem } from './storage';
import renderTodos from './renderTodos';
import { deleteTask, getTasksList } from './tasksGateway';

// input: event object
// output: undefined
const deleteHandler = (event) => {
  const isDeleteBtn = event.target.classList.contains('delete__btn');

  if (!isDeleteBtn) {
    return;
  }

  const taskId = event.target.dataset.id;
  deleteTask(taskId)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTodos();
    });
};

export default deleteHandler;
