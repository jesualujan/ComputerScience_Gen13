//EJEMPLO 2

class Colas{
    constructor(){
        this.collection=[]
    }
    //Métodos Principales de una Cola
    enqueue(element){
        this.collection.push(element)
        return this.collection
    }
    dequeue(){
        return this.collection.shift()
    }
    //peek(){}
    size(){
        return this.collection.length
    }
    print(){
        console.log(this.collection)
    }
    //Métodos Auxiliares de una Cola
    front(){ // trae el peek o el primer elemento, nota peek es más usado en pilas.
        return this.collection[0]
    }
    back(){ // trae el último elemento
        return this.collection[this.collection.length -1]
    }
    isEmpty(){
        return this.collection.length===0
    }
}

//AGREGAR DATOS // O INSTANCIAS A LA CLASE 
const miColaSuperHeroes = new Colas ()
console.log(miColaSuperHeroes.isEmpty());

miColaSuperHeroes.enqueue({nombre:"Batman",Sexo:"M"})
miColaSuperHeroes.enqueue({nombre:"Superman",Sexo:"M"})
miColaSuperHeroes.enqueue({nombre:"Wonder Woman",Sexo:"F"})
miColaSuperHeroes.print()

console.log(miColaSuperHeroes.size())
console.log(miColaSuperHeroes.isEmpty());

miColaSuperHeroes.enqueue({nombre:"Flash",Sexo:"M"})
miColaSuperHeroes.enqueue({nombre:"Linterna Verde",Sexo:"M"})
miColaSuperHeroes.print()
console.log(miColaSuperHeroes.dequeue())
miColaSuperHeroes.print()

//Métodos Auxiliares
console.log(miColaSuperHeroes.front())
miColaSuperHeroes.print()
console.log(miColaSuperHeroes.back())
miColaSuperHeroes.print()