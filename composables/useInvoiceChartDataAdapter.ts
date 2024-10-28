import { ref, computed } from 'vue';
import type { InvoiceModel } from '~/src/models/invoice.model';

export function useInvoiceChartDataAdapter(invoices: InvoiceModel[]) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const paidData = ref(new Array(12).fill(0));   // Initialize 12 months with 0 count
  const unpaidData = ref(new Array(12).fill(0)); // Initialize 12 months with 0 count

  invoices.forEach(invoice => {
    const date = new Date(invoice.paidAt);
    const monthIndex = date.getUTCMonth(); // Get month (0-11)

    if (invoice.isPaid) {
      paidData.value[monthIndex] += invoice.total;
    } else {
      unpaidData.value[monthIndex] += invoice.total;
    }
  });

  // Return computed values in a structure suitable for charting
  return computed(() => ({
    months,
    paidData: paidData.value,
    unpaidData: unpaidData.value
  }));
}