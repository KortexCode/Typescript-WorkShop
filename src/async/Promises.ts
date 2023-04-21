
//Tipamos la promesa con valores genéricos
async function delay(time: number){
  //La promesa espera recibir un dato tipo string
  const promise = new Promise<string>((resolve)=>{
    setTimeout(()=>{
      resolve("Te llegó?");
    }, time);
  });
  //response sabe que recibirá un string como dato
  const response = await promise;
  console.log(response); //Muestra datos cuando se resuleve el await
  console.log("estás esperando?")//Se lanza sólo luego de cumplirse el await

}

console.log("te la mandé");//es lanzada primero
delay(3000);//Es lanzada de tercera luego de 3 segundos
console.log("terminamos");//es lanzada de segunda
