import axios from 'axios'
import { Episode, Tvshow } from 'typings'

interface ApiResponse {
  data: any
}

export const getShowInfo = async (showId: number): Promise<Tvshow | null> => {
  return axios
    .get(`https://api.tvmaze.com/shows/${showId}`)
    .then((response: ApiResponse) => {
      if (response.data) {
        const div = document.createElement('div')
        div.innerHTML = response.data.summary
        const summary = div.textContent || div.innerText || ''
        return {
          name: response.data.name,
          summary: summary,
          image: response.data.image.medium,
          network: response.data.network.name,
          schedule: `${response.data.schedule.days.join(', ')} at ${response.data.schedule.time} (${
            response.data.averageRuntime
          } min)`,
          status: response.data.status,
          type: response.data.type,
          genres: response.data.genres.join(' | '),
          website: response.data.network.officialSite,
          rating: response.data.rating.average,
        }
      } else {
        return null
      }
    })
    .catch((error: any) => {
      console.log(error)
      return null
    })
}

export const getEpisodeList = async (showId: number): Promise<Episode[]> => {
  return axios
    .get(`https://api.tvmaze.com/shows/${showId}/episodes`)
    .then((response: ApiResponse) => {
      if (response.data && Array.isArray(response.data)) {
        return response.data.map((row) => {
          const div = document.createElement('div')
          div.innerHTML = row.summary
          const summary = div.textContent || div.innerText || ''

          return {
            name: row.name,
            summary: summary,
            image: row.image.medium,
            number: `Season ${row.season}, Episode ${row.number}`,
            airdate: new Date(row.airstamp).toLocaleString(),
            runtime: `${row.runtime} min`,
            rating: row.rating.average,
          }
        })
      } else {
        return []
      }
    })
    .catch((error: any) => {
      console.log(error)
      return []
    })
}
