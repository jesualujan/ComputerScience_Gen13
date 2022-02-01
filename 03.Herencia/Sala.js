
class Sala {
    constructor(numSala, cantGente, largometraje ){
        this.numSala = numSala 
        this.cantGente = cantGente 
        this.largometraje = largometraje 
    }

    //Metodos (SET) & (GET)
    setMovie(){
        return "Se está reproduciento : " + this.largometraje.getTitle() + " Duracion " + this.largometraje.getDuration();    }

    getPeople(){
        return this.cantGente
    }

    getSalaNumber() {
        return this.numSala
    }
}


//EXPORTAMOS NUESTRA PLANTILLA (CÓDIGO)
//Usando la forma definida por ES6
export { Sala }