import { Factory } from "rosie"
import { faker } from "@faker-js/faker"
import type { ServiceType } from "../models/invoice.model";

export const serviceFactory = new Factory<ServiceType>()
  .attr("description", () => faker.commerce.productDescription())
  .attr("quantity", () => faker.number.int({ min: 1, max: 10 }))
  .attr("price", () => +faker.commerce.price({ min: 10, max: 100 }))
  .attr("vat", () => +faker.finance.amount({ min: 0, max: 20 }))  // Random VAT %
  .attr("amount", ["quantity", "price", "vat"], (quantity, price, vat) => {
    const totalWithoutVat = quantity * price;
    return totalWithoutVat + (totalWithoutVat * (vat / 100));  // Calculate amount with VAT
  })