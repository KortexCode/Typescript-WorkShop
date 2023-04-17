//Tipado de números

let num1 = 2; //Dejar que infiera el dato
const num2 = 2; //Como ya es constante no importa inferir el dato
let num3: number = 2; //Forma explícita

//Tipado de booleanos

let bol1 = true; //Dejar que infiera el dato
const bol2 = false; //Como ya es constante no importa inferir el dato
let bol3 : boolean = false; //Forma explícita

let string1 = "Misaka"; //Dejar que infiera el dato
const string2 = "= ("; //Como ya es constante no importa inferir el dato
let string3 : string = "Bocchi"; //Forma explícita

let array1 = ["misaka", [2, 4], {y:3}];
//Para el primer caso se entiende que guardo un array
let array2 : (string | number[] | object)[] = ["misaka", [2, 4], {y:3}];

//Para el segundo caso se entiende que se guarda un objeto
let array3 : object = ["misaka", [2, 4], {y:3}];

//Alias
//Fprma sin alias
/* let userId: string | number; */
//Forma con alias
type UserID = string | number;
let userId: UserID;
userId = "2";

function helloUser(id: string | number){
  if(typeof id === "string")
    console.log(`Por string, número de id ${id}`);
  else
    console.log(`Por number, número de id ${id}`);
}

helloUser(userId)


type Sizes = 'S' | 'M' | 'L' | 'XL'; //Alias y Tipos Literales

function createProductJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
){
   return {
        title,
        createdAt,
        stock,
        size
    }
}



const calcTotal = (prices: number[]): string => {
 const value : number = prices.reduce((initial: number, item: number)=>{
    return item + initial;
  }, 0);

  return value.toString();//Condiciona la funcion para que regrese un string
}

console.log( calcTotal([1, 3, 2]))










