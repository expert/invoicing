import type { IPaymentRepository } from "../interfaces/paymentRepository.interface";
import type { Invoice } from "../models/invoice.model";

export class PaymentService {
  private _repository: IPaymentRepository
  constructor(repository: IPaymentRepository) {
    this._repository = repository
  }
  async createInvoice(input: any): Promise<Invoice> {
    const data = await this._repository.create(input)
    return data
    // return {
    //   id: 1,
    //   description: 'asdf',
    //   details: 'asdfasdf details',
    //   discount: 10,
    //   po: 34,
    //   total: 1000,
    //   vat: 23
    // }
  }
  updateInvoice(input: any) {

  }
  getInvoices(limit: number) {

  }

  getInvoice(id: number) {

  }

  deleteInvoice(id: number) {}
}