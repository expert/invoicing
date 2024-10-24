import type { IPaymentRepository } from "../interfaces/paymentRepository.interface";
import type { InvoiceModel } from "../models/invoice.model";

export class PaymentService {
  private _repository: IPaymentRepository
  constructor(repository: IPaymentRepository) {
    this._repository = repository
  }
  async createInvoice(input: any): Promise<InvoiceModel> {
    const data = await this._repository.create(input)
    if (!data.id) {
      throw new Error('Unable to create invoice')
    }
    return data
  }
  async updateInvoice(input: any) {
    const data = await this._repository.update(input)
    return data
  }

  async getInvoices(limit: number, offset: number) {
    const invoices = await this._repository.find(limit, offset)

    return invoices
  }

  getInvoice(id: number) {

  }

  deleteInvoice(id: number) {}
}