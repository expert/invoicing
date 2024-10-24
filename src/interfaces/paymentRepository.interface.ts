import type { InvoiceModel } from "../models/invoice.model";

export interface IPaymentRepository {
  create(data: InvoiceModel): Promise<InvoiceModel>;
  update(data: InvoiceModel): Promise<InvoiceModel>;
  delete(id: number): void;
  find(limit: number, offset: number): Promise<InvoiceModel[]>;
  findOne(id: number): Promise<InvoiceModel>;
}