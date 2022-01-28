import {Largometraje} from './Largometraje'

class Pelicula extends Largometraje{
    constructor(titulo, duracion, genero) {
     //Aquí vamos a indicar que atributos de mi clase padre se va a heredar 
     super(titulo,duracion)
     this.genero=genero
    }
    //Metodos
    getGender(){
        return this.genero
    }
}

export {Pelicula}