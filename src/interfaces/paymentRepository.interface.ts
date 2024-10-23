import type { Invoice } from "../models/invoice.model";

export interface IPaymentRepository {
  create(data: Invoice): Promise<Invoice>;
  update(data: Invoice): Promise<Invoice>;
  delete(id: number): void;
  find(): Promise<Invoice[]>;
  findOne(id: number): Promise<Invoice>;
}