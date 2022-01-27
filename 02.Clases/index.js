// LA SESIÓN DE HOY SERÁ SOBRE CLASES 

class Persona {
   /* todo esto es el scope local */
 
   // instanciar un objeto, o bien un nuevo objeto a partir de uno que ya fue creado recientemente 
   // solo pueden tener un constructor por cada clase 
   constructor(nombre, apellido, edad, pais, ocupacion) {

     // PARA QUE SIRVE EL MENTADO THIS -> THIS NOS SIRVE O HACE REFERENCIA A UNA PROPIEDAD DEL OBJETO
    // LO INVOCAMOS HASTA EL PRINCIPIO DE LA CLASE, ASÍ ESTARÁ PRESENTE EN TODO EL CÓDIGO

   this.nombre = nombre
   this.apellido = apellido
   this.edad = edad 
   this.pais = pais
   this.ocupacion = ocupacion

   this.datos = `HOLA! SOY ORIGINARIO DE ${pais} y soy ${ocupacion}`
  }

  //METODOS 
  Saludar() {
     return  `HOLA! ME LLAMO  ${this.nombre} ${this.apellido} y tengo ${this.edad} años`
  }

  Hablar() {
      return "bla bla bla estoy hablando"
  }

}

// INSTACIAR NUESTROS OBJETOS DE LA CLASE
const personaUno = new Persona ('CESAR','GARCIA',27,'COLOMBIA','PROFESOR')
const personaDos = new Persona ('JESUA','LUJAN',28,'MEXICANO','GAMER PROFESIONAL')
const personaTres = new Persona ('ESTEBAN','GONZALEZ',27,'COLOMBIA','PROFESOR')
const personaCuatro = new Persona ('JUAN','PEREZ',28,'MEXICANO','GAMER PROFESIONAL')

console.log(personaUno , personaDos, personaTres, personaCuatro);
console.log(personaUno.Saludar());
console.log(personaDos.Saludar());
