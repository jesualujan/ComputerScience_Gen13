/* Busqueda lineal
Este algoritmo recibe como argumentos

Entrada: 
    1)Lista con elementos
    2)Elemento a buscar
Salida:
    Si encuentra el valor, retorna la posición
    Si no encuentra el elemento, retorna -1

    PSEUDOCODIGO

    funcion BusquedaLineal (lista, elemento)
        tamañoLista = se halla el tamaño de la lista
        contador = indice desde donde vamos a iterar

        mientras contador < tamaño Lista:
            si lista[contador] == elemento
                si si REGRESA EL INDICE
                si no REGRESA -1
        FIN funcion
*/
const busquedaLineal = (lista, elementoAbuscar)=>{
    const size = lista.length;
    let index = 0;
    let cantidadAparicion = 0
    let posicionAparicion = ""
    while (index < size){
        let elementoPresente = lista[index]
        if (elementoPresente === elementoAbuscar){
            cantidadAparicion++;
            posicionAparicion = posicionAparicion ? posicionAparicion+", "+index:index
            
        }
        index++


    }
    if (cantidadAparicion >0){
        return {
            numero_apariciones:cantidadAparicion,
            posiciones_encontradas: posicionAparicion
        }
    }
    return "no existe"
    


}

const myList = [10,15,16,18,99,4,46,456,44,2,16,33,666,8,9,46,16,11,7,5,55,494,46,478]

const resultado = busquedaLineal(myList,6666)

if(resultado.numero_apariciones>0){
    console.log(`Si existe tu numero, aparece ${resultado.numero_apariciones} veces, y esta en las posiciones: ${resultado.posiciones_encontradas}`)
}
if (resultado === "no existe"){

    console.log(`Tu número ${resultado}`)
}





