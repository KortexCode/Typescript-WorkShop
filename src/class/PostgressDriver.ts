//Todas las propiedades y métodos de la interface debe ser
//implementada y obligatoriamente publicos
interface Driver{
  database: string;
  password: string;
  port: number;
  connect():void;
  disconnect():void;
}

class PostgresDriver implements Driver{

  constructor(
    public database: string,
    public password: string,
    public port: number,
  ){}
  connect():void{
    console.log("conectado");
  }
  disconnect(): void {
    console.log("desconectado");
  }

}
