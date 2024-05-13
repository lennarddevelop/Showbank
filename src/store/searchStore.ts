import { reactive } from 'vue'

export const searchStore = reactive({
  query: '',
  setQuery(newQuery: string) {
    this.query = newQuery
  }
})
