export type InvoiceCategoryType = 'bill' | 'payment'
export type ServiceType = {
  description: string,
  quantity: number,
  price: number,
  vat: number,
  amount: number
}
export class InvoiceModel {
  constructor(
    public readonly id: number,
    public readonly logo: string,
    public readonly po: number,
    public readonly currency: number,
    public readonly issueDate: Date,
    public readonly dueDate: Date,
    public readonly tags: string,
    public readonly fromName: string,
    public readonly fromEmail: string,
    public readonly toName: string,
    public readonly toEmail: string,
    public readonly services: ServiceType[],
    public readonly details: string,
    public readonly discount: number,
    public readonly total: number,
    public readonly category: InvoiceCategoryType,
    public readonly isPaid: boolean, 
    public readonly createdAt: Date,
    public readonly createdBy: Date,
    public readonly updatedAt: Date
  ) {}
}