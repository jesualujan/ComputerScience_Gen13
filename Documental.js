import {Largometraje} from './Largometraje'

class Documental extends Largometraje {
    constructor(titulo, duracion, autor){
        super(titulo, duracion)
        this.autor=autor
    }

    //Metodo 
    getAuthor(){
         return this.autor
    }
}
export {Documental}