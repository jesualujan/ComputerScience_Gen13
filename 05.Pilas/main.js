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