import type { IPaymentRepository } from "../interfaces/paymentRepository.interface";
import type { Invoice } from "../models/invoice.model";

export class MockPaymentsRepository implements IPaymentRepository {
  create(data: Invoice): Promise<Invoice> {
    const mockInvoice = {
      ...data,
      id: 123
    } as Invoice
    return Promise.resolve(mockInvoice)
  }
  update(data: Invoice): Promise<Invoice> {
    throw new Error("Method not implemented.");
  }
  delete(id: number): void {
    throw new Error("Method not implemented.");
  }
  find(): Promise<Invoice[]> {
    throw new Error("Method not implemented.");
  }
  findOne(id: number): Promise<Invoice> {
    throw new Error("Method not implemented.");
  }
  
}