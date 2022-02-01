class Estudiantes {
    // ESTE ES EL CONSTRUCTOR DE LA CLASE Estudiantes
    constructor (nombre, apellido, caliFinal, inscrito) {
      this.nombre = nombre
      this.apellido = apellido
      this.caliFinal = caliFinal
      this.inscrito = inscrito
    }

    //ESTOS SON LOS METODOS DE LA CLASE Estudiantes
    Aprobado () {
       //DESARROLLAR O HACER NUESTRA LÓGICA
       if( this.caliFinal >= 7.6){
        return "APROBADO " + Math.round(this.caliFinal)
       }else if (this.caliFinal <= 7.5 ){
        return "REPROBADO " + Math.round(this.caliFinal)
       }else{
           return "ERROR EN EL SISTEMA CONSULTAR MÁS TARDE"
       }
    }

    Inscrito () {
        //DESARROLLAR O HACER NUESTRA LÓGICA
         if(this.inscrito === true){
             return "EL ESTUDIANTE SI ESTA INSCRITO EN EL SEMESTRE"
         } else if (this.inscrito === false){
            return "EL ESTUDIANTE NO ESTA INSCRITO EN EL SEMESTRE"
         }else {
            console.log ( "ERROR EN EL SISTEMA CONSULTAR MÁS TARDE" )
         }
    }
}

// VAMOS A CREAR LAS INSTANCIAS DE LA CLASE 
const estudianteUno = new Estudiantes ("JUAN","GOMEZ", 8.2, true)
const estudianteDos = new Estudiantes ("ERICK", "RODRIGUEZ", 7.2, false)
const estudianteTres = new Estudiantes ("CESAR", "GARCIA", 7.6, true)

console.log(estudianteUno.nombre, estudianteUno.apellido, estudianteUno.Aprobado(), estudianteUno.Inscrito());
console.log(estudianteDos.nombre, estudianteDos.apellido, estudianteDos.Aprobado(), estudianteDos.Inscrito());
console.log(estudianteTres.nombre, estudianteTres.apellido, estudianteTres.Aprobado(), estudianteTres.Inscrito());