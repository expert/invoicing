import { useCurrencyConverter } from '@/composables/useCurrencyConverter';
import type { InvoiceModel } from '~/src/models/invoice.model';

export type InvoiceOverviewType = {
  totalValue: number;
  paidAmount: number;
  unpaidAmount: number;
  unpaidPercentage: number;
  averagePaymentDate: number;
  isTrendingDown?: boolean;
}

export function useInvoiceOverview(invoices: InvoiceModel[], targetCurrency: 'MDL' | 'USD' | 'EUR' | 'RON'): InvoiceOverviewType | undefined {
  if (!invoices.length) {
    return undefined;
  }

  const { convertCurrency } = useCurrencyConverter();

  const overview = invoices.reduce(
    (result, current: InvoiceModel) => {
      const total = convertCurrency(current.total, 0, targetCurrency); // Assuming original currency is MDL (index 0)
      const paid = current.isPaid ? total : 0;
      const unpaid = current.isPaid ? 0 : total;

      result.totalValue += total;
      result.paidAmount += paid;
      result.unpaidAmount += unpaid;

      if (current.paidAt) {
        const paymentDate = new Date(current.paidAt).getTime();
        result.paymentDates.push(paymentDate);
      }

      return result;
    },
    {
      totalValue: 0,
      paidAmount: 0,
      unpaidAmount: 0,
      unpaidPercentage: 0,
      paymentDates: [] as number[],
      averagePaymentDate: 0,
      isTrendingDown: false,
    }
  );

  // Calculate unpaid percentage
  if (overview.totalValue > 0) {
    overview.unpaidPercentage = (overview.unpaidAmount / overview.totalValue) * 100;
  }

  // Calculate average payment date
  if (overview.paymentDates.length > 0) {
    const avgTimestamp = overview.paymentDates.reduce((sum, date) => sum + date, 0) / overview.paymentDates.length;
    const now = new Date().getTime();
    overview.averagePaymentDate = Math.floor((now - avgTimestamp) / (1000 * 60 * 60 * 24)); // days difference
  }

  // Set trending down flag based on unpaid amount (example logic, adjust as needed)
  overview.isTrendingDown = overview.unpaidAmount > overview.paidAmount;

  // Remove `paymentDates` from final output
  delete overview.paymentDates;

  return {
    totalValue: overview.totalValue,
    paidAmount: overview.paidAmount,
    unpaidAmount: overview.unpaidAmount,
    unpaidPercentage: overview.unpaidPercentage,
    averagePaymentDate: overview.averagePaymentDate,
    isTrendingDown: overview.isTrendingDown,
  };
}
