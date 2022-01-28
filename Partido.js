import {Largometraje} from './Largometraje'

class Partido extends Largometraje {
    constructor(titulo, duracion, equipo){
        super(titulo,duracion)
        this.equipo=equipo
    }

    //Metodo
    getTeam(){
        return this.equipo
    }
}

export{Partido}