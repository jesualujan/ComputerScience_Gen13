//Implementacion de una pila usando clases

class Pila{
    constructor(){
        this.colleccion = [];
        this.contador = 0
    }
    apilar(nuevoElemento){ //Añade un elemento hasta la ultima posicion
        this.colleccion.push(nuevoElemento);
        this.contador++;
        return this.contador;
    }
    borrar(){//Borra el ultimo elemento de la pila LAST IN FIRST OUT 
        var elementoBorrado = this.colleccion.pop();
        this.contador--;
        return elementoBorrado
    }
    longitud(){
        return this.contador //Podriamos usar this.colleccion.length
    }
    peek(){//Ver el ultimo elemento de mi pila
        if(this.longitud()===0) return null

        return this.colleccion[this.contador -1]
    }
    estaVacia(){
        if(this.longitud()===0) return true
        return false
    }

}

//Creando objeto de clase Pila

const pilaAlumnos = new Pila();
console.log(pilaAlumnos)
//Apilando alumnos en pilaAlumnos
console.log(pilaAlumnos.apilar("Jair"));
console.log(pilaAlumnos.apilar("Liliana"));
console.log(pilaAlumnos)

//Desapilando alumnos

console.log(pilaAlumnos.borrar())
console.log(pilaAlumnos)

console.log(pilaAlumnos.longitud())
console.log(pilaAlumnos.apilar("Julieta"))
console.log(pilaAlumnos.peek())
//  Ciclo para borrar TODOS los alumnos
console.log(pilaAlumnos.estaVacia())
for (let i=0; i<=pilaAlumnos.longitud(); i++){

    pilaAlumnos.borrar()
}

console.log(pilaAlumnos.estaVacia())


const miFuncion = (pila,numero)=>{
    if(pila.longitud() < numero){
        return "Elige un valor menor"
    }
    if(pila.longitud() !== numero){
        pila.borrar();
        return miFuncion(pila,numero)
    }
    return pila

}
var primerArray = ["Jair", "Rene", "Jesua", "Ernesto", "Liliana","Dulce","Carlos","Juan"]

const pilaNombres = new Pila();

for(let i=0;i<primerArray.length;i++){
    pilaNombres.apilar(primerArray[i])
}
console.log(miFuncion(pilaNombres,10))

// 2.- Escribe una función “reemplazar” que tenga como parámetros una pila de elementos, y dos valores también de tipo Number “nuevo” y “viejo”, de forma que si el segundo valor aparece en algún lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.
// Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
// Salida: [3,2,3,4,6,8,1,7]
// 3.- Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios
// pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo
// camino. Muestre el camino recorrido tanto de ida como de vuelta.
// Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
// Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen

const remplazar = (pila,numero1,numero2)=>{
    for(let i=0; i<pila.longitud();i++){
        if(pila.peek()===numero2){
            pila.borrar();
            pila.apilar(numero1)
            return pila
        }
        else{
            pila.borrar()
        }
    }

}

var segundoArray = [43,12,4,8,10,3,1,65,30,6,47]

const pilaNumeros = new Pila();

for(let i=0;i<segundoArray.length;i++){
    pilaNumeros.apilar(segundoArray[i])
}
console.log(remplazar(pilaNumeros,5000,1))
//resultado esperado [[43,12,4,8,10,3,5000])


const pueblosFuncion = (pilaP)=>{
    const pueblosInvertidos = new Pila();
    const longitudFor = pilaP.longitud()
    for(let i=0;i<longitudFor;i++){
        let puebloBorrado = pilaP.borrar()
        pueblosInvertidos.apilar(puebloBorrado)
    }
    return pueblosInvertidos
}
var tercerArray = ["CDMX","Puebla","Veracruz","Tabasco","Chiapas"]
const pilaPueblos = new Pila();
for(let i=0;i<tercerArray.length;i++){
    pilaPueblos.apilar(tercerArray[i])
}
console.log(pilaPueblos)
console.log("Despues de invertir")
console.log(pueblosFuncion(pilaPueblos))