import { shallowMount, mount } from '@vue/test-utils'
import AppBtnRow from '@/components/Base/AppBtnRow.vue'

describe('AppBtnRow.vue', () => {
  test('If correct number of buttons is rendered', () => {
    const currentBtn = 3
    const wrapper = mount(AppBtnRow, {
      props: {
        currentBtn
      }
    })

    //   expect(wrapper.attributes().id).toBe(`flex-basis: ${ratio * 100}%`)
    expect(wrapper.findAll('.btn-row__btn')).toHaveLength(currentBtn + 1)
    //   expect(component.styles()).toContain(`'flex-basis': ${ratio * 100}%`)
  })
})
