//* REPASO DE FUNCIONES 
//* DECLARACION DE UNA FUNCIÓN 
    // function Sumar(x,y){
    //     let sumar = x+y
    //     return sumar 
    // }
    // Sumar(2,2)

//* EXPRESIÓN DE FUNCIÓN, ES DECIR DECLARAMOS UNA VARIABLE Y LE PASAMOS UNA FUNCIÓN 
    // let Suma = function(x,y){
    //     let suma = x+y
    //     return suma
    // }    
    // Suma(1,1) // 2; 

//* PARA TRABAJAR NUESTROS [[Prototype]] : Objeto vamos a utilizar funciones 
// vamos a crear una función, donde le vamos a pasar atributos y metodos 
// algo similar a tener una clase 

function Person(name, last_name, age, gender, interest){  // vendria siendo como tener una clase;
                                                          // class Person(){}
        this.fullName={
            name:name,
            last_name:last_name
        }
        this.age=age
        this.gender=gender
        this.interest=interest

        //vamos a tener una especie de constructor
                this.bio=function(){
                  //vamos a definir un string 
                var string =  this.name + this.last_name + this.age
                 //vamos a definir un enunciado que contenga el género
                var pronun;
                //vamos a checar el valor de género y mandarle un enunciado
                if(this.gender==='male' || this.gender==='Male'|| this.gender==='m' || this.gender==='M'){
                    pronun = 'He likes'
                }else if (this.gender==='female'|| this.gender==='Female'|| this.gender==='f'||this.gender==='F'){
                    pronun = 'She likes'
                }else{
                    pronun = "They like"
                }
                // añadir la cadena de pronombres al final de la cadane princpal (string)
                string += pronun; //tambíen lo pueden hacer asi: string = string + pronun;

        // vamos a utilizar otra condicional para estructurar la última parte de la segunda frase 
        // dependiendo de si el número de intereses es 1, 2 , 3  [escalar, escribir, cantar, correr]
        if(this.interest.length === 1) {
            string += this.interest[0] + '.'
        }else if(this.interest.length === 2){
            string += this.interest[0] + 'and' + this.interest[1] + '.'
        }else {
            // si hay más de 2 intereses, los recorremos en un bluce 
            // añadiendo cada uno a la cadena prinipal seguido de una coma 
            // excepto el último, que necesita un punto
            for(let i=0; i<this.interest.length; i++){
                if(i === this.interest.length -1){
                    string += 'and' + this.interest[i] + '.'
                }else{
                    string += 'and' + this.interest[i] + ','
                }
            }
         }
         // finalmente con la cadena construida lo alertamos o lo avisamos
          console.log(string)
        }
       this.greeting=function(){
           alert('HI! My name is: ' + ' ' + this.fullName.name + ' ' + this.fullName.last_name)
        //return ('HI! My name is: ' + ' ' + this.fullName.name + ' ' + this.fullName.last_name)
       }
    }

// crear nuestro objeto
const person1 = new Person ('TAMI', 'SMITH', 22, 'Female', ['music', 'jogging', 'kickboxing', 'mountaing'])//prototipo
const person2 = new Person ('BARACK', 'OBAMA', 40, 'Male', ['lawyer', 'writter'])