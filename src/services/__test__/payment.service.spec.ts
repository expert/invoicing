// @vitest-environment node
import { afterEach, beforeEach, describe, expect, test } from "vitest";
import type { IPaymentRepository } from "~/src/interfaces/paymentRepository.interface";
import { MockPaymentsRepository } from "~/src/repository/mockPayment.repository";
import { PaymentService } from "../payment.service";

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
      const reqBody = {
        description: 'asdf',
        details: 'asdfasdf details',
        discount: 10,
        po: 34,
        total: 1000,
        vat: 23
      }
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
    test('Should trow error Invoice already exists', () => {
    })
  })
})