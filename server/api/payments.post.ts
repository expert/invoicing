import { InvoiceModel } from "~/src/models/invoice.model"
import { Factory } from "rosie"

export default  defineEventHandler(async (params) => {
  const query = await readBody(params)
  console.log('aa', query)
  const invoiceFactory = Factory
    .define('invoice', InvoiceModel)
    .attr("id", () => query.id)
    .attr("logo", () => query.logo)
    .attr("currency", () => query.currency)
    .attr("issueDate", () => query.issueDate)
    .attr("dueDate", () => query.dueDate)
    .attr("po", () => query.po )
    .attr("tags", () => query.tags)
    .attr("fromName", () => query.fromName)
    .attr("fromEmail", () => query.fromEmail)
    .attr("toName", () => query.toName)
    .attr("toEmail", () => query.toEmail)
    // .attr("services", () => {
    //   // Generate between 1 and 4 random services
    //   const serviceCount = faker.number.int({ min: 1, max: 4 });
    //   return Array.from({ length: serviceCount }, () => serviceFactory.build());
    // })
    .attr("details", () => query.details)
    .attr("discount", () => query.discount)
    .attr("total", () => query.total )
    .attr("category", () => 'payment')
    .attr("isPaid", () => query.isPaid)
    .attr("paidAt", () => query.paidAt)
    .attr("createdAt", () => query.createdAt)
    .attr("createdBy", () => query.createdBy)
    .attr("updatedAt", () => query.updatedAt)

  const newInvoice =  invoiceFactory.build()
  const invoices = await useStorage('test').getItem('invoices')
  useStorage('test').setItem('invoices', [newInvoice.id, ...invoices])
  console.log(newInvoice.id, invoices)
  return newInvoice.id
})