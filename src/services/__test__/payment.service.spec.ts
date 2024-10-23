// @vitest-environment node
import { afterEach, beforeEach, describe, expect, test, vi, vitest } from "vitest";
import type { IPaymentRepository } from "~/src/interfaces/paymentRepository.interface";
import { MockPaymentsRepository } from "~/src/repository/mockPayment.repository";
import { PaymentService } from "../payment.service";
import { faker } from "@faker-js/faker"
import { Invoice } from "~/src/models/invoice.model";
import { Factory } from "rosie"

const invoiceFactory = new Factory<Invoice>()
  .attr("id", faker.number.int({min: 1, max: 1000}))
  .attr("description", faker.commerce.productDescription())
  .attr("details", faker.finance.iban())
  .attr("discount", +faker.finance.amount({ min: 0, max: 10}) )
  .attr("po", +faker.finance.amount({ min: 0, max: 100}) )
  .attr("vat", +faker.finance.amount({ min: 0, max: 10}) )
  .attr("total", +faker.finance.amount({ min: 0, max: 1000}) )

  const mockProduct = (rest: any) => {
  return {
    description: faker.commerce.productDescription(),
    details: faker.finance.iban(),
    discount: +faker.finance.amount({ min: 0, max: 10}),
    po: +faker.finance.amount({ min: 0, max: 100}),
    vat: +faker.finance.amount({ min: 0, max: 10}),
    ...rest
  }
}

describe("paymentService", () => {
  let repository: IPaymentRepository
  beforeEach(() => {
    repository = new MockPaymentsRepository()
  })
  afterEach(() => {
    repository = {} as MockPaymentsRepository
  })

  describe('createInvoice', () => {
    test('Should create Invoice', async () => {
      const service = new PaymentService(repository)
      const reqBody = mockProduct({
        total: +faker.finance.amount({ min: 0, max: 1000}),
      })
      const result = await service.createInvoice(reqBody)
      expect(result).toMatchObject({
        id: expect.any(Number),
        description: expect.any(String),
        po: expect.any(Number),
        details: expect.any(String),
        vat: expect.any(Number),
        discount: expect.any(Number),
        total: expect.any(Number)
      })
    })
    test('Should trow error Invoice unable to create invoice', async () => {
      const service = new PaymentService(repository)
      const reqBody = mockProduct({
        total: +faker.finance.amount({ min: 0, max: 1000}),
      })

      vitest
        .spyOn(repository, 'create')
        .mockImplementationOnce(() => Promise.resolve({} as Invoice))
      await expect(service.createInvoice(reqBody)).rejects.toThrow(
        "Unable to create invoice"
      )
    })


    test('Should trow error Invoice already exists', async () => {
      const service = new PaymentService(repository)
      const reqBody = mockProduct({
        total: +faker.finance.amount({ min: 0, max: 1000}),
      })

      vitest
        .spyOn(repository, 'create')
        .mockImplementationOnce(() => Promise.reject(new Error("Invoice already exists")))
      await expect(service.createInvoice(reqBody)).rejects.toThrow(
        "Invoice already exists"
      )
    })
  })

  describe('updateInvoice', () => {
    test('Should update Invoice', async () => {
      const service = new PaymentService(repository)
      const reqBody = mockProduct({
        total: +faker.finance.amount({ min: 0, max: 1000}),
        id: faker.number.int({ min: 10, max: 1000})
      })
      const result = await service.updateInvoice(reqBody)
      expect(result).toMatchObject(reqBody)
    })
  })

  describe('getInvoices', () => {
    test("Should get Invoices by offset and limit", async () => {
      const service = new PaymentService(repository)
      const randomLimit = faker.number.int({min: 1, max: 10})

      const invoices = invoiceFactory.buildList(randomLimit)

      vitest
        .spyOn(repository, 'find')
        .mockImplementationOnce(() => Promise.resolve(invoices))

      const result = await service.getInvoices(randomLimit, 0)

      expect(result.length).toEqual(randomLimit)
      expect(result).toMatchObject(invoices)
    })
  })
})