import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  })
  })

describe('add.vue', () => {  
  it('adds two numbers together', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal =1
    wrapper.vm.add('4');
    expect(wrapper.vm.runningTotal).to.equal(5)
  })
})

describe('subtract.vue', () => {  
  it('subtracts two numbers', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 7
    wrapper.vm.subtract('4');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })
})

describe('multiply.vue', () => {  
  it('multiplies two numbers', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal =3
    wrapper.vm.multiply('5');
    expect(wrapper.vm.runningTotal).to.equal(15)
  })
})