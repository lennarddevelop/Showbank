import { describe, it, expect } from 'vitest'
import { shallowMount, mount } from '@vue/test-utils'
import ShowList from '@/components/ShowList.vue'

describe('ShowList', () => {
  it('renders the title correctly', () => {
    const title = 'Test Title'
    const wrapper = mount(ShowList, {
      props: {
        title // Assuming the component expects a title prop
      }
    })

    const titleWrapper = wrapper.find('h1') // Adjust selector as needed
    expect(titleWrapper.exists()).toBe(true) // Ensure the element exists
    expect(titleWrapper.text()).toBe(title) // Then check its text content
  })

  it('renders the correct number of ShowCard components', () => {
    const shows = [
      {
        id: 1,
        image: { medium: 'medium_image_url', original: 'original_image_url' },
        name: 'Show Name'
      },
      {
        id: 1,
        image: { medium: 'medium_image_url', original: 'original_image_url' },
        name: 'Show Name 2'
      },
      {
        id: 1,
        image: { medium: 'medium_image_url', original: 'original_image_url' },
        name: 'Show Name 4'
      }
    ]

    const wrapper = shallowMount(ShowList, {
      props: {
        shows,
        title: 'Test Title'
      }
    })

    expect(wrapper.findAll('.show-list__item')).toHaveLength(shows.length)
  })

  it('calls the next method when the next button is clicked', async () => {
    const wrapper = mount(ShowList, {
      // Ensure any required props or data that cause the next button to render are set up here
    })

    const nextButton = wrapper.find('.next-button') // Use the correct selector for your next button
    if (nextButton.exists()) {
      await nextButton.trigger('click')
      // Add assertions to check if the expected method was called
    } else {
      throw new Error('Next button does not exist')
    }
  })

  it('calls the prev method when the prev button is clicked', async () => {
    const wrapper = mount(ShowList, {
      // Ensure any required props or data that cause the prev button to render are set up here
    })

    const prevButton = wrapper.find('.prev-button') // Use the correct selector for your prev button
    if (prevButton.exists()) {
      await prevButton.trigger('click')
      // Add assertions to check if the expected method was called
    } else {
      throw new Error('Prev button does not exist')
    }
  })
})
