import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router'

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

export default function Movies() {
  const [searchText, setSearchText] = useState('')
  const [movies, setMovies] = useState<Movie[]>([])

  async function fetchMovies() {
    const { data } = await axios.get<ResponseValue>(
      `https://omdbapi.com?apikey=7035c60c&s=${searchText}`
    )
    setMovies(data.Search || [])
  }

  return (
    <>
      <h1>Movies Page!</h1>
      <div>
        <input
          type="text"
          value={searchText}
          onChange={event => setSearchText(event.target.value)}
          onKeyDown={event => {
            if (event.nativeEvent.isComposing) return
            if (event.key === 'Enter') fetchMovies()
          }}
        />
        <button onClick={() => fetchMovies()}>검색</button>
      </div>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.imdbID}>
              <Link to={`/movies/${movie.imdbID}`}>{movie.Title}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

// 36:30
