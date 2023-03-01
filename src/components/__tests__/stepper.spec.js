import { describe, it, expect, vi } from 'vitest'

import { mount } from '@vue/test-utils'
// import axios from 'axios'
import AppView from '../../App.vue'
import HeaderView from '../header.vue'
import stepper from '../stepper.vue'
import step_1 from '../step_1.vue'
import step_2 from '../step_2.vue'

// vi.mock("axios")


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

const wrapper = mount(AppView, {props: stepperProps})
const header = wrapper.findComponent(HeaderView)
const app = wrapper.findComponent(stepper)
const currentLang = header.find('div[id="language"]')
const first_step = app.findComponent(step_1)
const nextBtn = first_step.find('button')

describe("StepperView", () => {
  it('Should see a heder on top right corner', () => {
    expect(header.exists()).toBeTruthy()
  })

  it('Find the language select button', () => {
    expect(currentLang.exists()).toBeTruthy()
  })

  it('Should open language options', () => {
    currentLang.trigger('click')

    app.vm.$nextTick(() => {
      const options = currentLang.find('aside')
      expect(options.exists()).toBeTruthy()
    })
  })

  it('Change language to Chinese', () => {
    const optionsModal = currentLang.find('aside')
    const cnBtn = optionsModal.find('span[id="CN"]')

    expect(cnBtn.exists()).toBeTruthy()

    cnBtn.trigger('click')

    app.vm.$nextTick(() => {
      expect(app.vm.$i18n.locale).toEqual('CN')
    })
  })

  it('Change language to English', () => {
    currentLang.trigger('click')

    app.vm.$nextTick(() => {
      const optionsModal = currentLang.find('aside')
      const enBtn = optionsModal.find('span[id="EN"]')
  
      expect(enBtn.exists()).toBeTruthy()
  
      enBtn.trigger('click')

      app.vm.$nextTick(() => {
        expect(app.vm.$i18n.locale).toEqual('EN')
      })
      
    })
  })

  it('Should find the steppr component', () => {
    expect(app.exists()).toBeTruthy()
  })

  it('Should start with first step and fill the inputs', async() => {

    expect(first_step.exists()).toBeTruthy()

    await app.find('input[name="firstName"]').setValue('Rick')
    await app.find('input[name="lastName"]').setValue('Lee')
    
    expect(first_step.vm.firstName).toEqual('Rick')
    expect(first_step.vm.lastName).toEqual('Lee')
  })

  it('Should complete the first step and move to the next', async() => {

    nextBtn.trigger('click')
    expect(nextBtn.exists()).toBeTruthy()

    app.vm.$nextTick(() => {
      const second_step = app.findComponent(step_2)  
      expect(second_step.exists()).toBeTruthy()
    })
  })

  it('Should move back to the first step', async() => {

    const second_step = app.findComponent(step_2)  
  
    const prevBtn = second_step.find('button[id="prev"]')
    expect(prevBtn.exists()).toBeTruthy()
  })  

  it('Should complete the second step', async() => {
    const second_step = app.findComponent(step_2)  
    const finalBtn = second_step.find('button[id="next"]')
    expect(finalBtn.exists()).toBeTruthy()
    finalBtn.trigger('click')
    
    app.vm.$nextTick(() => {
      expect(second_step.vm.apiFired).toEqual(true)
    })   
  })
})
