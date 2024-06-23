export class SalesOrderEntity {
  id: number;
  ruc: number;
  orderTimestamp: string;
  invoiceId: string;
  farmerProductPriceIds: number[];


  constructor(id: number, ruc: number, orderTimestamp: string, invoiceId: string, farmerProductPriceIds: number[]) {
    this.id = id;
    this.ruc = ruc;
    this.orderTimestamp = orderTimestamp;
    this.invoiceId = invoiceId;
    this.farmerProductPriceIds = farmerProductPriceIds;
  }
}
