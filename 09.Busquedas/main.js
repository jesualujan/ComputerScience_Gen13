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
    let veces = 0
    while (index < size){
        veces++ 
        let elementoPresente = lista[index]
        if (elementoPresente === elementoAbuscar){
            cantidadAparicion++;
            console.log(veces)

            /*if (posicionAparicion){
                posicionAparicion = posicionAparicion+ ", " +index
            }
            else{
                posicionAparicion = index
            }*/ // esto es equivalente al operador terniario de abajo

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



/*BUSQUEDA binaria
    NOta: se requiere que la lista este ordenada para hacer la busqueda
    Entrada:
    1.- Una lista ordenada
    2.-Un elemento a encontrar en la lista
    Salida:
    Si el elemento existe
        si si,retornamos el indice o indices, donde se encontro
        si no, regresamos -1

    PSEUDOCODIGO
    funcion busquedaBinaria(listaOrdenada, elementoAbuscar):
        min = el inicio de la lista (por lo general posicion 0)
        max = largo de la lista -1

        mientras min<= max
            mitad = redondearHaciaAbajo(min+max /2)
            guess = listaOrdenada[mitad]
            si (elementoAbuscar === guess){
                retorna mitad 
            }
            si (elementoAbuscar > guess){
                min= mitad+1
            }
            si (elementoAbuscar < guess){
                max= mitad-1
            }
            retornar -1

        FIN funcion

*/



//arraynumeros.sort((a,b)=>a+b) acomodar lista en caso de que no este acomodada

const busquedaBinaria = (listaOrdenada, elemento)=>{
    let min = 0,
        max = listaOrdenada.length - 1,
        mitad = null,
        guess = null;
    let veces = 0

        while (min <= max){
            veces++
            mitad = Math.floor((min+max)/2)
            guess = listaOrdenada[mitad]
            if (elemento === guess){
                console.log(veces)
                return mitad
            }
            if(elemento > guess){
                min = mitad +1
            }
            if(elemento <guess){
                max = mitad-1
            }

        }
        return -1
}
arraynumeros = [4,7,8,11,15,20,26,31,36,42,45,51,56,58,88,100,140,345,600,700]
console.log("busqueda lineal")
const resultado2 = busquedaLineal(arraynumeros,140)
console.log("busqueda binaria")
const resultadoBinario = busquedaBinaria(arraynumeros,140)

if (resultadoBinario >= 0) console.log(`Si existe tu numero y esta en la posicion ${resultadoBinario}`)
if (resultadoBinario === -1) console.log("NO EXISTE ")
