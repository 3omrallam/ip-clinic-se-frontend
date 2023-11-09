const localStorage = window.localStorage;
const sessionStorage = window.sessionStorage;

const storageMap = {
  local: localStorage,
  session: sessionStorage,
};

export const setStorageItem = (storageType, key, value) => {
  storageMap[storageType].setItem(key, value);
};

export const getStorageItem = (storageType, key) => {
  return storageMap[storageType].getItem(key);
};

export const deleteStorageItem = (storageType, key) => {
  storageMap[storageType].removeItem(key);
};
