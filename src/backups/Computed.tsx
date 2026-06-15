import { useState } from 'react'

// const getDouble = () => count * 2
function getDouble(count: number) {
  return count * 2
}

export default function App() {
  const [count, setCount] = useState(0)
  // useMemo(실행할함수, 의존성배열)
  const double = getDouble(count)

  return (
    <>
      <h1>count: {count}</h1>
      <h2>double: {double}</h2>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </>
  )
}
