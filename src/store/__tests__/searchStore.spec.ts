import { describe, it, expect } from 'vitest'
import { searchStore } from '@/store/searchStore'

describe('searchStore', () => {
  it('should initialize with an empty query', () => {
    expect(searchStore.query).toBe('')
  })

  it('should update the query when setQuery is called', () => {
    const newQuery = 'example query'
    searchStore.setQuery(newQuery)
    expect(searchStore.query).toBe(newQuery)
  })
})
