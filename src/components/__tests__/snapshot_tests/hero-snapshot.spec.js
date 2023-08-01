import { shallowMount } from '@vue/test-utils'
import TheHero from '@/components/view-specific/home/TheHero.vue'
import { describe, expect } from 'vitest'

describe('Snapshots TheHero.vue', () => {
  test('renders correctly', () => {
    const wrapper = shallowMount(TheHero, {
      global: {
        mocks: {
          $t: (message) => message
        }
      }
    })

    expect(wrapper.element).toMatchSnapshot()
  })
})
