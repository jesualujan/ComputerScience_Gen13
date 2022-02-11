

//Metodo de la Burbuja para ordenar datos

function cambiar(indiceA,indiceB,arreglo){
    const temp = arreglo[indiceA]
    arreglo[indiceA]= arreglo[indiceB]
    arreglo[indiceB]= temp
    return arreglo
}

function Burbuja(arreglo){
    let operaciones = 0
    let longitud = arreglo.length
    for(let i=0; i<arreglo.length;i++){
        for(let j=0; j<longitud;j++){
            if(arreglo[j]>arreglo[j+1]){
                cambiar(j,j+1,arreglo)
            }
            operaciones++
        }
        longitud--
    }
    return {
        ordenado:arreglo,
        opearacionenum:operaciones
    }

}

let numeros =[54,2,656,34,656,87,4,39,99,66,233,54,24,32,4,987,6,31,40]
let numerosOrdenados = Burbuja(numeros)
console.log(numerosOrdenados.ordenado)
console.log(numerosOrdenados.opearacionenum)