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


//Crear una función que encuentre las letras en un arreglo de números y regrese un nuevo arreglo de letras
// Ejemplo input -> [8,‘e’,7,2,‘a’,‘d’,‘f’,2,3,1,4,3]
// Salida → [‘e’,‘a’,‘d’,‘f’] 

var letras = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t"]

const funcionLetras = (arrayInput,arrayLetras)=>{
    var resultado = []
    for(let i=0; i<arrayInput.length;i++){
        for(let j=0;j<arrayLetras.length;j++){
            if(arrayLetras[i]===arrayInput[j])
            resultado.push(arrayInput[j])
        }
    }
    return resultado
}

const funcionLetrasBruno = (arrayInput)=>{
    var resultado = []
    for(let i=0; i<arrayInput.length;i++){
       
            if(parseInt(arrayInput[i])){

            }
            else{
                resultado.push(arrayInput[i])
            }
        
    }
    return resultado
}

var arrayEjemplo = [8,"e",7,2,"a","d","f",2,3,1,4,3]
var res = funcionLetras(arrayEjemplo,letras)
var res2 = funcionLetrasBruno(arrayEjemplo)
console.log(res)
console.log(res2)
//5.- Crear una clase llamada Contacto con los siguientes datos
// - Nombre
// - Apellidos
// - Telefono
//
// Después crear una clase que sea ListaContactos la cual tendrá dos métodos
// - Agregar un contacto
// - Buscar un contacto por nombre 


//Clase contacto con un constructos que recibe Nombre,apellido y telefono y los inicia como atributos de la clase
class Contacto  {
    constructor(nombre,apellido,telefono){
        this.nombre = nombre,
        this.apellido = apellido,
        this.telefono = telefono
    }

}
//Creo cuatro diferentes contactos de la clase que acabo de crear
var Renecontacto = new Contacto("Rene","Manzano",5435423532)
var Jaircontacto = new Contacto("Jair","Suarez",465465468)
var Dulcecontacto = new Contacto("Dulce","Lopez",646848668468)
var Robertocontacto = new Contacto("Roberto","Perez",684864846)

//Crear la clase de listaContactos que tiene un constructor vacio
class ListaContactos {
    constructor(){
        this.lista = [] //iniciando this.lista como un array vacio
    }
    //metodo agregar que recibe un contacto como parametro y lo que hace es agregar este a this.lista
    agregar(contacto){
        this.lista.push(contacto)
    }
    //metodo buscar que recibe un nombre, recorre la lista de contactos y compara el nombre del contacto con el nombre recibido
    buscar(nombre){
        var listaaux = this.lista
        for (let i=0;i<listaaux.length;i++){
            if(nombre=== listaaux[i].nombre){
                return listaaux[i] // en caso de encontrarse el nombre , regresa el contacto completo
            }
        }
        return "No se encontro el nombre en los contactos" // en caso de no encontrar , regresa el string


    }
}

//Crear una lista de contactos
var contactosDevf = new ListaContactos()
//Agregar los contactos a la lista que acabo de crear
contactosDevf.agregar(Renecontacto)
contactosDevf.agregar(Dulcecontacto)
contactosDevf.agregar(Jaircontacto)
contactosDevf.agregar(Robertocontacto)

//Ejecuto el metodo buscar
console.log(contactosDevf.buscar("Dulce"))