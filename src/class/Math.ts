class MyMath {
  public static PI:number = 3.14;
  private static getNumber():number{
    return this.PI;
  }
  static modifyPI(num: number): number{
    const newPI = num + this.getNumber();
    return newPI;
  }
  static max(...numbers:number[]){
    return numbers.reduce((initial, current)=>{
      return initial >= current ? initial : current;
    })
  }
}

//La Clase:
MyMath.PI; //permite acceder a esta propiedad
const x = MyMath.modifyPI(2); //Haces uso de getNumber pero desde dentro de la clase
console.log(x)

console.log(MyMath.max(-5, -2, -20))
