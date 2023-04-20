
class Animal{

  constructor(
    protected name: String
  ){}

  move(){
    console.log(`Moving along width ${this.name}`);
  }
  greeting(){
    return `Hello, i'm ${this.name}`;
  }
}

//Class Dog
class Dog extends Animal{
  color : string;
  constructor(
    name: string,
    color: string,
  )
  {
    super(name);
    this.color = color;
  }
  move(): void {
    console.log(`Moving fast width ${this.name}`)
  }
  woof(time: number):void{
    for (let index = 0; index < time; index++) {
      console.log( `Woof, my name is ${this.name}`);
    }
    this.move();

  }
}
const animal1: Animal = new Animal("Toto");
const animal2: Animal = new Dog("El animalón", "brown");

const tauniDog = new Dog("Tauni", "Brown");
/* console.log(tauniDog.greeting());
console.log(tauniDog.woof(1)); */

function getAnimal(anim: Animal){
  anim.move();
}

getAnimal(tauniDog);
