import { defineStore } from "pinia"
import type { InvoiceModel } from "~/src/models/invoice.model"
interface State {
  invoiceList: InvoiceModel[]
  invoice: InvoiceModel | null,
  isError: boolean
}


export const useInvoiceStore = defineStore('invoice', {
  state: (): State => {
    return {
      invoiceList: [],
      invoice: null,
      isError: false
    }
  },
  actions: {
    async fetchInvoices(): Promise<boolean> {
      const config = useRuntimeConfig();
      const apiBase = config.public.apiBase;
      try {
        const { data, status, error, refresh, clear } = await useFetch(`${apiBase}/payments`, {
          onRequest({ request, options }) {
            // Set the request headers
          },
          onRequestError({ request, options, error }) {
            // Handle the request errors
            // TODO: As Alexandr requested
          },
          onResponse({ request, response, options }) {
            // Process the response data
          },
          onResponseError({ request, response, options }) {
            // Handle the response errors
          }
        })
        if (error?.value) {
          console.error("Failed to fetch invoices", error)
  
          this.$state.isError = true
          return false
        }

        this.populateInvoiceData(data)
        this.$state.isError = false
      } catch {
        
        this.$state.isError = true
      }


      return true
    },
    async create(invoiceData): Promise<boolean> {
      const config = useRuntimeConfig();
      const apiBase = config.public.apiBase;

      const { data, status, error, refresh, clear } = await useFetch(`${apiBase}/payments`, {
        method: 'post',
        body: invoiceData,
        onRequest({ request, options }) {
          // Set the request headers
        },
        onRequestError({ request, options, error }) {
          // Handle the request errors
          // TODO: As Alexandr requested
        },
        onResponse({ request, response, options }) {
          // Process the response data
          // this.addInvoice(response._data)
        },
        onResponseError({ request, response, options }) {
          // Handle the response errors
        }
      })
      if (error?.value) {
        console.error("Failed to create invoice", error)

        this.$state.isError = true
        return false
      }
      this.$state.isError = false
      // console.log(data)
      this.addInvoice(data)

      return true
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
    },
    addInvoice(data: any): void {
      if (data.value) {
        this.invoiceList.unshift(data.value)
      } else {
        console.error("Failed to add invoice")
      }
    }
  },
  getters: {
    getBills(): InvoiceModel[] {
      return this.invoiceList.filter((invoice: InvoiceModel) => invoice.category === 'bill')
    },
    getPayments(): InvoiceModel[] {
      return this.invoiceList.filter((invoice: InvoiceModel) => invoice.category === 'payment')
    },
  }
})
