class Myservice{

  static instance: Myservice | null = null;
  private constructor(
    private name: string
  ){}
  static create(name: string){
    if(Myservice.instance === null){
      Myservice.instance = new Myservice(name);
    }
    return Myservice.instance;
  }
  getName(){
    return this.name;
  }
}

//Creamos 2 instancias pero lo que queremos es que sólo puedad
//crearse una vez
/* const myService1 = new Myservice("service 1"); *///error

/* const myService2 = new Myservice("service 2"); *///error

const service = Myservice.create("servicio de comida");
console.log(service.getName());
