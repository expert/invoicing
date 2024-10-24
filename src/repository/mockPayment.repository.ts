import type { IPaymentRepository } from "../interfaces/paymentRepository.interface";
import type { InvoiceModel } from "../models/invoice.model";

export class MockPaymentsRepository implements IPaymentRepository {
  create(data: InvoiceModel): Promise<InvoiceModel> {
    const mockInvoice = {
      ...data,
      id: 123
    } as InvoiceModel
    return Promise.resolve(mockInvoice)
  }
  update(data: InvoiceModel): Promise<InvoiceModel> {
    return Promise.resolve(data as unknown as InvoiceModel)
  }
  delete(id: number): void {
    throw new Error("Method not implemented.");
  }
  find(limit: number, offset: number): Promise<InvoiceModel[]> {
    return Promise.resolve([])
  }
  findOne(id: number): Promise<InvoiceModel> {
    throw new Error("Method not implemented.");
  }
  
}