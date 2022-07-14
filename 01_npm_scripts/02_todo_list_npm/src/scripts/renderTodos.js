import { getItem } from './storage.js';

const listElem = document.querySelector('.list');

// input: nothing
// output: undefined
function delPrevTodos() {
  listElem.innerHTML = '';
}

// render function
// input: array
// output: undefined
export const renderTodos = () => {
  const tasksList = getItem('tasksList') || [];
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ id, text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.dataset.id = id;
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('delete__btn');
      deleteBtn.dataset.id = id;
      listItemElem.append(checkbox, text, deleteBtn);

      return listItemElem;
    });
  delPrevTodos();
  listElem.append(...tasksElems);
};
