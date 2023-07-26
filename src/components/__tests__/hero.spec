import TheHero from '@/components/Single-Instance/TheHero.vue'
import { shallowMount, RouterLinkStub } from '@vue/test-utils'

describe('TheHero.vue', () => {
  test('Renders current title', () => {
    const titles = {
      display_name: 'New Look'
    }
    const wrapper = shallowMount(TheHero, {
      props: {
        titles
      },
      global: {
        components: {
          'router-link': RouterLinkStub
        }
      }
    })

    const compositionAuthor = wrapper.find('.hero__text')

    expect(wrapper.text()).toContain(titles.display_name)
  })
})
