class Largometraje {
    constructor(titulo,duracion){
        this.titulo = titulo
        this.duracion = duracion
    }

    //Metodos (get)

    getTitle(){
        return this.titulo
    }

    getDuration(){
        return this.duracion
    }
}

//EXPORTAMOS NUESTRA PLANTILLA (CÓDIGO)
//Usando la forma definida por ES6
export {Largometraje}