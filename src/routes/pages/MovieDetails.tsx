import { useParams } from 'react-router'
import axios from 'axios'
import { useEffect, useState } from 'react'

export interface Movie {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: Rating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}
export interface Rating {
  Source: string
  Value: string
}

export default function MovieDetails() {
  const { movieId } = useParams()
  const [movie, setMovie] = useState<Movie | null>(null)

  // useEffect(실행할함수, 의존성배열)
  useEffect(() => {
    async function fetchMovie() {
      const { data } = await axios.get<Movie>(
        `https://omdbapi.com?apikey=7035c60c&i=${movieId}`
      )
      setMovie(data)
    }
    fetchMovie()
  }, [])

  return (
    <>
      {movie && (
        <>
          <h1>{movie.Title}</h1>
          <img
            src={`https://img.omdbapi.com?apikey=7035c60c&i=${movieId}&h=1500`}
            alt={movie.Title}
          />
          <p>{movie.Plot}</p>
          <p>{movie.Actors}</p>
          <p>{movie.Director}</p>
          <p>{movie.Writer}</p>
          {movie.Ratings.map(rating => {
            return (
              <p key={rating.Source}>
                {rating.Source} - {rating.Value}
              </p>
            )
          })}
        </>
      )}
    </>
  )
}
