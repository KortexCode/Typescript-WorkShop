const withoutEnd = () => {
  while (true) {
    console.log('nunca para de aprender');
  }
}

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
first.push("chikorita");
console.log(first); //Sin validar tipos ahora se puede usar un
//método y TS entenderá que firts es un array
console.log(second*2);
console.log(third);

