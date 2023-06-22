function clonarArray(array) {
  const cloneArray = [...array];

  return cloneArray;
}

const arr = [1, 2, 3];

console.log("array original:", arr);
console.log("array cópia:", clonarArray(arr));
