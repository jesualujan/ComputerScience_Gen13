//EJEMPLO 1 
// VAMOS A TRABAJAR CON CLASES 

class Colas {
    constructor(){
        //vamos a trabajar un arreglo vacío
        this.queue=[]//-> cuando lo dejamos vacío es porque vamos a poblar un arreglo
    }

    //Métodos
    enqueue(element){ //Encolar: agregar un elemento a la cola
        this.queue.push(element)
        return this.queue
    }

    dequeue(){ //Desencolar: retira el primer elemento de la cola 
        return this.queue.shift() //shift() remover el primer valor de un arreglo
    }

    peek(){ //RETORNA EL PRIMER ELEMENTO DE LA COLA, SIN QUITARLO DE LA MISMA
        return this.queue[0]
    }

    size(){
       return this.queue.length
    }

    isEmpty(){
      return this.queue.length === 0
    }

    print(){
      console.log(this.queue)
    }
}

//AGREGAR INSTANCIAS A LA CLASE // AGREGANDO DATOS A NUESTRO ARREGLO
const queue = new Colas ()
console.log(queue.isEmpty()) //TRUE
console.log(queue.enqueue('THE ROCK'))
console.log(queue.isEmpty()) //FALSE
console.log(queue.enqueue('REY MISTERIO'))
console.log(queue.enqueue('JOHN CENA'))
console.log(queue.enqueue('RANDY ORTON'))
console.log(queue)

//SACAR DATOS DE NUESTRO ARREGLO 
console.log(queue.dequeue());
queue.print()

console.log(queue.peek())
queue.print()