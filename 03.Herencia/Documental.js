class Documental extends Largometraje {
    constructor(titulo,duracion,autor){
        //Aquí indicamos que atributos de mi clase padre va a heredar
        super(titulo,duracion)
        this.autor = autor
    }
    //Metodo
    getAuthor(){
        return this.autor
    }
}

//EXPORTAMOS NUESTRA PLANTILLA (CÓDIGO)
//Usando la forma definida por ES6
export {Documental}