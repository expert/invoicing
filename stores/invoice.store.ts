import { defineStore } from "pinia"
import type { InvoiceModel } from "~/src/models/invoice.model"
interface State {
  invoiceList: InvoiceModel[]
  invoice: InvoiceModel | null
}

export const useInvoiceStore = defineStore('invoice', {
  state: (): State => {
    return {
      invoiceList: [],
      invoice: null,
    }
  },
  actions: {
    async fetchInvoices(): Promise<void> {
      const { data, status, error, refresh, clear } = await useFetch('/api/payments', {
        onRequest({ request, options }) {
          // Set the request headers
          // note that this relies on ofetch >= 1.4.0 - you may need to refresh your lockfile
          options.headers.set('Authorization', '...')
        },
        onRequestError({ request, options, error }) {
          // Handle the request errors
          // TODO: As Alexandr requested
        },
        onResponse({ request, response, options }) {
          // Process the response data
          // localStorage.setItem('token', response._data.token)
        },
        onResponseError({ request, response, options }) {
          // Handle the response errors
        }
      })
      if (error.value) {
        console.error("Failed to fetch invoices", error)
        return
      }

      this.populateInvoiceData(data)
    },
    populateInvoiceData(data: Ref): void {
      // Ensure data is available and is an array
      if (Array.isArray(data.value)) {
        for (const invoice of data.value) {
          this.invoiceList.push(invoice)
        }
      } else {
        console.error("Failed to populate invoices, no invoices")
      }
    }
  }
})
