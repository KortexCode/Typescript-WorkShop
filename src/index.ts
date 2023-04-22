//Sobre carga de parámetros en funciones
function parseStr(input:string[]): string;
function parseStr(input:string): string[];
function parseStr(input:number): number;

function parseStr(input: unknown): unknown{
  if(Array.isArray(input)){
    return input.join("");
  }
  if(typeof(input) === "string"){
    return input.split("");
  }
  return input;
}

const first = parseStr('EDGAR');
const second = parseStr(2);
const third = parseStr(second);


function getValue<T,A>(value:T, value2: A){
  return value2;
}

const z = getValue<number, string>(12, "hola")
