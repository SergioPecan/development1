export class CropEntity {
  codigo:string;
  area:number;
  producto:string;
  localizacion:string;
  estado:string;
  costo:number;
  retorno:number;

  constructor(){
    this.codigo="";
    this.area=0;
    this.producto="";
    this.localizacion="";
    this.estado="";
    this.costo=0;
    this.retorno=0;
  }
}
