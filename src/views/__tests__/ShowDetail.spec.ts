import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import ShowDetail from '@/views/ShowDetail.vue'
import { useRoute } from 'vue-router'

// Mock the useRoute hook
vi.mock('vue-router', () => ({
  useRoute: vi.fn(() => ({ params: { id: '1' } }))
}))

describe('ShowDetail', () => {
  beforeEach(() => {
    // Reset all mocks before each test
    vi.resetAllMocks()
    // No need to setup useRoute.mockReturnValue here because it's already defined in vi.mock above
  })
  it('renders show details correctly when show is available', () => {
    const show = {
      id: 1,
      name: 'Show Name',
      image: {
        original: 'https://example.com/show.jpg'
      },
      genres: ['Genre 1', 'Genre 2'],
      rating: {
        average: 8.5
      },
      language: 'English',
      premiered: '2021-01-01',
      officialSite: 'https://example.com',
      summary: '<p>Show summary</p>',
      averageRuntime: 60
    }

    const wrapper = mount(ShowDetail, {
      props: {
        show: show,
        loading: false
      }
    })

    expect(wrapper.find('.show-detail__title').text()).toBe('Show Name')
    expect(wrapper.find('.show-detail__image img').attributes('src')).toBe(
      'https://example.com/show.jpg'
    )
    expect(wrapper.findAll('.show-detail__genre')).toHaveLength(2)
    expect(wrapper.find('.show-detail__rating').text()).toBe(' - ★ 8.5')
    expect(wrapper.find('.show-detail__language').text()).toBe(' - English')
    expect(wrapper.find('.show-detail__premiered').text()).toBe('Premiered: 2021-01-01')
    expect(wrapper.find('.show-detail__link').attributes('href')).toBe('https://example.com')
    expect(wrapper.find('.show-detail__summary').html()).toBe(
      '<div class="show-detail__summary"><p>Show summary</p></div>'
    )
    expect(wrapper.find('.show-detail__average-runtime').text()).toBe(' - 60m')
  })

  it('renders "Show not found" message when show is not available', () => {
    const wrapper = mount(ShowDetail, {
      props: {
        show: null,
        loading: false
      }
    })

    expect(wrapper.find('.show-detail__not-found').text()).toBe('Show not found.')
  })

  it('renders loading state when loading is true', () => {
    const wrapper = mount(ShowDetail, {
      props: {
        show: null,
        loading: true
      }
    })

    expect(wrapper.find('.show-detail__loading').exists()).toBe(true)
  })
  afterEach(() => {
    vi.resetModules()
  })
})
