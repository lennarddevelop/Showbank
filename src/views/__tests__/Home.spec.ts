import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home', () => {
  it('displays show list when no error is present', () => {
    const shows = [
      {
        id: 1,
        name: 'Show 1',
        genres: ['Genre 1', 'Genre 2']
      },
      {
        id: 2,
        name: 'Show 2',
        genres: ['Genre 2', 'Genre 3']
      }
    ]
    const wrapper = mount(Home, {
      data() {
        return {
          shows: shows,
          error: null
        }
      }
    })

    expect(wrapper.find('.error').exists()).toBe(false)
    expect(wrapper.findAllComponents({ name: 'ShowList' }))
  })
})
