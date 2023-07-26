import { shallowMount } from '@vue/test-utils'
import AppSplitScreen from '@/components/Base/AppSplitScreen.vue'

describe('AppSplitScreen.vue', () => {
  test('If ratio is used in attributes', () => {
    const ratio = 1
    const wrapper = shallowMount(AppSplitScreen, {
      props: {
        ratio
      }
    })
    //   expect(wrapper.attributes().id).toBe(`flex-basis: ${ratio * 100}%`)
    expect(wrapper.findComponent('.screen__left').attributes().id).toBe('example')
    //   expect(component.styles()).toContain(`'flex-basis': ${ratio * 100}%`)
  })
})
