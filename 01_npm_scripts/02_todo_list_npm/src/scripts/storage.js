// input: string, array
// output: undefined
export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// input: string
// output: array || undefined
export const getItem = key => JSON.parse(localStorage.getItem(key));
