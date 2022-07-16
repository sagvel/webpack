import createTodo from './createTodo';
import deleteHandler from './deleteTodo';
import toggleStatusTodo from './updateTodo';

// input: nothing
// output: undefined
const initTodoHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  const todoListElem = document.querySelector('.list');

  createBtnElem.addEventListener('click', createTodo);
  todoListElem.addEventListener('click', toggleStatusTodo);
  todoListElem.addEventListener('click', deleteHandler);
};

export default initTodoHandlers;
