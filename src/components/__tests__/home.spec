import { shallowMount } from "@vue/test-utils";
import Home from "@/views/HomeView.vue"
import 

describe('HomeView.vue', () => {
    test('compares sections total with number of sections', () => {
        const sections = [
            {}, {}, {}
        ]
        const component = shallowMount(Home, {
            data() {
                return {
                    sections
                }
            }
        })

        const items = component.findAllComponents()
    })
})