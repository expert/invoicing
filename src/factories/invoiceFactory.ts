import { Factory } from "rosie"
import { InvoiceModel } from "../models/invoice.model"
import { faker } from "@faker-js/faker"

export const invoiceFactory = new Factory<InvoiceModel>()
  .attr("id", faker.number.int({min: 1, max: 1000}))
  .attr("description", faker.commerce.productDescription())
  .attr("details", faker.finance.iban())
  .attr("discount", +faker.finance.amount({ min: 0, max: 10}) )
  .attr("po", +faker.finance.amount({ min: 0, max: 100}) )
  .attr("vat", +faker.finance.amount({ min: 0, max: 10}) )
  .attr("total", +faker.finance.amount({ min: 0, max: 1000}) )