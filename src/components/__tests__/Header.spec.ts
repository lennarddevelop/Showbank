import { describe, it, expect } from 'vitest'
// import { mount } from '@vue/test-utils'
import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper.exists()).toBe(true)
  })

  it('displays the ShowBank title', () => {
    const wrapper = shallowMount(Header)
    const title = wrapper.find('.header__title')
    expect(title.text()).toBe('ShowBank')
  })

  it('renders the Search component', () => {
    const wrapper = shallowMount(Header)
    const searchComponent = wrapper.findComponent({ name: 'Search' })
    expect(searchComponent.exists()).toBe(true)
  })
})
