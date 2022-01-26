//Diferencia entre var y let
var a = 5;
const c = 8;
//let b = 7;

for (var i =0; i<10;i++){
    console.log(i);
}
console.log("Ya salio del primer ciclo")
console.log(i);

for (let j =0; j<10;j++){
    console.log(j);
}
console.log("Ya salio del segundo ciclo")
//console.log(j)

a = 12;
console.log(a)

let funcion = function(a,b){
    if(a>b){
        console.log(a);
    }else{
        console.log(b)
    }
}
let funcionFlecha =(a,b)=>{
    if(a>b){
        console.log(a);
    }else{
        console.log(b)
    }


}

let funcionFlecha1 = (a,b)=> a>b ? a :b;

//Spread operator

function suma(a,b,c){
    console.log(a+b+c)
}

const numeros = [1,2,4,3]

suma(numeros[0],numeros[1],numeros[3])

suma(...numeros)

//notacion rest
function suma1(...resto){
    for(let i of resto){
        console.log(i)
    }
}
console.log("aqui inicia")
suma1(1,2,5,6,7,8,9,10,11)