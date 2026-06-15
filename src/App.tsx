import { useState, useEffect, useRef } from 'react'
// 15:04

export default function App() {
  const [count, setCount] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  // useEffect(실행할함수, 의존성배열)
  useEffect(() => {
    // if (inputRef.current instanceof HTMLInputElement) {
    //   inputRef.current.focus()
    // }
    inputRef.current?.focus()
  }, [])

  return (
    <>
      <h1>카운트: {count}</h1>
      <input
        ref={inputRef}
        type="text"
      />
      <button onClick={() => setCount(count + 1)}>증가</button>
    </>
  )
}
