export class InvoiceModel {
  constructor(
    public readonly id: number,
    public readonly description: string,
    public readonly po: number,
    public readonly details: string,
    public readonly vat: number,
    public readonly discount: number,
    public readonly total: number
  ) {}
}