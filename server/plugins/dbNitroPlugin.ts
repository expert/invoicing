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

  let invoices: any[] = []
  const noSeed = process.env.NO_SEED === 'true';
  if (noSeed) {
    console.log('Seeding is disabled');
    // Set a store value, skip seeding logic, or other conditional code
  } else {
    console.log('Seeding will be performed');
    invoices = invoiceFactory.buildList(20)
  }
  // console.log(JSON.stringify(invoices))

  return await useStorage('test').setItem('invoices', invoices)
})