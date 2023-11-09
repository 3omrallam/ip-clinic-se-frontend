const deepCopy = (obj) => {
  if (typeof obj !== "object" || obj === null) return obj;

  // create an array or objects to hold the values
  const newObject = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    const value = obj[key];
    // recursive call for nested objects & arrays
    newObject[key] = deepCopy(value);
  }

  return newObject;
};

export default deepCopy;
