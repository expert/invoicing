import { InvoiceModel } from "~/src/models/invoice.model"

export default defineEventHandler(async (params) => {
  const query = getQuery(params)
  console.log('aa', query)

  // You can use generics to define types
  const result = await useStorage('test').getItem<InvoiceModel>('invoices')

  return result
})