const nPrimeirosElementos = (arr, n) => {
  if (!n) {
    console.log(arr[0]);
    return arr[0];
  } else {
    const arr2 = [];
    for (i = 0; i < n; i += 1) {
      arr2.push(arr[i]);
    }
    console.log(arr2);
    return arr2;
  }
};

const arr = [1, 2, 3, 4];

const primeirosElementos = nPrimeirosElementos(arr, 2);

console.log(primeirosElementos);