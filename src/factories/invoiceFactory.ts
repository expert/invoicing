import { Factory } from "rosie"
import { InvoiceModel } from "../models/invoice.model"
import { faker, SimpleFaker } from "@faker-js/faker"
import { serviceFactory } from "./serviceFactory"

const customSimpleFaker = new SimpleFaker()

export const invoiceFactory = new Factory<InvoiceModel>()
  .attr("id", () => faker.number.int({min: 1, max: 1000}))
  .attr("logo", () => faker.image.avatar())
  .attr("currency", () => faker.number.int({min: 0, max: 3}))
  .attr("issueDate", () => faker.date.recent({ days: 180}))
  .attr("dueDate", () => faker.date.future({ years: 1}))
  .attr("po", () => +faker.finance.amount({ min: 0, max: 100}) )
  .attr("tags", () => faker.word.noun({length: { min: 0, max: 10}}))
  .attr("fromName", () => faker.company.name())
  .attr("fromEmail", () => faker.internet.email())
  .attr("toName", () => faker.company.name())
  .attr("toEmail", () => faker.internet.email())
  .attr("services", () => {
    // Generate between 1 and 4 random services
    const serviceCount = faker.number.int({ min: 1, max: 4 });
    return Array.from({ length: serviceCount }, () => serviceFactory.build());
  })
  .attr("details", () => faker.finance.iban() + faker.commerce.productDescription())
  .attr("discount", () => +faker.finance.amount({ min: 0, max: 10}))
  .attr("total", () => +faker.finance.amount({ min: 0, max: 1000}) )
  .attr("category", () => customSimpleFaker.helpers.arrayElement(['bill', 'payment']))
  .attr("isPaid", () => faker.datatype.boolean())
  .attr("paidAt", () => faker.date.past())
  .attr("createdAt", () => faker.date.past())
  .attr("createdBy", () => faker.date.past())
  .attr("updatedAt", () => faker.date.recent())