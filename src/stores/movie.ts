import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import axios from 'axios'

export interface ResponseValue {
  Response: 'True' | 'False'
  Search?: Movie[]
  totalResults?: `${number}`
  Error?: string
}
export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export const useMovieStore = create(
  combine(
    {
      // 상태(데이터)
      searchText: '',
      movies: [] as Movie[]
    },
    (set, get) => {
      return {
        // 액션(함수)
        setSearchText: function (text: string) {
          set({
            searchText: text
          })
        },
        fetchMovies: async function () {
          const { searchText } = get()
          const { data } = await axios.get<ResponseValue>(
            `https://omdbapi.com?apikey=7035c60c&s=${searchText}`
          )
          // setMovies(data.Search || [])
          set({
            movies: data.Search || []
          })
        }
        // abc: () => {},
        // def: function () {},
        // xyz() {},
        // hello: async function () {},
        // async world() {}
      }
    }
  )
)
