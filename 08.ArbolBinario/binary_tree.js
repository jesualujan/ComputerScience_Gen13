//* PASOS PARA DESARROLLAR EL CÓDIGO DEL ÁRBOL BINARIO
//* VAMOS A TENER DOS CLASES:
     // 1) class Node { constructor (data,left,right) 
     // 2) class Tree { constructor () aquí nosotros partiremos de la raiz }

     class Node {  //Crear nuestros nodos -> va a recibir cierta data 
         constructor(data,left,right){
             this.data=data 
             this.left=left    // nodo hijo
             this.right=right //  nodo hijo
         }
     }

     class Tree { //vamos a construir nuestro árbol binario
         constructor(){
            this.root=null     
         }
         //VAMOS A TENER COMO METODOS PRINCIPALES:
         // agregar -> add: se encarga de agregar un dato 
        // contiene -> contains: verificar si un nodo existe respacto a un dato 

        add(data){
            //primero debemos verificar si root esta vacia: 
            if(this.root===null){
            //vamos a crear un nuevo nodo (data, null, null)   
            this.root = new Node (data,null,null) 
            return
            }

        }

        contains(data){

        }
     }