import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Search from '@/views/Search.vue'

describe('Search', () => {
  it('displays "No search results found" message when there are no search results', async () => {
    const wrapper = mount(Search)
    // Set searchResults value to an empty array
    ;(wrapper.vm as any).searchResults = []

    await wrapper.vm.$nextTick()

    expect(wrapper.find('.search-results__no-results').text()).toBe('No search results found.')
    expect(wrapper.find('.search-results__error').exists()).toBe(false)
    expect(wrapper.findComponent({ name: 'ShowList' }).exists()).toBe(false)
  })

  it('displays search results when there are search results', async () => {
    const wrapper = mount(Search)
    // Set searchResults value to an array of search results
    ;(wrapper.vm as any).searchResults = [
      { id: 1, name: 'Show 1' },
      { id: 2, name: 'Show 2' },
      { id: 3, name: 'Show 3' }
    ]

    await wrapper.vm.$nextTick()

    expect(wrapper.find('.search-results__no-results').exists()).toBe(false)
    expect(wrapper.find('.search-results__error').exists()).toBe(false)
    expect(wrapper.findComponent({ name: 'ShowList' }).exists()).toBe(true)
    expect(wrapper.findAll('.show-list__item')).toHaveLength(3)
  })
})
