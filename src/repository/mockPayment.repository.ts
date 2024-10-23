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
    return Promise.resolve(data as unknown as Invoice)
  }
  delete(id: number): void {
    throw new Error("Method not implemented.");
  }
  find(limit: number, offset: number): Promise<Invoice[]> {
    return Promise.resolve([])
  }
  findOne(id: number): Promise<Invoice> {
    throw new Error("Method not implemented.");
  }
  
}