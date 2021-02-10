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

describe('divide.vue', () => {  
  it('divides two numbers', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal =21
    wrapper.vm.divide('7');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })
})

describe('numberClick.vue', () => {  
  it('extends entered number', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.numberClick('4');
    wrapper.vm.numberClick('5');
    expect(wrapper.vm.runningTotal).to.equal(45)
  })
})

describe('numberClick.vue', () => {  
  it('extends entered number', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.numberClick('4');
    wrapper.vm.numberClick('5');
    expect(wrapper.vm.runningTotal).to.equal(45)
  })
})

describe('operatorClick.vue', () => {  
  it('chains multiple operations', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.numberClick('4');
    wrapper.vm.operatorClick('*');
    wrapper.vm.numberClick('5');
    wrapper.vm.operatorClick('=');
    wrapper.vm.operatorClick('/');
    wrapper.vm.numberClick('2');
    wrapper.vm.operatorClick('=');
    expect(wrapper.vm.runningTotal).to.equal(10)
  })
})
