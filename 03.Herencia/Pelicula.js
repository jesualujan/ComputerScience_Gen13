

class Pelicula extends Largometraje {
    constructor(titulo,duracion,genero){
        //Aquí indicamos que atributos de mi clase padre va a heredar
        super(titulo,duracion)
        this.genero = genero
    }

    //Metodo
    getGender(){
        return this.genero
    }
}

//EXPORTAMOS NUESTRA PLANTILLA (CÓDIGO)
//Usando la forma definida por ES6
export {Pelicula}