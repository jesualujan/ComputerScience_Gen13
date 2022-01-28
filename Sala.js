
class Sala {
    constructor(numSala, cantGente, largometraje){
        this.numSala=numSala
        this.cantGente=cantGente
        this.largometraje=largometraje
    }
    // (SET) & (GET)
    setMovie(){
        return "Se está reproduciendo: " + this.largometraje.getTitle() + "Duracion: " + this.largometraje.getDuration()
    }

    getPeople(){
        return this.cantGente
    }

    getSalaNumber(){
        return this.numSala
    }
}

export {Sala}