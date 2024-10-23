// tests/components/Welcome.nuxt.spec.ts
import { renderSuspended } from '@nuxt/test-utils/runtime'
import { Welcome } from '#components'
import { screen } from '@testing-library/vue'
import { it, expect } from 'vitest'

it('can render Welcome component', async () => {
  await renderSuspended(Welcome)
  expect(screen.getByText('Welcome Alexei')).toBeDefined()
})