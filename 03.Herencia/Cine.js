import {Sala} from './Sala.js';
import {Pelicula} from './Pelicula.js';
import {Documental} from './Documental.js';
import {Partido} from './Partido.js';

class Cine {
    constructor (sala){
        this.sala = sala
    }

    //Metodo
    Reproducir(){
        return this.sala.setMovie()
    }
}


// INSTACIAR OBJETO PELICULA
const titanic = new Pelicula ('TITANIC', '220MIN', 'B')
const SalaUno = new Sala ('1', '250personas', titanic)
const cinepolisGalerias = new Cine (SalaUno)


//INSTANCIAR OBJETO DOCUMENTAL
const documental = new Documental ('Catfish', '130MIN', 'A')
const SalaDos = new Sala ('2', '230personas', documental)
const cinepolisPabellon = new Cine (SalaDos)


//INSTANCIAR OBJETO PARTIDO
const partidoFut = new Partido  ('Champions', '125MIN', 'A')
const SalaTres = new Sala ('3', '270personas', partidoFut)
const cinemex = new Cine (SalaTres)


//IMPRIMIR NUESTROS OBJETOS DE CLASE 
console.log(cinepolisGalerias.Reproducir())
console.log(cinepolisPabellon.Reproducir())
console.log(cinemex.Reproducir())