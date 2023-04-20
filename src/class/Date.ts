class MyDate{
  year:number;
  private _month: number;
  private _day:number;

  constructor(year:number, month: number, day:number){
    this.year = year
    this._month = month
    this._day = day
  }
  //Imprime la fecha
  printFormat(): string {
    const { year } = this;
    const day = this.#addPadding(this._day);
    const month = this.#addPadding(this._month);
    return `${day}/${month}/${year}`;
  }
  //Agrega días a la fecha actual creada
  add(amount: number, type: "days" | "moths" | "years"){
    if(type === "days"){
      this._day+=amount;
    }
    else if(type === "moths"){
      this._month+=amount;
    }
    else{
      this.year+=amount;
    }
  }
  //Da un formato a la fecha
  #addPadding (value: number) {
		if (value < 10)
			return `0${value}`;

		return `${value}`;
  }
  get day():number{
    return this._day;
  }
  //La idea es evitar hacer que desde afuera se agreguen valores errados a las
  //propiedades
  set day(num:number){
    this._day = num;
  }
  get month():number{
    return this._month;
  }
  set month(num:number){
    if(num > 31 || num < 0){
      throw new Error("Month out of range")
    }
    this._month = num;
   /*  try{
      if(num > 31 || num < 0){
        throw new Error("Month out of range")
      }
      this._month = num;
    }
    catch(e){
      console.error(e);
    } */

  }
}

//ahora podemos generar una nueva istancia de nuestra clase

const myDate = new MyDate(2021, 4, 31);
console.log(myDate.printFormat())
myDate.day = 2;
console.log(myDate.printFormat())
myDate.month = 78;
console.log(myDate.month);


