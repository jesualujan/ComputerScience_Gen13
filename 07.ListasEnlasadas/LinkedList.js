//* CREAR NUESTRA CLASE LLAMADA Node
//* EL NODO ES LA INFORMACIÓN DEL ELEMENTO
//* TIENE UN APUNTADOR (ENLACE) AL SIGUIENTE NODO

class Node {
    constructor(data){
        this.data=data //en data guardamos cualquier objeto que queramos
        this.next=null // por defecto este es null 
    }
}

//? VAMOS A CREAR NUESTRA CLASE LinkedList
//? UNA LISTA ENLAZADA DEBE TENER UNA CABECERA (head)
//? TIENE UN TAMAÑO DE LISTA (length)

//*LOS METODOS QUE SE PUEDEN HACER CON UNA LISTA 
    //* AGREGAR UN ELEMENTO (add)
    //*   -al principio (addStart)
    //*    -al final (addEnd)
   //*  BORRAR UN ELEMENTO  delete (data)
   //*  BUSCAR UN ELEMENTO  get(index)


   class LinkedList{
       constructor(){
           this.head=null //esto significa que no hay nada en la lista 
           this.length=0 //no hay elementos dentro de lista
       }
     //Método Auxiliar
      isEmpty(){
          return this.head===null
      }
      //Métodos de nuestra lista
      addStart(data){
          const node = new Node (data) //creamos nuestro nodo con su dato
          if(!this.head){// VERDADERO QUE NUESTRA ESTA VACIA 
          this.head=node//asignamos el primer nodo como la cabeza de la lista 
        }else{
            node.next=this.head // pequeño recorrido tomando el inicio del nodo y la posicion actual
            this.head=node //nuevo nodo
        }
        this.length++ // saber cuantos elementos tengo en mi lista
      }
      addEnd(data){
          const node = new Node (data) 
          if(this.head === null){
              this.head=node //aisgnamos el primer nodo como la cabeza de la lista 
          }else{
                // en este else nosotros ya sabes que existe this.head
                let currentNode = this.head
          }

      }


   }