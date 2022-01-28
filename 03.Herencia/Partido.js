import {Largometraje} from './Largometraje.js'

class Partido extends Largometraje {
    constructor(titulo,duracion,equipo){
        //Aquí indicamos que atributos de mi clase padre va a heredar
        super(titulo,duracion)
        this.equipo = equipo
    }
    //Metodo
    getTeam(){
        return this.equipo
    }
}

//EXPORTAMOS NUESTRA PLANTILLA (CÓDIGO)
//Usando la forma definida por ES6
export {Partido}