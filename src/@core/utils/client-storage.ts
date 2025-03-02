function get(key: string) {
  const localItem = localStorage.getItem(key);
  return localItem;
}

function set(key: string, value: string) {
  localStorage.setItem(key, value);
}

function remove(key: string) {
  localStorage.removeItem(key);
}

function clear() {
  localStorage.clear();
}

export const clientStorage = {
  get,
  set,
  remove,
  clear,
};
