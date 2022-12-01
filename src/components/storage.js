export const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

export const load = (key, initialState = []) => {
  try {
    const serializedState = localStorage.getItem(key);
    return JSON.parse(serializedState) ?? initialState;
  } catch (error) {
    console.error('Get state error: ', error.message);
    return initialState;
  }
};
