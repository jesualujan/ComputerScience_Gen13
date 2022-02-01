//Esta es la forma más común para iniciar un arreglo
var primerArray = []
var primerArray = ["Jair", "Rene", "Jesua", "Ernesto", "Liliana","Dulce","Carlos","Juan"]
//Esta forma también es valida ya que un array es un objeto.
//var primerArray = new Array()
//var primerArray = new Array("Jair", "Rene", "Jesua", "Ernesto")

//Ciclo for para recorrer un array

for(let i=0; i<10;i++){
    console.log(i)
     
}

for(let i=0; i<10;i = i+2){
    console.log(i)
     
}
//ejemplo de ciclo for de 1 a 2 con paso de .1 en .1

for(let i=10; i<20;i++){
    console.log(i/10)
     
}
let longitud = primerArray.length
let primerNombre = primerArray[0]
for(let i=0;i< longitud;i++){
    console.log(primerArray[i])
}
//Solucion de Joel
console.log("Solucion de Joel")
for(let i=0;i< longitud;i++){
    if(i%2 !=0){
        console.log(primerArray[i])
    }    
}
console.log("Solucion de Martha")
//Solucion de Martha
for(let i=1;i< longitud;i = i+2){    
        console.log(primerArray[i])  
}

//Concatenar
var segundoArray = ["liliana","Martha", "REne", "Roberto"]
var tercerArray = [1,"Ariadne", false, 150]

var cuartoArray = primerArray.concat(segundoArray,tercerArray)

console.log(cuartoArray)
//Join fusiona un array con un separador dado

var quinto = primerArray.join(",")
console.log(quinto)

//Pop elimina el ultimo elemento y lo regresa
var eliminado = segundoArray.pop()
console.log(eliminado)
console.log(segundoArray)
//Push
segundoArray.push("Roberto de nuevo")
console.log(segundoArray)


//shift y unshift
segundoArray.unshift("Rene Uno")
console.log(segundoArray)
var primero = segundoArray.shift()
console.log(primero)
console.log(segundoArray)

//Splice (indice de inicio, numero de elementos a borrar, "elemento nuevo")
//Introducir elementos
segundoArray.splice(2,0,"Emmanuel")
console.log(segundoArray)
//Borrar elementos
segundoArray.splice(3,2)
console.log(segundoArray)
segundoArray.push("Roberto de nuevo")
segundoArray.unshift("Rene uno")
console.log(segundoArray)
//split
var quintoSeparado = quinto.split(",")
console.log(quinto)
console.log(quintoSeparado)
//Actividad
var comida = "Tortas;Tacos,Molletes:Chilaquiles Tostadas.Pozole;Ensalada,Burritos/Refresco"
//var puntoComa = comida.split(";").join(",").split(",") 1era
//var coma = puntoComa.join(",")
//var coma = coma.split(",")

//Segunda solucion
var separadores = [",",";",":","/"," ","."]
for(let i=0;i<separadores.length;i++){
    for(let j =0;j<comida.length; j++){
        if (separadores[i] == comida[j]){
            comida = comida.replace(comida[j],",")
        }
    }
}
var final = comida.split(",")


//Tercera solucion

var comida = "Tortas;Tacos,Molletes:Chilaquiles Tostadas.Pozole;Ensalada,Burritos/Refresco"
var expresionRegular = /[:,. ;\/]/
comidaJosue = comida.split(expresionRegular)

console.log(comidaJosue)

//Empleados usando JSON
var empleados = [
{
    nombre:"Rene",
    apellido:"Manzano",
    sueldo:500,
    
},
{
    nombre:"Roberto",
    apellido:"Manzano",
    sueldo:600

},
{
    nombre:"Ariadne",
    apellido:"Islas",
    sueldo:900

},
{
    nombre:"Jair",
    apellido:"Suarez",
    sueldo:600

}


]
for (let i =0;i< empleados.length;i++){

    console.log(empleados[i].nombre)
}
//RECORRER CON FOR EACH
empleados.forEach((elementoActual,indice,array)=>{

    console.log(array)

})
//RECORRER CON MAP
var empleadosConseguro = empleados.map((elementoActual,indice,array)=>{
    if(elementoActual.sueldo<600){
        return {...elementoActual,tieneSeguro:true}
    }else{
        return {...elementoActual,tieneSeguro:false}
    }
    
})
console.log(empleadosConseguro)

//METODO FILTER

var directivos = empleados.filter(empleado =>{
    return empleado.sueldo >700
})
console.log(directivos)


//For each
