import { useState, useMemo } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  // useMemo(실행할함수, 의존성배열)
  const double = useMemo(() => count * 2, [count])

  return (
    <>
      <h1>count: {count}</h1>
      <h2>double: {double}</h2>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </>
  )
}
