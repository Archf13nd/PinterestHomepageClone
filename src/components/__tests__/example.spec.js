import TheHero from '@/components/Single-Instance/TheHero.vue'
import { shallowMount } from '@vue/test-utils'

describe('Hero.vue', () => {
  test('renders inner text', () => {
    const wrapper = shallowMount(TheHero)

    expect(wrapper.text()).toContain('Get your next')
  })
})
