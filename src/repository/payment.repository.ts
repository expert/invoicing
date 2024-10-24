import type { IPaymentRepository } from "../interfaces/paymentRepository.interface";
import type { InvoiceModel } from "../models/invoice.model";

export class PaymentRepository implements IPaymentRepository {
  create(data: InvoiceModel): Promise<InvoiceModel> {
    throw new Error("Method not implemented.");
  }
  update(data: InvoiceModel): Promise<InvoiceModel> {
    throw new Error("Method not implemented.");
  }
  delete(id: number): void {
    throw new Error("Method not implemented.");
  }
  find(): Promise<InvoiceModel[]> {
    throw new Error("Method not implemented.");
  }
  findOne(id: number): Promise<InvoiceModel> {
    throw new Error("Method not implemented.");
  }
}