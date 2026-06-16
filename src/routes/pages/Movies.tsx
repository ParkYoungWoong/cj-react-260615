import axios from 'axios'
import { useState } from 'react'

export default function Movies() {
  const [searchText, setSearchText] = useState('')

  async function fetchMovies() {
    const { data } = await axios.get(
      `https://omdbapi.com?apikey=7035c60c&s=${searchText}`
    )
    console.log(data)
  }

  return (
    <>
      <h1>Movies Page!</h1>
      <div>
        <input
          type="text"
          value={searchText}
          onChange={event => setSearchText(event.target.value)}
        />
        <button>검색</button>
      </div>
    </>
  )
}
