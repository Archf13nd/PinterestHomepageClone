import { shallowMount } from '@vue/test-utils'
import TheSignUpForm from '@/components/view-specific/home/TheSignUpForm.vue'
import { describe, expect } from 'vitest'

describe('Snapshots TheSignUpForm.vue', () => {
  test('renders correctly', () => {
    const wrapper = shallowMount(TheSignUpForm, {
      global: {
        mocks: {
          $t: (message) => message
        }
      }
    })

    expect(wrapper.element).toMatchSnapshot()
  })
})
