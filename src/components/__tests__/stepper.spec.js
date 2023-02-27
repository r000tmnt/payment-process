import { describe, it, expect, vi, beforeAll } from 'vitest'

import { mount } from '@vue/test-utils'
import axios from 'axios'
import AppView from '../../App.vue'
import HeaderView from '../header.vue'
import stepper from '../stepper.vue'
import step_1 from '../step_1.vue'
import step_2 from '../step_2.vue'

vi.mock("axios")


const stepperProps = { 
  steps: [
    {
      title: 'data',
      desc: 'data-desc',
      component: step_1,
      finish: false
    },
    {
      title: 'payment',
      desc: 'payment-desc',
      component: step_2,
      finish: false
    }
  ],
  result: {}
} 

describe("StepperView", () => {
  it('Should fill the first name nd last name', async() => {
    const wrapper = mount(AppView, {props: stepperProps})

    const app = wrapper.findComponent(stepper)

    expect(wrapper.html()).toMatchSnapshot()
    expect(app.html()).toMatchSnapshot()

    await app.find('input[name=firstName]').setValue('Rick')
    await app.find('input[name=lastName]').setValue('Lee')
    const nextBtn = wrapper.find('button.step-form-button')

    expect(app.vm.$data.firstName).toBe('Rick')
    expect(app.vm.$data.lastName).toBe('Lee')

    // nextBtn.trigger('click')

    // expect(app.emmited('toNext')).equal
  })
})


// describe('Step 1', () => {
//   it('Return first name and last name', () => {
//     const wrapper = mount(stepper, { 
//       props: stepperProps
//     })

//     const first_name = wrapper.find('input[name=firstName]')
//     const last_name = wrapper.find('input[name=lastName]')
//     const nextBtn = wrapper.find('button.step-form-button')

//     wrapper.setData({
//       firstName: '',
//       lastName: '',      
//     })

//     first_name.setValue('Rick')
//     last_name.setValue('Lee')
//     nextBtn.trigger('click')

//     expect(wrapper.emitted('toNext')).toEqual(
//       { 
//         firstName: 'Rick', 
//         lastName: 'Lee' 
//       }      
//     )

//   })
// })
