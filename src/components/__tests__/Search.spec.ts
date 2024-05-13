// import { describe, it, expect } from 'vitest'
// import { mount } from '@vue/test-utils'
// import Search from '@/components/Search.vue'

// describe('Search', () => {
//   it('performs search when input value changes', async () => {
//     const wrapper = mount(Search)
//     const input = wrapper.find('.search__input')

//     // Simulate user input
//     await input.setValue('test')

//     // Assert that the search query is updated
//     expect(wrapper.vm.searchQuery as any).toBe('test')

//     // Assert that the performSearch method is called
//     expect(wrapper.vm.performSearch as any).toHaveBeenCalled()
//   })

//   it('navigates to search page when search query is not empty', async () => {
//     const wrapper = mount(Search)
//     const input = wrapper.find('.search__input')

//     // Simulate user input
//     await input.setValue('test')

//     // Assert that the router.push method is called with the correct path and query
//     expect(wrapper.vm.router.push as any).toHaveBeenCalledWith({
//       path: '/search',
//       query: { q: 'test' }
//     })
//   })

//   it('navigates to home page when search query is empty', async () => {
//     const wrapper = mount(Search)
//     const input = wrapper.find('.search__input')

//     // Simulate user input
//     await input.setValue('')

//     // Assert that the router.push method is called with the correct path
//     expect(wrapper.vm.router.push as any).toHaveBeenCalledWith({ path: '/' })
//   })
// })
