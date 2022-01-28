//CLASE PADRE 
class Largometraje {
    constructor(titulo, duracion){
        this.titulo=titulo
        this.duracion=duracion
    }

    //METODOS GETTER & SETTERS 
    getTitle(){
        return this.titulo
    }

    getDuration(){
        return this.duracion
    }
}

//EXPORTAMOS NUESTRA PLANTILLA (CÓDIGO)
//Usando la forma definida por ES6
export { Largometraje }