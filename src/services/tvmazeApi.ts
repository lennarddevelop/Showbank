let shows: any[] | null = null

export async function fetchShows() {
  if (shows) {
    return shows
  }
  try {
    const response = await fetch('https://api.tvmaze.com/shows')
    if (!response.ok) {
      throw new Error('Failed to fetch shows')
    }
    shows = await response.json()

    return shows
  } catch (error) {
    console.error('fetchShows error: ', error)
    throw error
  }
}

const showCache: { [key: number]: any } = {}

export async function fetchShowId(showId: number) {
  if (showCache[showId]) {
    return showCache[showId]
  }

  try {
    const response = await fetch(`https://api.tvmaze.com/shows/${showId}`)
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }
    const show = await response.json()

    showCache[showId] = show
    return show
  } catch (error) {
    console.error('Failed to fetch show details:', error)
    return null
  }
}

const fetchShowsBySearchCache: { [key: string]: any } = {}

export async function fetchShowsBySearch(search: string) {
  if (fetchShowsBySearchCache[search]) {
    return fetchShowsBySearchCache[search]
  }

  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }
    const shows = await response.json()

    fetchShowsBySearchCache[search] = shows
    return shows
  } catch (error) {
    console.error('Failed to fetch show details:', error)
    return null
  }
}
