function verificaArray (valor){

    return (Array.isArray([valor])); 
}

let valor = [1,2,3,3]

console.log (verificaarray(valor));


function clonarArray (array){
    const array =[a,b,c,d,e];
    const cloneArray = [... array]

    return (cloneArray);
}



console.log (clonarArray())