const BASE_URL = 'https://62cbcd06a0800529309ee109.mockapi.io/api/v1/tasks';

export const getTasksList = () => {
  return fetch(BASE_URL).then(response => response.json());
};

export const createTask = taskData => {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  });
};

export const updateTask = (taskId, updatesTaskData) => {
  return fetch(`${BASE_URL}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(updatesTaskData),
  });
};

export const deleteTask = taskId => {
  return fetch(`${BASE_URL}/${taskId}`, {
    method: 'DELETE',
  });
};
