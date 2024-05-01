export class Crop {
  id:number;
  code:string;
  area:number;
  product:string;
  localization:string;
  status:string;
  cost:number;
  profit:number;
  ruc:number;

  constructor(){
    this.id=0;
    this.code="";
    this.area=0;
    this.product="";
    this.localization="";
    this.status="";
    this.cost=0;
    this.profit=0;
    this.ruc=0;
  }
}
