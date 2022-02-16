

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

function metodoSeleccion(lista){
    let i,j,min;
    let operaciones = 0;
    for(i=0;i<lista.length;i++){
        min =i
        for(j= i+1; j<lista.length; j++){
            if(lista[j]<lista[min]){
                operaciones++
                min = j
            }}
            cambiar(i,min,lista)
        }
        return [
            lista,
            operaciones
        ]


    }
    let numeros2 =[54,2,656,34,656,87,4,39,99,66,233,54,24,32,4,987,6,31,40]
    let numerosOrdenados2 = metodoSeleccion(numeros2)
    console.log(numerosOrdenados2[0])
    console.log(numerosOrdenados2[1])

    function mergeSort(unsortedArray){
        //Si mi arreglo es solo un elemento o 0 elementos, lo regreso porque no hay nada que arreglar
        if(unsortedArray.length <=1){
            return unsortedArray
        }
        //Hallamos el tamaño del arreglo
        const size = unsortedArray.length
        
        // Hallamos la mitad del arreglo
        const middle = Math.floor(size/2)
        
        //Obtenemos las mitades derecha e izquierda
        const left = unsortedArray.slice(0,middle)
        const right = unsortedArray.slice(middle)

        //Dividimos hasta llegar a uno o tener un arreglo ordenado
        const sortedLeft = mergeSort(left)
        const sortedRight = mergeSort(right)
        let contador = 0
        return merge(sortedLeft,sortedRight,contador)

    }
    
    function merge(left,right,contador){
        contador++
        let resultArray=[],
        leftIndex=0,
        rightIndex=0
        //Agregamos los valores de cada arreglo dentro de resultArray en orden
        while(leftIndex< left.length && rightIndex < right.length){
            if(left[leftIndex]<right[rightIndex]){
                resultArray.push(left[leftIndex])
                leftIndex++ //movemos el indice hacia adelante del arreglo izquierdo 
            }else{
                resultArray.push(right[rightIndex])
                rightIndex++ //movemos el indice hacia adelante del arreglo derecho
            }

        }
        console.log(contador)
        //concatenar los excedentes.Si concatenamos arreglos vacios, no se veran reflejados
        const final = resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
        return final



    }

    let numeros3 =[54,2,656,34,656,87,4,39,99,66,233,54,24,32,4,987,6,31,40]
    let numerosOrdenados3 = mergeSort(numeros3)
    console.log(numerosOrdenados3)

