import type { IPaymentRepository } from "../interfaces/paymentRepository.interface";

export class PaymentService {
  private _repository: IPaymentRepository
  constructor(repository: IPaymentRepository) {
    this._repository = repository
  }
  createInvoice(input: any) {

  }
  updateInvoice(input: any) {

  }
  getInvoices(limit: number) {

  }

  getInvoice(id: number) {

  }

  deleteInvoice(id: number) {}
}