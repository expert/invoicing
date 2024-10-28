import type { InvoiceModel } from "~/src/models/invoice.model"

function random() {
  return Math.round(300 + Math.random() * 700) / 10
}

export function useInvoiceDatasetAdapter(invoices: InvoiceModel[]) {

  return {
    dataset: {
      dimensions: ['Invoice', 'Unpaid', 'Paid'],
      source: [
        {
          Product: 'Jan',
          'Unpaid': random(),
          'Paid': random(),
        },
        {
          Product: 'Feb',
          'Unpaid': random(),
          'Paid': random(),
        },
        {
          Product: 'Mar',
          'Unpaid': random(),
          'Paid': random(),
        },
        {
          Product: 'Apr',
          'Unpaid': random(),
          'Paid': random(),
        },
      ],
    }
  }
}