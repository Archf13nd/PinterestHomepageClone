import { shallowMount } from '@vue/test-utils'
import TheHero from '@/components/Single-Instance/TheHero.vue'
import { describe, expect } from 'vitest'

describe('Snapshots TheHero.vue', () => {
  test('renders correctly', () => {
    const wrapper = shallowMount(TheHero)

    expect(wrapper.element).toMatchSnapshot()
  })
})
