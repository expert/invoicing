import { InvoiceModel } from "~/src/models/invoice.model"
import { Factory } from "rosie"
import { invoiceFactory } from "~/src/factories/invoiceFactory"
export default defineNitroPlugin(async (nitroApp) => {
  // console.log('Nitro plugin', nitroApp)
  // const invoiceFactory = Factory
  //   .define('invoice', InvoiceModel)
  //   .attr('total', 50)
  //   .attr('po', 33)

  // const invoiceInstance = invoiceFactory.build({
  //   'discount': 10
  // })
  const invoices = invoiceFactory.buildList(20)
  // console.log(JSON.stringify(invoices))

  return await useStorage('test').setItem('invoices', invoices)
})