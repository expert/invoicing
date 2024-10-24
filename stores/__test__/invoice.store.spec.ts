import { useInvoiceStore } from './../invoice.store';
import { setActivePinia, createPinia } from 'pinia'
import { describe, beforeEach, it, expect } from 'vitest';


describe('Invoice Store', () => {
  beforeEach(() => {
    // creates a fresh pinia and makes it active
    // so it's automatically picked up by any useStore() call
    // without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('populate data', () => {
    const invoice = useInvoiceStore()
    expect(invoice.invoiceList).toMatchObject([])
    invoice.populateInvoiceData(ref(null))
    expect(invoice.invoiceList).toMatchObject([])
  })
})