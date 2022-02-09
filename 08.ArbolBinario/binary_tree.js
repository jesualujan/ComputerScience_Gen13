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
            // si no está vacia
            // vamos a crear un nuevo nodo, -> currentNode 
            let currentNode = this.root

            // agregar un ciclo mientras cada nodo sea un subarbol 
            while(true){
                // si la data de mi nuevo nodo es menor que la data en mi nodo actual 
                if(data < currentNode.data){
                    //revisar si el nodo izquierdo está vacío
                    if(currentNode.left !== null){
                        // mi nodo actual le asigno a la izquierda el nuevo nodo
                        currentNode = currentNode.left
                    }else{
                        currentNode.left = new Node(data, null, null)
                        return currentNode.left
                    }
                }else {
                    // si el nodo de la derecha está vacio
                    if(currentNode.right !== null){
                        //agregamos nuevo nodo
                        currentNode=currentNode.right
                    }else{
                        //cambiar nuestro nodo actual por el hijo a la derecha 
                        currentNode.right = new Node (data, null, null)
                        return
                    }
                }
            }
        }

        contains(data){

        }
     }