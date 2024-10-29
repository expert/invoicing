import type { InvoiceModel } from '~/src/models/invoice.model';

export function useInvoiceChartDataAdapter(invoices: InvoiceModel[], targetCurrency: 'MDL' | 'USD' | 'EUR' | 'RON') {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const paidData: number[] = new Array(12).fill(0);   // Initialize 12 months with 0 count
  const unpaidData: number[] = new Array(12).fill(0); // Initialize 12 months with 0 count
  const { convertCurrency } = useCurrencyConverter();

  invoices.forEach(invoice => {
    const date = new Date(invoice.paidAt);
    const monthIndex = date.getUTCMonth(); // Get month (0-11)

    const total = convertCurrency(invoice.total, invoice.currency, targetCurrency)

    if (invoice.isPaid) {
      paidData[monthIndex] += total;
    } else {
      unpaidData[monthIndex] += total;
    }
  });

  // Return computed values in a structure suitable for charting
  return {
    months,
    paidData: paidData,
    unpaidData: unpaidData
  };
}