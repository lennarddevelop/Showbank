import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ShowCard from '@/components/ShowCard.vue'

describe('ShowCard', () => {
  // it('renders the show card with correct image and alt text', () => {
  //   const show = {
  //     id: 1,
  //     image: {
  //       original: 'original-image-url',
  //       medium: 'medium-image-url'
  //     },
  //     name: 'Show Name'
  //   }
  //   const wrapper = mount(ShowCard, {
  //     props: {
  //       show
  //     }
  //   })
  //   const img = wrapper.find('img')
  //   expect(img.attributes('v-lazy')).toBe(show.image.medium)
  //   expect(img.attributes('alt')).toBe(show.name)
  // })
  // it('renders the show card with default image if show.image.original is null', () => {
  //   const show = {
  //     id: 1,
  //     image: {
  //       original: null,
  //       medium: 'medium-image-url'
  //     },
  //     name: 'Show Name'
  //   }
  //   const wrapper = mount(ShowCard, {
  //     props: {
  //       show
  //     }
  //   })
  //   const img = wrapper.find('img')
  //   expect(img.attributes('v-lazy')).toBe('../images/medium-image.png')
  //   expect(img.attributes('alt')).toBe(show.name)
  // })
  // it('renders the show card with default image if show.image is null', () => {
  //   const show = {
  //     id: 1,
  //     image: null,
  //     name: 'Show Name'
  //   }
  //   const wrapper = mount(ShowCard, {
  //     props: {
  //       show
  //     }
  //   })
  //   const img = wrapper.find('img')
  //   expect(img.attributes('src')).toBe('../images/medium-image.png')
  //   expect(img.attributes('alt')).toBe(show.name)
  // })
})
