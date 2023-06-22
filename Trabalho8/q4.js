const funcaoNUltimosElementos = (arr, nUltimosElementos) => {
  if (!nUltimosElementos) {
    const ultimoElemento = [...arr].pop();

    console.log(ultimoElemento);
    return ultimoElemento;
  } else {
    const ultimosElementos = [];
    const arrCopy = [...arr];
    for (i = 0; i < nUltimosElementos; ++i) {
      ultimosElementos.push(arrCopy.pop());
    }
    console.log(ultimosElementos);
    return ultimosElementos;
  }
};

const arr = [1, 2, 3, 4];

const primeirosElementos = funcaoNUltimosElementos(arr, 2);

console.log(primeirosElementos);
